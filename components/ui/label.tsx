'use client'; // Add this directive

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { useFormField } from './form'; // Ensure this import path is correct if form is also in ui

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => {
  // Check if useFormField hook is available before calling it
  // This might not be strictly necessary if Label is always used within FormField,
  // but can prevent errors if used standalone incorrectly.
  // However, the primary fix is the 'use client' directive.
  const { error, formItemId } = useFormField ? useFormField() : { error: null, formItemId: undefined };

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), error && 'text-destructive', className)}
      htmlFor={formItemId} // Use formItemId obtained from the hook
      {...props}
    />
  );
});
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
