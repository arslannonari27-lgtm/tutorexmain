import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Brand } from '@/components/brand';
import { MobileMenu } from '@/components/mobile-menu';
import { navigation } from '@/lib/site';
import { Button } from '@/components/ui/button';
export function Header(){return <header className="relative z-40 border-b border-navy/10 bg-white/95 backdrop-blur-md"><div className="container flex min-h-[82px] items-center justify-between gap-6"><Brand/><nav className="hidden items-center gap-4 xl:flex" aria-label="Primary navigation">{navigation.map(n=><Link key={n.href} href={n.href} className="text-[13px] font-semibold text-navy/75 transition-colors hover:text-teal">{n.label}</Link>)}</nav><div className="hidden 2xl:block"><Button asChild size="sm"><Link href="/find-a-tutor">Find a Tutor <ArrowUpRight size={15}/></Link></Button></div><MobileMenu/></div></header>}
