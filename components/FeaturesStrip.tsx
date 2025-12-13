import { AudioLines, LineChart, SlidersHorizontal } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesStrip = () => {
  return (
    <section
      id='features'
      className='border-border bg-muted/40 border-t py-16 md:py-20'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl'>
          <h2 className='font-heading text-2xl md:text-3xl'>
            Project-first, DAW-aware, and obsessed with studio economics.
          </h2>
          <p className='text-muted-foreground mt-3 text-sm md:text-base'>
            Shed Studios isn’t just another calendar. It’s the connective layer
            between your creative workflow and the business that powers it.
          </p>
        </div>

        <div className='mt-10 grid gap-6 md:grid-cols-3'>
          <Card className='border-border/70 bg-card/80'>
            <CardHeader className='pb-3'>
              <CardTitle className='flex items-center gap-2 text-base'>
                <span className='bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full'>
                  <AudioLines className='h-4 w-4' />
                </span>
                Project-first workflow
              </CardTitle>
            </CardHeader>
            <CardContent className='text-muted-foreground space-y-2 text-sm'>
              <p>
                Albums, EPs, singles and podcast seasons live as structured
                projects with songs, stages, tasks and billing all in one place.
              </p>
              <p>
                See at a glance what’s in tracking, what’s in mix, and which
                projects are at risk.
              </p>
            </CardContent>
          </Card>

          <Card className='border-border/70 bg-card/80'>
            <CardHeader className='pb-3'>
              <CardTitle className='flex items-center gap-2 text-base'>
                <span className='bg-accent/10 text-accent-foreground flex h-8 w-8 items-center justify-center rounded-full'>
                  <SlidersHorizontal className='h-4 w-4' />
                </span>
                Mix collaboration that feels pro
              </CardTitle>
            </CardHeader>
            <CardContent className='text-muted-foreground space-y-2 text-sm'>
              <p>
                Timestamped comments, version history, A/B comparison and clear
                approvals replace messy email threads and file links.
              </p>
              <p>
                Optional DAW plugins keep notes and markers in sync with your
                sessions.
              </p>
            </CardContent>
          </Card>

          <Card className='border-border/70 bg-card/80'>
            <CardHeader className='pb-3'>
              <CardTitle className='flex items-center gap-2 text-base'>
                <span className='bg-success/10 text-success flex h-8 w-8 items-center justify-center rounded-full'>
                  <LineChart className='h-4 w-4' />
                </span>
                A real business brain
              </CardTitle>
            </CardHeader>
            <CardContent className='text-muted-foreground space-y-2 text-sm'>
              <p>
                Track revenue per room, engineer and service type. See which
                clients bring the most lifetime value and which time slots sit
                empty.
              </p>
              <p>
                Let AI highlight trends you might otherwise miss—before the
                month is over.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesStrip;
