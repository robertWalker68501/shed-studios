// app/page.tsx
import {
  ArrowRight,
  AudioLines,
  SlidersHorizontal,
  LineChart,
  Sparkles,
  Menu,
  LogIn,
} from 'lucide-react';
import Image from 'next/image';

import { ThemeSwitcher } from '@/components/shared/navigation/theme-switcher';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Home() {
  return (
    <main className='bg-background text-foreground min-h-screen'>
      {/* Navbar */}
      <header className='border-border/60 bg-background/80 sticky top-0 z-40 border-b backdrop-blur'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4'>
          {/* Brand */}
          <div className='flex items-center gap-2'>
            <div className='flex items-center justify-center shadow-sm'>
              <Image
                src='/assets/images/logo-round.png'
                alt='Shed Studios Logo'
                width={32}
                height={32}
                className='h-8 w-8'
              />
            </div>
            <div className='flex flex-col leading-tight'>
              <span className='font-heading text-base font-semibold'>
                Shed Studios
              </span>
              <span className='text-muted-foreground text-[11px]'>
                Studio OS
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className='hidden items-center gap-8 text-sm md:flex'>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className='text-muted-foreground hover:text-foreground text-sm transition-colors'
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className='hidden items-center gap-3 md:flex'>
            {/* Theme selector */}
            <ThemeSwitcher />

            <Button
              variant='ghost'
              size='sm'
              className='gap-1 text-sm'
            >
              <LogIn className='h-4 w-4' />
              Log in
            </Button>
            <Button
              size='sm'
              className='gap-1 text-sm'
            >
              Start free trial
              <ArrowRight className='h-3.5 w-3.5' />
            </Button>
          </div>

          {/* Mobile menu */}
          <div className='flex items-center md:hidden'>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant='outline'
                  size='icon'
                  className='border-border/80 h-9 w-9'
                  aria-label='Open navigation'
                >
                  <Menu className='h-5 w-5' />
                </Button>
              </SheetTrigger>
              <SheetContent
                side='right'
                className='flex flex-col'
              >
                <SheetHeader className='items-start'>
                  <SheetTitle className='flex items-center gap-2'>
                    <div className='from-primary to-accent text-primary-foreground flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br'>
                      <AudioLines className='h-4 w-4' />
                    </div>
                    <span className='font-heading text-base'>Shed Studios</span>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile nav links */}
                <nav className='mt-6 flex flex-1 flex-col gap-3 text-sm'>
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className='text-muted-foreground hover:bg-muted hover:text-foreground rounded-md px-2 py-2 text-base'
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                {/* Mobile theme + actions */}
                <div className='border-border/70 mt-4 flex flex-col gap-3 border-t pt-4'>
                  <ThemeSwitcher /> {/* ⬅️ mobile selector */}
                  <Button
                    variant='outline'
                    className='w-full gap-2'
                  >
                    <LogIn className='h-4 w-4' />
                    Log in
                  </Button>
                  <Button className='w-full gap-2'>
                    Start free trial
                    <ArrowRight className='h-4 w-4' />
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        id='product'
        className='relative overflow-hidden'
      >
        {/* subtle gradient glow */}
        <div className='pointer-events-none absolute inset-x-0 -top-40 flex justify-center'>
          <div className='h-72 w-[600px] rounded-full bg-[radial-gradient(circle_at_top,_oklch(0.75_0.15_250)_0,_transparent_60%)] opacity-60 dark:opacity-40' />
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
                      “Vocals feel a little dark in the first chorus; can we
                      open them up around 3–5k? Otherwise this mix is very
                      close.”
                    </p>
                  </div>

                  {/* Analytics mini */}
                  <div className='border-border bg-background/60 flex items-center justify-between rounded-xl border px-3 py-2'>
                    <div>
                      <p className='text-muted-foreground text-[11px] tracking-wide uppercase'>
                        This month’s revenue
                      </p>
                      <p className='font-heading text-lg font-semibold'>
                        $12,430
                      </p>
                    </div>
                    <div className='text-success flex items-center gap-2 text-xs'>
                      <LineChart className='h-4 w-4' />
                      <span>+18% vs last month</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
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
                  You’re running a serious room, but you’re still juggling
                  Google Sheets, DMs and shared folders to keep projects on
                  track.
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
                    • Clear version history and approvals instead of email
                    chains.
                  </li>
                  <li>
                    • Contracts, splits and invoices that match your brand.
                  </li>
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
                    • Use analytics to price, staff and schedule with
                    confidence.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
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
              From first inquiry to final master, every step lives in one
              system, tying together bookings, files, approvals, contracts, and
              payments.
            </p>
          </div>
          <p className='text-muted-foreground text-xs md:text-sm'>
            Designed to mirror real studio workflows: projects → sessions →
            mixes → approvals → delivery → reporting.
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
                <p className='text-muted-foreground mt-2 text-sm'>
                  {item.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Feature strip: core pillars */}
      <section
        id='features'
        className='border-border bg-background/80 border-t py-16 md:py-20'
      >
        <div className='container mx-auto px-4'>
          <div className='max-w-3xl'>
            <h2 className='font-heading text-2xl md:text-3xl'>
              Project-first, DAW-aware, and obsessed with studio economics.
            </h2>
            <p className='text-muted-foreground mt-3 text-sm md:text-base'>
              Shed Studios isn’t just another calendar. It’s the connective
              layer between your creative workflow and the business that powers
              it.
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
                  projects with songs, stages, tasks and billing all in one
                  place.
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
                  Timestamped comments, version history, A/B comparison and
                  clear approvals replace messy email threads and file links.
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

      {/* Pricing teaser */}
      <section
        id='pricing'
        className='border-border bg-muted/40 border-t py-16 md:py-20'
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
                  <span className='font-heading text-3xl font-semibold'>
                    $49
                  </span>
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

      {/* Final CTA */}
      <section className='border-border bg-background border-t py-14 md:py-16'>
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
    </main>
  );
}
