/** Intègre uniquement les leçons du lot 01 dont les sources ont été vérifiées et préparées. */
import { readFile, writeFile } from 'node:fs/promises';
import ts from 'typescript';
import { format } from 'prettier';
const path='src/data/courses/histoire.ts';
const source=await readFile(path,'utf8');
const manifest=JSON.parse(await readFile('docs/histoire-visuels-lot-01.json','utf8'));
const editorial=JSON.parse(await readFile('docs/histoire-visuels-lot-01-textes.json','utf8'));
for(const e of manifest.entries) Object.assign(e,editorial[e.key] ?? {});
const courses=load(source).HISTOIRE_COURSES;
const {lessonWordCount}=load(await readFile('src/lib/lessonBlocks.ts','utf8'));
const replacements=[];
const ast=ts.createSourceFile(path,source,ts.ScriptTarget.Latest,true);
function visit(node) {
  if(ts.isObjectLiteralExpression(node)) {
    const idProp=node.properties.find(p=>ts.isPropertyAssignment(p)&&p.name.getText(ast)==='id');
    const id=idProp&&ts.isStringLiteral(idProp.initializer)?idProp.initializer.text:'';
    const match=/^course-histoire-(\d{2})-.+-lesson-(\d)$/.exec(id);
    const entry=match && manifest.entries.find(e=>e.key===match[1]+'-'+match[2]);
    if(entry?.asset && !entry.existing && !entry.missing) {
      const course=courses.find(c=>c.lessons.some(l=>l.id===id));
      const lesson=course.lessons.find(l=>l.id===id);
      const blocks=structuredClone(lesson.blocks.filter(b=>b.type!=='image'));
      let pi=0;
      for(const b of blocks) {
        if(b.type==='paragraphe' && entry.paragraphs) b.text=entry.paragraphs[pi++];
        if(b.type==='leSavaisTu' && typeof entry.aside==='string') b.text=entry.aside;
        if(b.type==='aRetenir' && entry.points) b.points=entry.points;
      }
      if(entry.aside===null) {const i=blocks.findIndex(b=>b.type==='leSavaisTu');if(i>=0) blocks.splice(i,1);}
      const author=entry.author || entry.source.author.replace(/ \(talk\).*$/,'').replace(/Unknown authorUnknown author/,'Auteur inconnu');
      const credit=(author || 'Wikimedia Commons')+', '+(entry.source.license==='Public domain'?'domaine public':entry.source.license)+(entry.adaptation ? ', adaptation française, WebP' : ', WebP');
      const block={type:'image',alt:entry.alt,legende:entry.legende,credit,sourceUrl:entry.source.page};
      if(entry.source.licenseUrl) block.licenseUrl=entry.source.licenseUrl;
      if(entry.fit) block.fit=entry.fit;
      const insert=blocks.findLastIndex(b=>b.type==='paragraphe')+1;
      blocks.splice(insert,0,block);
      const count=lessonWordCount(blocks); entry.wordCount=count;
      console.log(entry.key+' '+count+' mots'+(count>110?' À ALLÉGER':''));
      if(process.argv.includes('--check')) return;
      const prop=node.properties.find(p=>ts.isPropertyAssignment(p)&&p.name.getText(ast)==='blocks');
      const rendered=awaitFormatPlaceholder(blocks);
      replacements.push({start:prop.initializer.getStart(ast),end:prop.initializer.end,rendered});
    }
  }
  ts.forEachChild(node,visit);
}
const pending=[];
function awaitFormatPlaceholder(blocks) {const index=pending.length;pending.push(format('const blocks = '+JSON.stringify(blocks)+';',{parser:'typescript',printWidth:120}));return index;}
visit(ast);
if(!process.argv.includes('--check')) {
  const formatted=await Promise.all(pending);
  let updated=source;
  for(const r of replacements.sort((a,b)=>b.start-a.start)) {
    const array=formatted[r.rendered].replace(/^const blocks = /,'').replace(/;\s*$/,'');
    updated=updated.slice(0,r.start)+array.split('\n').map((line,i)=>i===0?line:'        '+line).join('\n')+updated.slice(r.end);
  }
  await writeFile(path,updated);
}
await writeFile('docs/histoire-visuels-lot-01.json',JSON.stringify(manifest,null,2)+'\n');
function load(text) {const exports={};new Function('exports',ts.transpile(text,{module:ts.ModuleKind.CommonJS}))(exports);return exports;}
