import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva('inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal/25 disabled:pointer-events-none disabled:opacity-50', {
 variants: {
  variant: {
   default: 'bg-teal text-white hover:bg-[#118a98] shadow-md shadow-teal/15',
   navy: 'bg-navy text-white hover:bg-deep',
   outline: 'border border-navy/15 bg-white text-navy hover:border-teal hover:text-teal',
   white: 'bg-white text-navy hover:bg-cloud',
   ghost: 'text-navy hover:bg-navy/5'
  },
  size: { default: 'h-11 px-5 py-2.5', sm: 'h-9 rounded-lg px-3', lg: 'h-12 px-6 text-[15px]', icon: 'h-10 w-10' }
 }, defaultVariants: { variant: 'default', size: 'default' }
});
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean; }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({className, variant, size, asChild=false,...props}, ref)=>{
 const Comp = asChild ? Slot : 'button';
 return <Comp className={cn(buttonVariants({variant,size,className}))} ref={ref} {...props}/>;
});
Button.displayName = 'Button';
