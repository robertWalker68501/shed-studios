import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

const CtaFinal = () => {
  return (
    <section className='border-border bg-muted/40 border-t py-14 md:py-16'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='font-heading text-2xl md:text-3xl'>
          Ready to give your studio a proper operating system?
        </h2>
        <p className='text-muted-foreground mx-auto mt-3 max-w-xl text-sm md:text-base'>
          Replace duct-taped spreadsheets, booking plugins and file links with
          one DAW-aware platform built specifically for recording studios.
        </p>
        <div className='mt-6 flex justify-center gap-3'>
          <Button
            size='lg'
            className='gap-2'
          >
            Start free trial
            <ArrowRight className='h-4 w-4' />
          </Button>
          <Button
            size='lg'
            variant='outline'
          >
            Talk to the team
          </Button>
        </div>
        <p className='text-muted-foreground mt-3 text-xs'>
          Onboard in under an hour · Bring your existing projects with simple
          imports.
        </p>
      </div>
    </section>
  );
};

export default CtaFinal;
