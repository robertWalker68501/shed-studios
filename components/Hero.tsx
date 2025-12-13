import { ArrowRight, Sparkles } from 'lucide-react';

import HeroCard from '@/components/HeroCard';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section
      id='product'
      className='relative overflow-hidden'
    >
      {/* subtle gradient glow */}
      <div className='pointer-events-none absolute inset-x-0 -top-40 flex justify-center'>
        <div className='h-72 w-150 rounded-full bg-[radial-gradient(circle_at_top,oklch(0.75_0.15_250)_0,transparent_60%)] opacity-60 dark:opacity-40' />
      </div>

      <div className='container mx-auto px-4 pt-16 pb-16 md:pt-20 md:pb-24 lg:pt-24'>
        <div className='grid items-center gap-12 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]'>
          {/* Left: copy */}
          <div className='space-y-8'>
            <div className='border-border bg-muted/70 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur'>
              <span className='bg-primary/10 text-primary inline-flex h-5 w-5 items-center justify-center rounded-full'>
                <Sparkles className='h-3 w-3' />
              </span>
              New · Project-first studio OS with DAW-aware workflows
            </div>

            <div className='space-y-4'>
              <h1 className='font-heading text-4xl leading-tight tracking-tight md:text-5xl lg:text-6xl'>
                The operating system
                <br className='hidden md:block' />
                <span className='from-primary to-accent bg-linear-to-r bg-clip-text text-transparent'>
                  for modern recording studios
                </span>
              </h1>
              <p className='text-muted-foreground max-w-xl text-sm md:text-base'>
                Shed Studios unifies projects, sessions, DAW-connected mix
                reviews, contracts, and analytics into one platform—built for
                how studios actually work.
              </p>
            </div>

            <div className='flex flex-wrap items-center gap-4'>
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
                className='border-border bg-background/70 backdrop-blur'
              >
                Book a demo
              </Button>
              <p className='text-muted-foreground text-xs'>
                No credit card required · Designed for studios of any size
              </p>
            </div>

            {/* Quick stats */}
            <div className='text-muted-foreground grid gap-4 text-sm sm:grid-cols-3'>
              <div>
                <p className='font-heading text-foreground text-xl font-semibold md:text-2xl'>
                  40%
                </p>
                <p className='mt-1'>
                  Average reduction in admin time per project.
                </p>
              </div>
              <div>
                <p className='font-heading text-foreground text-xl font-semibold md:text-2xl'>
                  25%
                </p>
                <p className='mt-1'>
                  Increase in repeat clients with better collaboration.
                </p>
              </div>
              <div>
                <p className='font-heading text-foreground text-xl font-semibold md:text-2xl'>
                  1
                </p>
                <p className='mt-1'>
                  Place for projects, mixes, contracts & billing.
                </p>
              </div>
            </div>
          </div>

          {/* Right: hero card */}
          <HeroCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
