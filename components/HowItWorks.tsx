import { Card, CardContent } from '@/components/ui/card';

const HowItWorks = () => {
  return (
    <section
      id='how-it-works'
      className='container mx-auto px-4 py-16 md:py-20'
    >
      <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
        <div>
          <h2 className='font-heading text-2xl md:text-3xl'>
            How Shed Studios works
          </h2>
          <p className='text-muted-foreground mt-2 max-w-xl text-sm md:text-base'>
            From first inquiry to final master, every step lives in one system,
            tying together bookings, files, approvals, contracts, and payments.
          </p>
        </div>
        <p className='text-muted-foreground text-xs md:text-sm'>
          Designed to mirror real studio workflows: projects → sessions → mixes
          → approvals → delivery → reporting.
        </p>
      </div>

      <div className='mt-10 grid gap-6 md:grid-cols-4'>
        {[
          {
            step: '01',
            title: 'Create a project',
            body: 'Start with an album, single, podcast or film. Define stages, scope and budget in a single view.',
          },
          {
            step: '02',
            title: 'Book rooms & engineers',
            body: 'Schedule sessions, avoid double-bookings, and sync calendars for your team and clients.',
          },
          {
            step: '03',
            title: 'Review & approve mixes',
            body: 'Upload or send directly from your DAW, collect timestamped feedback, and approve final masters.',
          },
          {
            step: '04',
            title: 'Lock in the business',
            body: 'Send contracts, track splits and metadata, issue invoices, and measure project profitability.',
          },
        ].map((item) => (
          <Card
            key={item.step}
            className='border-border/70 bg-card/80'
          >
            <CardContent className='pt-5'>
              <div className='text-muted-foreground mb-4 inline-flex items-center gap-2 text-xs'>
                <span className='text-primary font-mono text-[11px]'>
                  {item.step}
                </span>
                <span className='bg-border h-px w-6' />
                <span>Step</span>
              </div>
              <h3 className='font-heading text-lg'>{item.title}</h3>
              <p className='text-muted-foreground mt-2 text-sm'>{item.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
