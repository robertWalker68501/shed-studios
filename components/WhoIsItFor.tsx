import { AudioLines, LineChart, SlidersHorizontal } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WhoIsItFor = () => {
  return (
    <section
      id='who-its-for'
      className='border-border bg-muted/40 border-y py-16 md:py-20'
    >
      <div className='container mx-auto px-4'>
        <div className='flex flex-col gap-3 md:flex-row md:items-end md:justify-between'>
          <div>
            <h2 className='font-heading text-2xl md:text-3xl'>
              Built for the studios actually doing the work
            </h2>
            <p className='text-muted-foreground mt-2 max-w-xl text-sm md:text-base'>
              Shed Studios is flexible enough for a single-room mix room and
              powerful enough for a multi-room facility. Each plan is tuned to
              how real studios run their days.
            </p>
          </div>
          <p className='text-muted-foreground text-xs md:text-sm'>
            Choose the slice that sounds most like you—then grow without
            switching tools.
          </p>
        </div>

        <div className='mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {/* Indie / project studios */}
          <Card className='border-border/70 bg-card/80'>
            <CardHeader className='pb-3'>
              <CardTitle className='flex items-center gap-2 text-base'>
                <span className='bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full'>
                  <AudioLines className='h-4 w-4' />
                </span>
                Indie & project studios
              </CardTitle>
            </CardHeader>
            <CardContent className='text-muted-foreground space-y-3 text-sm'>
              <p>
                You’re running a serious room, but you’re still juggling Google
                Sheets, DMs and shared folders to keep projects on track.
              </p>
              <ul className='space-y-1 text-xs leading-relaxed'>
                <li>• Organize albums, EPs and singles as real projects.</li>
                <li>• Keep sessions, mixes and invoices in one place.</li>
                <li>
                  • Give clients a professional portal without hiring a dev.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Freelance engineers */}
          <Card className='border-border/70 bg-card/80'>
            <CardHeader className='pb-3'>
              <CardTitle className='flex items-center gap-2 text-base'>
                <span className='bg-accent/10 text-accent-foreground flex h-8 w-8 items-center justify-center rounded-full'>
                  <SlidersHorizontal className='h-4 w-4' />
                </span>
                Freelance engineers & mixers
              </CardTitle>
            </CardHeader>
            <CardContent className='text-muted-foreground space-y-3 text-sm'>
              <p>
                You bounce between studios and rigs, but your clients still
                expect a consistent, polished experience every time.
              </p>
              <ul className='space-y-1 text-xs leading-relaxed'>
                <li>• DAW-aware mix review for every project.</li>
                <li>
                  • Clear version history and approvals instead of email chains.
                </li>
                <li>• Contracts, splits and invoices that match your brand.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Podcast & content rooms */}
          <Card className='border-border/70 bg-card/80'>
            <CardHeader className='pb-3'>
              <CardTitle className='flex items-center gap-2 text-base'>
                <span className='bg-success/10 text-success flex h-8 w-8 items-center justify-center rounded-full'>
                  <LineChart className='h-4 w-4' />
                </span>
                Podcast & content studios
              </CardTitle>
            </CardHeader>
            <CardContent className='text-muted-foreground space-y-3 text-sm'>
              <p>
                You manage seasons, recurring clients and tight release
                schedules—often with more projects than people.
              </p>
              <ul className='space-y-1 text-xs leading-relaxed'>
                <li>• Track seasons as long-running projects.</li>
                <li>
                  • Keep hosts and producers aligned on status and deadlines.
                </li>
                <li>
                  • Centralize files, notes and approvals for every episode.
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Multi-room / facilities */}
          <Card className='border-border/70 bg-card/80'>
            <CardHeader className='pb-3'>
              <CardTitle className='flex items-center gap-2 text-base'>
                <span className='bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full'>
                  {/* reuse Waveform or swap to another icon if you prefer */}
                  <AudioLines className='h-4 w-4' />
                </span>
                Multi-room facilities
              </CardTitle>
            </CardHeader>
            <CardContent className='text-muted-foreground space-y-3 text-sm'>
              <p>
                You’re balancing rooms, engineers and a calendar that never
                really sleeps, while trying to keep margins healthy.
              </p>
              <ul className='space-y-1 text-xs leading-relaxed'>
                <li>• See utilization and revenue by room and engineer.</li>
                <li>• Standardize client experience across every space.</li>
                <li>
                  • Use analytics to price, staff and schedule with confidence.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
