import * as React from 'react';
import { cn } from '@/lib/utils';
export const Input=React.forwardRef<HTMLInputElement,React.InputHTMLAttributes<HTMLInputElement>>(({className,...props},ref)=><input ref={ref} className={cn('w-full h-11 rounded-xl border border-navy/20 bg-white px-3.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-4 focus:ring-teal/15 focus:border-teal',className)} {...props}/>);
Input.displayName='Input';
