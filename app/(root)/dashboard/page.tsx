import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import prisma, { activeUserWhere } from '@/lib/prisma';

export default async function DashboardPage() {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect('/sign-in');

  const appUser = await prisma.user.findFirst({
    where: { clerkId: clerkUser.id, ...activeUserWhere },
    select: { id: true, role: true, name: true },
  });

  if (!appUser) redirect('/dashboard'); // layout self-heal should handle this

  return (
    <main className='space-y-6'>
      <header className='flex flex-col gap-2 md:flex-row md:items-end md:justify-between'>
        <div>
          <h1 className='font-heading text-2xl md:text-3xl'>Overview</h1>
          <p className='text-muted-foreground text-sm'>
            Welcome back{appUser.name ? `, ${appUser.name}` : ''}.
          </p>
        </div>
        <Badge variant='outline'>Role: {appUser.role}</Badge>
      </header>

      {appUser.role === 'PLATFORM_ADMIN' ? (
        <PlatformAdminOverview />
      ) : (
        <StudioUserOverview userId={appUser.id} />
      )}
    </main>
  );
}

async function PlatformAdminOverview() {
  const [studios, activeUsers, projects, sessions, mixes] = await Promise.all([
    prisma.studio.count(),
    prisma.user.count({ where: { deletedAt: null } }),
    prisma.project.count(),
    prisma.session.count(),
    prisma.mixVersion.count(),
  ]);

  return (
    <section className='space-y-6'>
      <div className='grid gap-4 md:grid-cols-5'>
        <Stat
          title='Studios'
          value={studios}
          hint='Total studios'
        />
        <Stat
          title='Active users'
          value={activeUsers}
          hint='Not deleted'
        />
        <Stat
          title='Projects'
          value={projects}
          hint='All time'
        />
        <Stat
          title='Sessions'
          value={sessions}
          hint='All time'
        />
        <Stat
          title='Mix versions'
          value={mixes}
          hint='All time'
        />
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <Card className='border-border/70 bg-card/80'>
          <CardHeader>
            <CardTitle className='font-heading text-lg'>
              Platform notes
            </CardTitle>
          </CardHeader>
          <CardContent className='text-muted-foreground space-y-2 text-sm'>
            <p>
              Use this area for platform health, onboarding trends, billing
              alerts, and webhook status.
            </p>
            <p>Next: add charts for MRR, churn, storage usage, and DAU/WAU.</p>
          </CardContent>
        </Card>

        <Card className='border-border/70 bg-card/80'>
          <CardHeader>
            <CardTitle className='font-heading text-lg'>
              Recent studios
            </CardTitle>
          </CardHeader>
          <CardContent className='text-muted-foreground text-sm'>
            <p>
              Hook this to a real list later (studio name, owner, created date).
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

async function StudioUserOverview({ userId }: { userId: string }) {
  // Find studios where the user is an owner OR member
  const studios = await prisma.studio.findMany({
    where: {
      OR: [{ ownerId: userId }, { memberships: { some: { userId } } }],
    },
    select: { id: true, name: true, slug: true },
    orderBy: { createdAt: 'desc' },
    take: 8,
  });

  const studioIds = studios.map((s) => s.id);

  // Pull actual data scoped to those studios
  const now = new Date();
  const in7days = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

  const [projectsActive, sessionsUpcoming, mixesInReview, tasksDueSoon] =
    studioIds.length === 0
      ? [0, 0, 0, 0]
      : await Promise.all([
          prisma.project.count({
            where: {
              studioId: { in: studioIds },
              stage: { notIn: ['ARCHIVED', 'DELIVERED'] },
            },
          }),
          prisma.session.count({
            where: {
              project: { studioId: { in: studioIds } },
              startTime: { gte: now, lte: in7days },
              status: { in: ['SCHEDULED', 'IN_PROGRESS'] },
            },
          }),
          prisma.mixVersion.count({
            where: {
              song: { project: { studioId: { in: studioIds } } },
              status: { in: ['IN_REVIEW', 'CHANGES_REQUESTED'] },
            },
          }),
          prisma.task.count({
            where: {
              project: { studioId: { in: studioIds } },
              status: { in: ['TODO', 'IN_PROGRESS'] },
              dueAt: { gte: now, lte: in7days },
            },
          }),
        ]);

  return (
    <section className='space-y-6'>
      <div className='grid gap-4 md:grid-cols-4'>
        <Stat
          title='Studios'
          value={studios.length}
          hint='You have access to'
        />
        <Stat
          title='Active projects'
          value={projectsActive}
          hint='Not delivered/archived'
        />
        <Stat
          title='Upcoming sessions'
          value={sessionsUpcoming}
          hint='Next 7 days'
        />
        <Stat
          title='Mixes in review'
          value={mixesInReview}
          hint='Needs attention'
        />
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <Card className='border-border/70 bg-card/80'>
          <CardHeader>
            <CardTitle className='font-heading text-lg'>Your studios</CardTitle>
          </CardHeader>
          <CardContent className='space-y-2'>
            {studios.length === 0 ? (
              <p className='text-muted-foreground text-sm'>
                No studios found yet. Once you create a studio or get invited,
                it will show up here.
              </p>
            ) : (
              <ul className='space-y-2'>
                {studios.map((s) => (
                  <li
                    key={s.id}
                    className='border-border bg-background/60 flex items-center justify-between rounded-lg border px-3 py-2'
                  >
                    <div>
                      <div className='text-sm font-medium'>{s.name}</div>
                      <div className='text-muted-foreground text-xs'>
                        /{s.slug}
                      </div>
                    </div>
                    <Badge variant='outline'>Open</Badge>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card className='border-border/70 bg-card/80'>
          <CardHeader>
            <CardTitle className='font-heading text-lg'>Due soon</CardTitle>
          </CardHeader>
          <CardContent className='text-muted-foreground space-y-2 text-sm'>
            <p>
              Tasks due in the next 7 days:{' '}
              <span className='text-foreground font-medium'>
                {tasksDueSoon}
              </span>
            </p>
            <p>Next: show the actual list (task title, due date, project).</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Stat({
  title,
  value,
  hint,
}: {
  title: string;
  value: number;
  hint: string;
}) {
  return (
    <Card className='border-border/70 bg-card/80'>
      <CardHeader className='pb-2'>
        <CardTitle className='text-muted-foreground text-sm font-semibold'>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-1'>
        <div className='font-heading text-2xl font-semibold'>{value}</div>
        <p className='text-muted-foreground text-xs'>{hint}</p>
      </CardContent>
    </Card>
  );
}
