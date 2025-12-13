import { AudioLines, LineChart, SlidersHorizontal } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HeroCard = () => {
  return (
    <div className='relative'>
      <div className='bg-accent/20 pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full blur-2xl' />
      <Card className='border-border/70 bg-card/80 shadow-primary/10 relative shadow-xl backdrop-blur'>
        <CardHeader className='space-y-1 pb-3'>
          <div className='flex items-center justify-between'>
            <span className='text-muted-foreground inline-flex items-center gap-2 text-xs'>
              <Badge
                variant='outline'
                className='border-primary/40 bg-primary/5 text-primary text-[11px] tracking-wide uppercase'
              >
                Live session
              </Badge>
              Tonight · Room A
            </span>
            <AudioLines className='text-primary h-5 w-5' />
          </div>
          <CardTitle className='font-heading mt-3 text-lg'>
            Project · Midnight Echoes
          </CardTitle>
          <p className='text-muted-foreground text-xs'>
            6 songs in mix · 2 awaiting approval · 1 invoice due
          </p>
        </CardHeader>
        <CardContent className='space-y-5'>
          {/* Project stages */}
          <div className='space-y-2'>
            <div className='text-muted-foreground flex items-center justify-between text-[11px] tracking-wide uppercase'>
              <span>Pipeline</span>
              <span>Mixing · 68% complete</span>
            </div>
            <div className='bg-muted h-1.5 rounded-full'>
              <div className='from-primary to-accent h-full w-2/3 rounded-full bg-linear-to-r' />
            </div>
            <div className='flex flex-wrap gap-2 text-[11px]'>
              {[
                'Writing',
                'Tracking',
                'Editing',
                'Mixing',
                'Mastering',
                'Delivery',
              ].map((stage, idx) => (
                <span
                  key={stage}
                  className={
                    'rounded-full px-2 py-0.5 ' +
                    (idx <= 3
                      ? 'bg-primary/10 text-primary'
                      : 'bg-muted text-muted-foreground')
                  }
                >
                  {stage}
                </span>
              ))}
            </div>
          </div>

          {/* Mix review snippet */}
          <div className='border-border bg-muted/40 rounded-xl border p-3'>
            <div className='text-muted-foreground flex items-center justify-between text-xs'>
              <span className='inline-flex items-center gap-1'>
                <SlidersHorizontal className='text-primary h-3.5 w-3.5' />
                Mix review · “City Lights – v3”
              </span>
              <span className='bg-success/15 text-success rounded-full px-2 py-0.5 text-[11px]'>
                Changes requested
              </span>
            </div>
            <div className='bg-background/70 mt-2 h-1.5 w-full rounded-full'>
              <div className='bg-primary/70 h-full w-1/3 rounded-full' />
            </div>
            <p className='text-muted-foreground mt-3 text-xs'>
              “Vocals feel a little dark in the first chorus; can we open them
              up around 3–5k? Otherwise this mix is very close.”
            </p>
          </div>

          {/* Analytics mini */}
          <div className='border-border bg-background/60 flex items-center justify-between rounded-xl border px-3 py-2'>
            <div>
              <p className='text-muted-foreground text-[11px] tracking-wide uppercase'>
                This month’s revenue
              </p>
              <p className='font-heading text-lg font-semibold'>$12,430</p>
            </div>
            <div className='text-success flex items-center gap-2 text-xs'>
              <LineChart className='h-4 w-4' />
              <span>+18% vs last month</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HeroCard;
