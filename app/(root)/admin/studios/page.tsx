import { StudioManagementCard } from '@/components/admin/StudioManagement';
import { Badge } from '@/components/ui/badge';
import prisma from '@/lib/prisma';

type SearchParams = { q?: string };

export default async function AdminStudiosPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const query = (sp.q ?? '').trim();

  const studios = await prisma.studio.findMany({
    where: query
      ? {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { slug: { contains: query, mode: 'insensitive' } },
          ],
        }
      : {},
    orderBy: { createdAt: 'desc' },
    take: 25,
    select: {
      id: true,
      name: true,
      slug: true,
      createdAt: true,
      owner: { select: { id: true, name: true, email: true } },
      _count: {
        select: {
          memberships: true,
          rooms: true,
          projects: true,
          invoices: true,
        },
      },
    },
  });

  return (
    <main className='space-y-6'>
      <header className='flex items-end justify-between'>
        <div>
          <h1 className='font-heading text-2xl md:text-3xl'>Studios</h1>
          <p className='text-muted-foreground text-sm'>
            View studios, owners, and activity.
          </p>
        </div>
        <Badge variant='outline'>PLATFORM_ADMIN</Badge>
      </header>

      <StudioManagementCard
        studios={studios}
        // @ts-expect-error just cuz
        query={query}
      />
    </main>
  );
}
