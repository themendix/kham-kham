/** Prépare les sources documentaires du lot 01 ; aucune recherche ni choix automatiques. */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';
import ts from 'typescript';
const manifestPath = 'docs/histoire-visuels-lot-01.json';
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const clean = s => (s ?? '').replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim();
const mode = process.argv[2];
if (mode === '--resolve') {
  const research = JSON.parse(await readFile(join(process.env.TEMP,'kham-history-research.json'),'utf8'));
  const exact = manifest.entries.filter(e=>e.file && !e.source);
  const files = {};
  if (exact.length) {
    const url = new URL('https://commons.wikimedia.org/w/api.php');
    url.search = new URLSearchParams({action:'query',format:'json',titles:exact.map(e=>e.file).join('|'),prop:'imageinfo',iiprop:'url|extmetadata|size'});
    const response = await fetch(url,{headers:{'User-Agent':'KhamKhamEducational/1.0 (documentary image research)'}});
    if (!response.ok) throw new Error('Commons metadata HTTP '+response.status);
    const data = await response.json();
    for(const p of Object.values(data.query?.pages ?? {})) {
      const info = p.imageinfo?.[0], m=info?.extmetadata ?? {};
      if(info) files[p.title]={title:p.title,url:info.url,page:info.descriptionurl,width:info.width,height:info.height,license:clean(m.LicenseShortName?.value),licenseUrl:m.LicenseUrl?.value,author:clean(m.Artist?.value),description:clean(m.ImageDescription?.value),date:clean(m.DateTimeOriginal?.value)};
    }
  }
  for (const entry of manifest.entries) {
    if(entry.existing || entry.missing || entry.source) continue;
    const source=entry.research ? research[entry.research[0]]?.candidates[entry.research[1]] : files[entry.file];
    if(!source) { console.log(entry.key+' SOURCE INTROUVABLE '+entry.file); continue; }
    if(!/^(CC0|Public domain|CC BY(?:-SA)? [\d.]+(?: \w+)?)$/.test(source.license)) throw new Error('Licence non acceptée '+source.license+' '+entry.key);
    entry.source={...source,url:source.url.split('?')[0]};
    console.log(entry.key+' '+source.title+' ['+source.license+']');
  }
  await writeFile(manifestPath,JSON.stringify(manifest,null,2)+'\n');
} else if (mode === '--download') {
  const cache=join(process.env.TEMP,'kham-history-originals'); await mkdir(cache,{recursive:true});
  for(const entry of manifest.entries) {
    if(!entry.source || entry.existing || entry.missing || entry.asset) continue;
    const source=entry.source;
    const sourceFile=join(cache,entry.key+'-'+encodeURIComponent(source.title));
    let buffer=await readFile(sourceFile).catch(()=>null);
    if(!buffer) {
      // Wikimedia demande des miniatures standard plutôt que des originaux volumineux.
      const url=new URL(source.url);
      url.hostname='thumb.wikimedia.org';
      const filename=url.pathname.split('/').pop();
      const width=source.width >= 1280 ? 1280 : source.width >= 960 ? 960 : source.width >= 500 ? 500 : 330;
      url.pathname=url.pathname.replace('/commons/','/commons/thumb/')+'/'+width+'px-'+filename+(filename.endsWith('.svg') ? '.png' : '');
      const response=await fetch(url,{headers:{'User-Agent':'KhamKhamEducational/1.0'}});
      await new Promise(resolve=>setTimeout(resolve,3000));
      if(!response.ok) {console.log(entry.key+' DOWNLOAD ERROR '+response.status+' '+url); continue;}
      entry.downloadUrl=url.toString();
      buffer=Buffer.from(await response.arrayBuffer()); await writeFile(sourceFile,buffer);
    }
    const course=readCourses().find(c=>c.id.startsWith('course-histoire-'+entry.key.split('-')[0]+'-'));
    const lesson=course.lessons[Number(entry.key.split('-')[1])-1];
    const dest='src/assets/lecons/'+lesson.id+'.webp';
    const image=sharp(buffer,{limitInputPixels:100000000}).rotate();
    const result=await image.resize(1200,null,{withoutEnlargement:!source.title.endsWith('.svg')}).webp({quality:82}).toFile(dest);
    entry.asset=dest; entry.output={width:result.width,height:result.height,bytes:result.size};
    console.log(entry.key+' '+result.width+'x'+result.height+' '+Math.round(result.size/1024)+' Ko');
    await writeFile(manifestPath,JSON.stringify(manifest,null,2)+'\n');
  }
} else if (mode === '--sheets') {
  const entries=manifest.entries.filter(e=>e.asset);
  for(let page=0;page<Math.ceil(entries.length/8);page++) {
    const layers=[];
    for(const [i,e] of entries.slice(page*8,page*8+8).entries()) {
      const thumb=await sharp(e.asset).resize(360,245,{fit:'contain',background:'#f7f4ec'}).png().toBuffer();
      const x=(i%4)*370, y=Math.floor(i/4)*280;
      layers.push({input:thumb,left:x,top:y});
      layers.push({input:Buffer.from('<svg width="360" height="30"><text x="10" y="23" font-size="20" fill="#222">'+e.key+'</text></svg>'),left:x,top:y+245});
    }
    const dest=join(process.env.TEMP,'kham-history-sheet-'+page+'.png');
    await sharp({create:{width:1480,height:560,channels:3,background:'#f7f4ec'}}).composite(layers).png().toFile(dest);
    console.log(dest);
  }
} else { throw new Error('Usage: --resolve | --download | --sheets'); }
function readCourses() {
  const js=ts.transpile(ts.sys.readFile('src/data/courses/histoire.ts'),{module:ts.ModuleKind.CommonJS});
  const exports={}; new Function('exports',js)(exports); return exports.HISTOIRE_COURSES.slice(0,10);
}
