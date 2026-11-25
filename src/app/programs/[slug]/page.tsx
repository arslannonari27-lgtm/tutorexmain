import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Button } from '@/components/ui/button';
import { programs, getProgram } from '@/lib/programs';

export function generateStaticParams() { return programs.map(p => ({slug: p.slug})); }
export function generateMetadata({params}:{params:{slug:string}}):Metadata {
 const p=getProgram(params.slug);
 if (!p) return { title: 'Program Not Found' };
 return {title:`${p.name} Online Tutor Inquiries`,description:p.description,alternates:{canonical:`/programs/${p.slug}`}};
}
export default function ProgramDetail({params}:{params:{slug:string}}) {
 const p=getProgram(params.slug);
 if (!p) notFound();
 return <>
   <PageHero eyebrow="Exam preparation inquiry" title={`${p.name} online tutoring support`} description={p.description}/>
   <section className="section-pad"><div className="container grid gap-12 lg:grid-cols-[1fr_.9fr]">
      <div><h2 className="heading text-3xl">What you can ask about</h2><div className="mt-7 grid gap-3">{p.topics.map(item=><div key={item} className="flex items-start gap-3 rounded-xl border border-navy/10 bg-white p-4"><CheckCircle2 className="mt-0.5 shrink-0 text-teal" size={20}/><span className="text-sm font-medium text-navy">{item}</span></div>)}</div>
        <div className="mt-8"><Button size="lg" asChild><Link href={`/find-a-tutor?program=${encodeURIComponent(p.formValue)}`}>Request {p.name} Support <ArrowRight size={16}/></Link></Button></div>
      </div>
      <aside className="rounded-3xl bg-cloud p-7 border border-navy/10"><h2 className="font-heading text-xl font-bold text-navy">{p.slug==='ielts'?'IELTS skill areas':'Common inquiry subjects'}</h2><ul className="mt-5 grid gap-3">{p.subjects.map(subject=><li key={subject} className="flex gap-3 text-sm leading-6 text-ink/75"><CheckCircle2 size={17} className="text-teal shrink-0 mt-1"/>{subject}</li>)}</ul><p className="mt-7 text-xs leading-6 text-ink/60">{p.slug==='ielts'?'Select Academic or General Training when inquiring. Target band and test date are optional and do not guarantee a result.':'Please share your exact exam board, grade or syllabus where known. Subject availability varies by tutor qualifications and scheduling.'}</p></aside>
   </div></section>
   <section className="bg-cloud py-10"><div className="container"><p className="text-sm text-ink/70">We are building a screened tutor network. No specialist tutor, demo slot, exam outcome or IELTS band is guaranteed. Availability and fees are confirmed before any enrollment.</p></div></section>
 </>;
}
