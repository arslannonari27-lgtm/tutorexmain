import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpenCheck, GraduationCap, Languages } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import { Button } from '@/components/ui/button';
import { programs } from '@/lib/programs';
import { CtaBand } from '@/components/cta-band';

export const metadata: Metadata = {
  title: 'O Level, A Level & IELTS Tutor Inquiries',
  description: 'Explore tutor matching inquiries for Cambridge O Level, Cambridge International AS & A Level and IELTS Academic or General Training preparation.',
  alternates: { canonical: '/programs' },
};
const icons = [BookOpenCheck, GraduationCap, Languages];
export default function Programs() {
  return <>
    <PageHero eyebrow="Exam & qualification support" title="O Level, A Level & IELTS preparation" description="Share your curriculum, subject or IELTS goals. We can explore specialist tutor options after the relevant screening and availability checks." />
    <section className="section-pad"><div className="container">
      <div className="grid gap-6 md:grid-cols-3">
        {programs.map((p,i)=>{const Icon=icons[i];return <article key={p.slug} className="rounded-3xl border border-navy/10 bg-white p-7 shadow-card flex flex-col"><span className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl bg-teal/10 text-teal"><Icon size={27} strokeWidth={1.8}/></span><h2 className="font-heading text-2xl font-bold text-navy">{p.name}</h2><p className="mt-2 text-sm font-semibold text-teal">{p.subtitle}</p><p className="my-5 text-sm leading-7 text-ink/70 flex-1">{p.description}</p><Link className="inline-flex items-center gap-2 font-semibold text-teal hover:underline" href={`/programs/${p.slug}`}>Explore {p.name} <ArrowRight size={16}/></Link></article>})}
      </div>
      <p className="mt-8 rounded-xl border border-teal/20 bg-cloud p-5 text-sm leading-7 text-ink/70">These are inquiry categories, not confirmed available specialist placements. Syllabuses and IELTS requirements vary. Tutor suitability, fees and demo availability are discussed individually; exam scores and outcomes are not guaranteed.</p>
      <div className="mt-8 text-center"><Button asChild size="lg"><Link href="/find-a-tutor">Request a Tutor <ArrowRight size={16}/></Link></Button></div>
    </div></section><CtaBand/>
  </>;
}
