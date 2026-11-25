import * as React from 'react';
import { cn } from '@/lib/utils';
export const Textarea=React.forwardRef<HTMLTextAreaElement,React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({className,...props},ref)=><textarea ref={ref} className={cn('w-full min-h-[110px] rounded-xl border border-navy/20 bg-white px-3.5 py-3 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-4 focus:ring-teal/15 focus:border-teal',className)} {...props}/>);
Textarea.displayName='Textarea';
