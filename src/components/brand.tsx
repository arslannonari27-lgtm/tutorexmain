import Link from 'next/link';
import Image from 'next/image';
export function Brand({inverse=false}:{inverse?:boolean}) {
 return <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="TutorEx Academy — Home">
   <span className="flex size-11 items-center justify-center rounded-xl bg-navy overflow-hidden group-hover:shadow-md transition-shadow"><Image src="/images/logo-placeholder.svg" alt="" width={44} height={44}/></span>
   <span className="leading-tight"><span className={`block font-heading text-[19px] font-extrabold tracking-[-.035em] ${inverse?'text-white':'text-navy'}`}>Tutor<span className="text-teal">Ex</span> <span className="font-semibold">Academy</span></span><span className={`block text-[10px] tracking-[.13em] uppercase ${inverse?'text-white/65':'text-navy/50'}`}>Learn Beyond Borders</span></span>
 </Link>;
}
