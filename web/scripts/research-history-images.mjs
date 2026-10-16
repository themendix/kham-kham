/** Recherche documentaire pour le premier lot Histoire. Aucun changement de contenu. */
import { writeFile, readFile } from 'node:fs/promises';
import { join } from 'node:path';
const topics = [
  ['01-2', 'Pharaoh offering Maat relief'], ['01-3', 'Rosetta Stone'], ['01-4', 'Papyrus Ani weighing heart'], ['01-5', 'Taharqa sphinx'],
  ['02-1', 'Nubian archers model'], ['02-2', 'Taharqa statue'], ['02-3', 'Meroe iron slag'], ['02-4', 'Apedemak Naqa relief'], ['02-5', 'Meroe pyramids'],
  ['03-1', 'Adulis ruins'], ['03-2', 'Ezana coin'], ['03-3', 'Ethiopian Geez gospel manuscript'], ['03-4', 'Aksum stelae'], ['03-5', 'Ezana stone'],
  ['04-1', 'Phoenician colonization map'], ['04-2', 'Carthage Punic ports'], ['04-3', 'Hannibal route map'], ['04-4', 'Massinissa coin'], ['04-5', 'Timgad panorama'],
  ['05-1', 'Ghana Empire map'], ['05-2', 'Taoudenni salt slabs'], ['05-3', 'Koumbi Saleh ruins'], ['05-4', 'Ghana empire trans Saharan trade map'], ['05-5', 'Ghana independence 1957 Nkrumah'],
  ['06-1', 'Kangaba Kamablon'], ['06-2', 'griot kora Mali'], ['06-3', 'Kirina Mali battle map'], ['06-4', 'Kurukan Fuga Manden charter'], ['06-5', 'Mali empire map'],
  ['07-1', 'Mansa Musa Catalan Atlas'], ['07-2', 'Mansa Musa pilgrimage map'], ['07-3', 'Catalan Atlas Mansa Musa'], ['07-4', 'Djinguereber mosque'], ['07-5', 'Timbuktu manuscripts'],
  ['08-1', 'Gao Niger river'], ['08-2', 'Songhai empire map'], ['08-3', 'Tomb Askia'], ['08-4', 'Sankore mosque'], ['08-5', 'Tondibi battle map'],
  ['09-1', 'Trans Saharan trade routes map'], ['09-2', 'Sankore mosque'], ['09-3', 'Timbuktu astronomy manuscript'], ['09-4', 'Djenne mosque replastering'], ['09-5', 'Timbuktu manuscripts preservation'],
  ['10-1', 'Kanem Bornu map'], ['10-2', 'Kanem trans Saharan trade'], ['10-3', 'Kanem Bornu Lake Chad map'], ['10-4', 'Idris Alooma'], ['10-5', 'Bornu Denham 1823'],
  ['01-2b', 'Ramses offering Maat'], ['02-3b', 'Meroe smelting'], ['03-1b', 'Adulis'], ['03-2b', 'Ezana'], ['03-3b', 'Garima Gospels'],
  ['04-1b', 'Phoenician colonies map'], ['04-2b', 'Carthage harbour'], ['05-2b', 'Taoudenni'], ['05-3b', 'Koumbi Saleh'],
  ['06-1b', 'Ghana successor map 1200'], ['06-2b', 'griot mandingue'], ['06-3b', 'Kirina'], ['06-4b', 'Assemblée constitutive empire Mandé'], ['06-5b', 'Mali Empire map'],
  ['07-2b', 'Mansa Musa Mecca'], ['08-5b', 'Bataille de tondibi'], ['09-4b', 'Djenne plastering'], ['10-4b', 'Ottoman musket 16th century'],
  ['06-2c', 'Balla Kouyate'],
];
const dest = join(process.env.TEMP, 'kham-history-research.json');
const result = JSON.parse(await readFile(dest, 'utf8').catch(() => '{}'));
const clean = s => (s ?? '').replace(/<[^>]*>/g, '').replace(/\s+/g,' ').trim();
for (const [key, query] of topics) {
  if (result[key]) continue;
  const url = new URL('https://commons.wikimedia.org/w/api.php');
  url.search = new URLSearchParams({action:'query',format:'json',generator:'search',gsrnamespace:'6',gsrsearch:query+' -filetype:pdf',gsrlimit:'4',prop:'imageinfo',iiprop:'url|extmetadata|size'});
  try {
    await new Promise(resolve => setTimeout(resolve, 4000));
    const response = await fetch(url, {headers:{'User-Agent':'KhamKhamEducational/1.0 (documentary image research)'}});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    if (data.error) throw new Error(JSON.stringify(data.error));
    const candidates = Object.values(data.query?.pages ?? {}).map(p => {
      const info=p.imageinfo?.[0], meta=info?.extmetadata ?? {};
      return {title:p.title,url:info?.url,page:info?.descriptionurl,width:info?.width,height:info?.height,license:clean(meta.LicenseShortName?.value),licenseUrl:meta.LicenseUrl?.value,author:clean(meta.Artist?.value),description:clean(meta.ImageDescription?.value),date:clean(meta.DateTimeOriginal?.value)};
    });
    result[key] = {query,candidates};
    await writeFile(dest, JSON.stringify(result,null,2));
    console.log(key+' '+candidates.map(c=>c.title+' ['+c.license+']').join(' | '));
  } catch(e) { console.log(key+' ERROR '+e.message); }
}
console.log('Recherche enregistrée : '+dest);
