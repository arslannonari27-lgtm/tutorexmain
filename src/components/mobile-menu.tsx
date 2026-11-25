'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/lib/site';
export function MobileMenu() {
 const [open,setOpen]=useState(false);
 return <div className="xl:hidden">
   <button type="button" className="rounded-xl border border-navy/10 p-2.5 text-navy" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?<X size={21}/>:<Menu size={21}/>}</button>
   {open && <div id="mobile-navigation" className="absolute inset-x-0 top-full z-50 border-y border-navy/10 bg-white p-5 shadow-soft"><nav aria-label="Mobile navigation" className="flex flex-col gap-1">{navigation.map(n=><Link key={n.href} href={n.href} onClick={()=>setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-navy hover:bg-cloud">{n.label}</Link>)}<Link href="/find-a-tutor" className="mt-2 rounded-xl bg-teal px-4 py-3 text-center text-sm font-bold text-white" onClick={()=>setOpen(false)}>Find a Tutor</Link></nav></div>}
 </div>;
}
