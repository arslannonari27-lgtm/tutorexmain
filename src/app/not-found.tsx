import Link from 'next/link';
import {Button} from '@/components/ui/button';
export default function NotFound(){return <div className="container py-28 text-center"><p className="eyebrow mb-5">404 / Page not found</p><h1 className="heading text-4xl">We couldn’t find that page.</h1><p className="mt-4 text-ink/70">The address may have changed. Start from our homepage.</p><Button asChild className="mt-8"><Link href="/">Back to Home</Link></Button></div>}
