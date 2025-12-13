import type { ReactNode } from 'react';

import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import { DashboardShell } from '@/components/dashboard/DashboardShell';
import prisma, { activeUserWhere } from '@/lib/prisma';

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const clerk = await currentUser();
  if (!clerk) redirect('/sign-in');

  const appUser = await prisma.user.findFirst({
    where: { clerkId: clerk.id, ...activeUserWhere },
    select: { name: true, email: true, role: true },
  });

  if (!appUser) redirect('/dashboard');
  if (appUser.role !== 'PLATFORM_ADMIN') redirect('/dashboard');

  return (
    <DashboardShell
      user={{
        name: appUser.name ?? appUser.email ?? 'Admin',
        role: appUser.role,
      }}
    >
      {children}
    </DashboardShell>
  );
}
