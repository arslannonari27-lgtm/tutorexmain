import type {MetadataRoute} from 'next';
import {site} from '@/lib/site';
import {programs} from '@/lib/programs';
export default function sitemap():MetadataRoute.Sitemap {const routes=['','/find-a-tutor','/subjects','/programs',...programs.map(p=>`/programs/${p.slug}`),'/how-it-works','/about','/become-a-tutor','/contact','/faq'];return routes.map(x=>({url:`${site.domain}${x}`,lastModified:new Date(),changeFrequency:'monthly',priority:x===''?1:0.7}));}
