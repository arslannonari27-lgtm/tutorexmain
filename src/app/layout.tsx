import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { site } from '@/lib/site';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';
const inter=Inter({subsets:['latin'],variable:'--font-inter',display:'swap'});
const manrope=Manrope({subsets:['latin'],variable:'--font-manrope',display:'swap'});
export const metadata:Metadata={
 metadataBase:new URL(site.domain),
 title:{default:'TutorEx Academy | Learn Beyond Borders',template:'%s | TutorEx Academy'},
 description:site.description,
 keywords:['online tutor matching','online tutoring Pakistan','international tutors','find a tutor','O Level online tutor','A Level online tutor','IELTS preparation tutor','TutorEx Academy'],
 alternates:{canonical:'/'},
 openGraph:{type:'website',locale:'en_US',siteName:site.name,title:'TutorEx Academy | Learn Beyond Borders',description:site.description,images:[{url:'/images/og-placeholder.png',width:1200,height:630,alt:'TutorEx Academy — Learn Beyond Borders'}]},
 twitter:{card:'summary_large_image',title:'TutorEx Academy',description:site.description,images:['/images/og-placeholder.png']},
 robots:{index:true,follow:true}
};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body className={`${inter.variable} ${manrope.variable} font-sans`}><a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-4 focus:py-2">Skip to content</a><Header/><main id="main-content">{children}</main><Footer/></body></html>;
}
