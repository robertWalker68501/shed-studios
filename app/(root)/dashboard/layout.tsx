import type { ReactNode } from 'react';

import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

import { DashboardShell } from '@/components/dashboard/DashboardShell';
import prisma, { activeUserWhere } from '@/lib/prisma';

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect('/sign-in');

  const appUser = await prisma.user.findFirst({
    where: { clerkId: clerkUser.id, ...activeUserWhere },
    select: { id: true, name: true, role: true },
  });

  // Self-heal: if webhook hasn’t created the user yet
  if (!appUser) {
    const email = clerkUser.emailAddresses?.[0]?.emailAddress ?? null;
    const name =
      [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(' ') ||
      clerkUser.username ||
      null;

    await prisma.user.create({
      data: {
        clerkId: clerkUser.id,
        email,
        name,
        role: 'STUDIO_USER',
        deletedAt: null,
      },
    });

    redirect('/dashboard');
  }

  return (
    <DashboardShell
      user={{
        name: appUser.name ?? 'Account',
        role: appUser.role,
      }}
    >
      {children}
    </DashboardShell>
  );
}
