import { UserManagementCard } from '@/components/admin/UserManagement';
import { Badge } from '@/components/ui/badge';
import prisma from '@/lib/prisma';

type SearchParams = { q?: string; d?: string };

export default async function AdminUsersPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const query = (sp.q ?? '').trim();
  const showDeleted = sp.d === '1';

  const users = await prisma.user.findMany({
    where: {
      ...(showDeleted ? {} : { deletedAt: null }),
      ...(query
        ? {
            OR: [
              { email: { contains: query, mode: 'insensitive' } },
              { name: { contains: query, mode: 'insensitive' } },
              { clerkId: { contains: query, mode: 'insensitive' } },
            ],
          }
        : {}),
    },
    orderBy: [{ deletedAt: 'asc' }, { createdAt: 'desc' }],
    take: 30,
    select: {
      id: true,
      clerkId: true,
      email: true,
      name: true,
      role: true,
      deletedAt: true,
      createdAt: true,
    },
  });

  return (
    <main className='space-y-6'>
      <header className='flex items-end justify-between'>
        <div>
          <h1 className='font-heading text-2xl md:text-3xl'>Users</h1>
          <p className='text-muted-foreground text-sm'>
            Search, restore, and manage roles.
          </p>
        </div>
        <Badge variant='outline'>PLATFORM_ADMIN</Badge>
      </header>

      <UserManagementCard
        users={users}
        // @ts-expect-error just cuz
        query={query}
        showDeleted={showDeleted}
      />
    </main>
  );
}
