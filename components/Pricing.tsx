import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Pricing = () => {
  return (
    <section
      id='pricing'
      className='border-border border-t py-16 md:py-20'
    >
      <div className='container mx-auto px-4'>
        <div className='grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center'>
          <div>
            <h2 className='font-heading text-2xl md:text-3xl'>
              Pricing that scales with your room list, not your stress level.
            </h2>
            <p className='text-muted-foreground mt-3 max-w-xl text-sm md:text-base'>
              Start as a solo engineer or home studio, grow into a multi-room
              facility. Simple, transparent plans with storage and DAW add-ons
              when you need them.
            </p>
            <ul className='text-muted-foreground mt-5 space-y-2 text-sm'>
              <li>• Home: perfect for freelancers and single-room setups.</li>
              <li>
                • Studio: 1–3 rooms with full projects, mix reviews and
                contracts.
              </li>
              <li>
                • Pro: 4–8 rooms, advanced analytics and DAW integrations.
              </li>
              <li>• Enterprise: multi-location and custom workflows.</li>
            </ul>
          </div>

          <Card className='border-primary/40 bg-background/90 shadow-primary/10 shadow-lg'>
            <CardContent className='space-y-4 pt-5'>
              <div className='flex items-baseline gap-2'>
                <span className='font-heading text-3xl font-semibold'>$49</span>
                <span className='text-muted-foreground text-sm'>
                  /month · Studio plan
                </span>
              </div>
              <p className='text-muted-foreground text-sm'>
                Everything you need for a 1–3 room studio: projects, mix
                reviews, client portal, contracts and core analytics.
              </p>
              <ul className='text-muted-foreground space-y-1 text-sm'>
                <li>✔ Up to 3 rooms</li>
                <li>✔ 20 active projects</li>
                <li>✔ DAW-ready mix review workflow</li>
                <li>✔ Branded client portal</li>
                <li>✔ 250 GB of storage</li>
              </ul>
              <Button className='mt-2 w-full gap-2'>
                Compare all plans
                <ArrowRight className='h-4 w-4' />
              </Button>
              <p className='text-muted-foreground text-[11px]'>
                Upgrade or downgrade anytime. No long-term contracts.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
