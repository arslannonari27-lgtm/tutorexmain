import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const pages=['','find-a-tutor','subjects','programs','programs/[slug]','how-it-works','about','become-a-tutor','contact','faq','privacy','terms','safeguarding'];
const errors=[];
for(const page of pages){const f=path.join(root,'src/app',page,'page.tsx');if(!fs.existsSync(f))errors.push('Missing page: '+(page||'/'));}
for(const file of ['src/app/robots.ts','src/app/sitemap.ts','src/app/layout.tsx','public/images/hero-placeholder.svg','public/images/logo-placeholder.svg','public/images/about-placeholder.svg','public/images/og-placeholder.png','.env.example','components.json'])if(!fs.existsSync(path.join(root,file)))errors.push('Missing required file: '+file);
const srcDir=path.join(root,'src');
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const files=walk(srcDir).filter(f=>/\.tsx?$/.test(f));
for(const f of files){const txt=fs.readFileSync(f,'utf8');for(const m of txt.matchAll(/(?:href|src)="(\/[^"#?]+)"/g)){const p=m[1];if(/\.(svg|png|jpg|webp)$/.test(p)){if(!fs.existsSync(path.join(root,'public',p)))errors.push(`${f}: missing asset ${p}`);}else if(!pages.includes(p.slice(1)))errors.push(`${f}: unknown internal route ${p}`);}}
for(const slug of ['o-level','a-level','ielts'])if(!fs.readFileSync(path.join(root,'src/lib/programs.ts'),'utf8').includes(`slug: '${slug}'`))errors.push('Missing exam program: '+slug);
if(/20K|20,000|guaranteed results|verified tutors|5-star testimonials/i.test(fs.readFileSync(path.join(root,'src/app/page.tsx'),'utf8')))errors.push('Homepage may include unverified marketing claim');
if(errors.length){console.error('FAIL content checks\n'+errors.join('\n'));process.exit(1);}
console.log(`PASS: ${pages.length} page components (${pages.length+2} public routes counting 3 exam program slugs), ${files.length} source files, internal routes, known image paths and claim checks.`);
