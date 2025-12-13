import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import prisma, { activeUserWhere } from '@/lib/prisma';

export default async function AdminPage() {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect('/sign-in');

  const appUser = await prisma.user.findFirst({
    where: { clerkId: clerkUser.id, ...activeUserWhere },
    select: { role: true },
  });

  if (!appUser) redirect('/dashboard');
  if (appUser.role !== 'PLATFORM_ADMIN') redirect('/dashboard');

  return (
    <main className='space-y-6'>
      <header>
        <h1 className='font-heading text-2xl md:text-3xl'>Admin</h1>
        <p className='text-muted-foreground text-sm'>
          Platform-level controls and operational tools.
        </p>
      </header>

      <div className='grid gap-6 md:grid-cols-2'>
        <Card className='border-border/70 bg-card/80'>
          <CardHeader>
            <CardTitle className='font-heading text-lg'>
              User management
            </CardTitle>
          </CardHeader>
          <CardContent className='text-muted-foreground text-sm'>
            Next: search users, view deleted users, restore users, role changes.
          </CardContent>
        </Card>

        <Card className='border-border/70 bg-card/80'>
          <CardHeader>
            <CardTitle className='font-heading text-lg'>
              Studio management
            </CardTitle>
          </CardHeader>
          <CardContent className='text-muted-foreground text-sm'>
            Next: view studios, owners, billing status, and system health.
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
