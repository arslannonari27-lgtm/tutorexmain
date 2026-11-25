import {SubjectIcon} from '@/components/icons';
import {subjects} from '@/lib/site';
import {Card} from '@/components/ui/card';
export function SubjectGrid({limit}:{limit?:number}){return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{subjects.slice(0,limit).map(s=><Card key={s.name} className="p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-soft"><div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-teal/10 text-teal"><SubjectIcon name={s.icon} className="size-6"/></div><h3 className="font-heading text-lg font-bold text-navy">{s.name}</h3><p className="mt-2 text-sm leading-6 text-ink/65">{s.desc}</p></Card>)}</div>}
