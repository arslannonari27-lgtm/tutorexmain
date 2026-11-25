import { Atom, BookOpen, Calculator, Code2, FlaskConical, Globe2, Languages, Leaf, type LucideIcon } from 'lucide-react';
const icons: Record<string,LucideIcon> = {
 calculator:Calculator, book:BookOpen, flask:FlaskConical, atom:Atom,
 sprout:Leaf, computer:Code2, languages:Languages, globe:Globe2,
};
export function SubjectIcon({name,className}:{name:string,className?:string}) { const Icon=icons[name]||BookOpen; return <Icon className={className} strokeWidth={1.75} aria-hidden="true"/>; }
