import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {PageHero} from '@/components/page-hero';
import {FAQItems} from '@/components/faq-items';
import {Button} from '@/components/ui/button';
export const metadata:Metadata={title:'Frequently Asked Questions',description:'Answers about tutor matching, availability, demo classes, fees and tutor applications.',alternates:{canonical:'/faq'}};
export default function FAQ(){return <><PageHero eyebrow="Helpful information" title="Frequently asked questions" description="Clear answers about finding tutors, submitting applications and understanding the TutorEx Academy process."/><section className="section-pad"><div className="container max-w-4xl"><FAQItems/><div className="mt-10 flex justify-center"><Button asChild><Link href="/contact">Contact Us <ArrowRight size={16}/></Link></Button></div></div></section></>}
