'use client';
import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2, ClipboardCopy, Mail, AlertCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { site } from '@/lib/site';
import Link from 'next/link';

type Inquiry = {
  guardian:string; email:string; whatsapp:string; grade:string;
  program:string; curriculum:string; subject:string; ieltsType:string;
  examDetails:string; country:string; preferred:string; budget:string;
  currency:string; goals:string;
};
const programOptions = ['School Subject Tutoring','Cambridge O Level','Cambridge International AS & A Level','IELTS Preparation','Other / Not Sure'];
const schoolSubjects = ['Mathematics','English','General Science','Physics','Chemistry','Biology','Computer Science','Urdu','Islamiat','Pakistan Studies','Quran & Tajweed','Other'];
const oLevelSubjects = ['Mathematics','English','Physics','Chemistry','Biology','Computer Science','Urdu','Islamiat','Pakistan Studies','Other'];
const aLevelSubjects = ['Mathematics','English','Physics','Chemistry','Biology','Computer Science','Other'];
const ieltsSkills = ['All four skills','Listening','Reading','Writing','Speaking','Other / Not Sure'];
const curricula = ['Pakistan Board','Cambridge O Level','Cambridge International AS & A Level','UK GCSE','UK A Level (e.g. AQA / Edexcel / OCR)','US Curriculum','IB','Other / Not Sure'];
const initial:Inquiry = {guardian:'',email:'',whatsapp:'',grade:'',program:'',curriculum:'',subject:'',ieltsType:'',examDetails:'',country:'',preferred:'',budget:'',currency:'PKR',goals:''};
const allowedPrograms = new Set(programOptions);
export function InquiryForm({defaultProgram}:{defaultProgram?:string}) {
 const [v,setV]=useState<Inquiry>({...initial,program: defaultProgram && allowedPrograms.has(defaultProgram) ? defaultProgram : ''});
 const [consent,setConsent]=useState(false);
 const [message,setMessage]=useState('');
 const isIelts=v.program==='IELTS Preparation';
 const isOLevel=v.program==='Cambridge O Level';
 const isALevel=v.program==='Cambridge International AS & A Level';
 const subjectOptions=isIelts?ieltsSkills:isOLevel?oLevelSubjects:isALevel?aLevelSubjects:schoolSubjects;
 const set=(key:keyof Inquiry)=>(value:string)=>setV(x=>({...x,[key]:value}));
 const setProgram=(program:string)=>setV(x=>({...x,program,subject:'',ieltsType:'',curriculum:program==='Cambridge O Level'?'Cambridge O Level':program==='Cambridge International AS & A Level'?'Cambridge International AS & A Level':''}));
 const note=()=>`TutorEx Academy — Learning Support Inquiry\n\nParent/Guardian or Adult Learner: ${v.guardian}\nEmail: ${v.email}\nWhatsApp: ${v.whatsapp||'Not provided'}\nProgram: ${v.program}\n${isIelts?'IELTS Test Type: '+v.ieltsType:'Student Grade / Level: '+(v.grade||'Not provided')+'\nCurriculum: '+v.curriculum}\nSubject / Skill: ${v.subject}\n${v.examDetails?'Exam Board, Syllabus, Target Band or Test Date: '+v.examDetails+'\n':''}Country / Time Zone: ${v.country}\nPreferred Days & Timings: ${v.preferred}\nMonthly Budget: ${v.budget?`${v.budget} ${v.currency}`:'Not provided'}\nLearning Goals: ${v.goals||'Not provided'}\n\nPrepared by the visitor using the TutorEx Academy inquiry composer; not sent automatically.`;
 const valid=(form:HTMLFormElement)=>{if(!form.reportValidity()){setMessage('Please complete the required fields.');return false;}if(!consent){setMessage('Please read and accept the privacy notice before continuing.');return false;}return true;};
 const copy=async()=>{
  const form=document.getElementById('parent-inquiry-form') as HTMLFormElement|null;
  if(!form||!valid(form))return;
  try {await navigator.clipboard.writeText(note());setMessage('Inquiry details copied. They have NOT been sent to TutorEx Academy; please send them using an official contact channel.');}
  catch {setMessage('Automatic copy was unavailable. You can select the completed fields and copy them manually, or open the email option if configured.');}
 };
 const email=(event:FormEvent<HTMLFormElement>)=>{event.preventDefault();if(!valid(event.currentTarget))return;if(!site.contactEmail){setMessage('Official email has not been configured. Please use Copy Inquiry instead.');return;}const mail=`mailto:${site.contactEmail}?subject=${encodeURIComponent(`Tutor request | ${v.program} | ${v.subject}`)}&body=${encodeURIComponent(note())}`;setMessage('Your email app is opening with a draft. You must press Send there; this website has not submitted your inquiry.');window.location.href=mail;};
 const text=(id:keyof Inquiry,label:string,required:boolean,placeholder:string,type='text')=><div><Label htmlFor={id}>{label}{required&&' *'}</Label><Input id={id} value={v[id]} onChange={e=>set(id)(e.target.value)} required={required} placeholder={placeholder} type={type} maxLength={200}/></div>;
 return <div className="rounded-3xl border border-navy/10 bg-white p-5 shadow-card sm:p-8"><div className="mb-7"><p className="eyebrow">Tutoring inquiry</p><h2 className="mt-2 font-heading text-2xl font-bold text-navy">Tell us about your learning needs</h2><p className="mt-2 text-sm leading-7 text-ink/65">Parents or guardians may inquire for a child; adult learners may inquire for themselves. Please avoid student names, dates of birth, addresses and sensitive information.</p></div>
 {site.parentFormUrl && <div className="mb-7 rounded-xl border border-teal/20 bg-teal/5 p-4"><p className="text-sm font-semibold text-navy">For tracked submissions, use the official parent/learner inquiry form:</p><a className="mt-2 inline-flex items-center gap-2 font-bold text-teal underline" href={site.parentFormUrl} target="_blank" rel="noopener noreferrer">Open Inquiry Form <ArrowUpRight size={16}/></a></div>}
 <form id="parent-inquiry-form" onSubmit={email} className="space-y-5"><div className="grid gap-5 sm:grid-cols-2">{text('guardian','Parent / Guardian / Adult Learner Name',true,'Your full name')}{text('email','Your Email Address',true,'name@example.com','email')}{text('whatsapp','WhatsApp (with country code)',false,'+92...')}{text('country','Country / Time Zone',true,'e.g. UK / London')}</div>
 <div><Label htmlFor="program">Tutoring Program *</Label><select id="program" required className="input-select" value={v.program} onChange={e=>setProgram(e.target.value)}><option value="">Select program</option>{programOptions.map(o=><option key={o} value={o}>{o}</option>)}</select></div>
 {!isIelts && <div className="grid gap-5 sm:grid-cols-2">{text('grade','Student Grade / Level',true,'e.g. Grade 9, O Level Year 2')}<div><Label htmlFor="curriculum">Curriculum *</Label><select id="curriculum" required className="input-select" value={v.curriculum} onChange={e=>set('curriculum')(e.target.value)}><option value="">Select curriculum</option>{curricula.map(o=><option key={o} value={o}>{o}</option>)}</select></div></div>}
 {isIelts && <div><Label htmlFor="ieltsType">IELTS Test Type *</Label><select id="ieltsType" required value={v.ieltsType} onChange={e=>set('ieltsType')(e.target.value)} className="input-select"><option value="">Select IELTS test type</option><option value="Academic">Academic</option><option value="General Training">General Training</option><option value="Not Sure">Not Sure</option></select></div>}
 <div><Label htmlFor="subject">{isIelts?'IELTS Skill Focus':'Required Subject'} *</Label><select id="subject" required className="input-select" value={v.subject} onChange={e=>set('subject')(e.target.value)}><option value="">{isIelts?'Select skill focus':'Select subject'}</option>{subjectOptions.map(o=><option key={o} value={o}>{o}</option>)}</select></div>
 {(isIelts || isOLevel || isALevel) && <div><Label htmlFor="examDetails">{isIelts?'Target Band / Test Date (optional)':'Exam Board / Syllabus Code (optional)'}</Label><Input id="examDetails" maxLength={200} value={v.examDetails} onChange={e=>set('examDetails')(e.target.value)} placeholder={isIelts?'e.g. Band 7, exam in March':'e.g. Cambridge syllabus code if known'}/></div>}
 <div><Label htmlFor="preferred">Preferred Days & Timings (include local time zone) *</Label><Textarea id="preferred" required maxLength={500} value={v.preferred} onChange={e=>set('preferred')(e.target.value)} placeholder="e.g. Monday–Thursday, 5–7 PM London time"/></div>
 <div className="grid gap-5 sm:grid-cols-[1fr_170px]"><div><Label htmlFor="budget">Approximate Monthly Budget (optional)</Label><Input id="budget" inputMode="decimal" value={v.budget} maxLength={30} onChange={e=>set('budget')(e.target.value)} placeholder="e.g. 15000"/></div><div><Label htmlFor="currency">Currency</Label><select id="currency" value={v.currency} onChange={e=>set('currency')(e.target.value)} className="input-select">{['PKR','GBP','USD','AED','SAR','Other'].map(o=><option key={o}>{o}</option>)}</select></div></div>
 <div><Label htmlFor="goals">Learning Goals (optional)</Label><Textarea id="goals" maxLength={1000} value={v.goals} onChange={e=>set('goals')(e.target.value)} placeholder="Share the topics or type of support needed. Avoid unnecessary personal details."/></div>
 <label className="flex items-start gap-3 rounded-xl border border-navy/10 bg-cloud p-4 text-sm leading-6 text-ink/75"><input type="checkbox" className="mt-1 accent-teal size-4" checked={consent} onChange={e=>setConsent(e.target.checked)} required/><span>I am a parent or authorized guardian inquiring for a child, or an adult learner inquiring for myself. I understand these details are shared only when I choose to copy or send them. I have read the <Link className="font-semibold text-teal underline" href="/privacy">privacy information</Link>. *</span></label>
 {site.contactEmail && <Button type="submit" size="lg" className="w-full sm:w-auto"><Mail size={17}/> Open Email Draft</Button>}
 <Button type="button" size="lg" variant={site.contactEmail?'outline':'default'} className={`w-full ${site.contactEmail?'sm:ml-3 sm:w-auto':''}`} onClick={copy}><ClipboardCopy size={17}/> Copy Inquiry Details</Button>
 <div className="rounded-xl bg-cloud p-4 text-sm leading-6 text-ink/70"><AlertCircle className="inline size-4 mr-1 align-[-2px] text-teal"/> <strong>No automatic submission:</strong> Copying does not send information. {site.contactEmail?'Email opens your own email app and requires you to press Send.':'The direct email option is disabled until the official contact address is configured.'}</div>
 {message&&<div role="status" aria-live="polite" className="flex items-start gap-2 rounded-xl bg-teal/10 p-4 text-sm leading-6 text-navy"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-teal"/>{message}</div>}
 </form></div>;
}
