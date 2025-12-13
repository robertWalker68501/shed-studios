import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type StudioRow = {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  owner: { id: string; name: string | null; email: string | null } | null;
  _count: {
    memberships: number;
    rooms: number;
    projects: number;
    invoices: number;
  };
};

export function StudioManagementCard({
  studios,
  query,
}: {
  studios: StudioRow[];
  query: string;
}) {
  return (
    <Card className='border-border/70 bg-card/80'>
      <CardHeader>
        <CardTitle className='font-heading text-lg'>
          Studio management
        </CardTitle>
      </CardHeader>

      <CardContent className='space-y-4'>
        <form className='flex flex-col gap-3 sm:flex-row sm:items-center'>
          <Input
            name='q'
            defaultValue={query}
            placeholder='Search studios (name, slug)…'
            className='sm:flex-1'
          />
          <Button
            type='submit'
            variant='outline'
          >
            Search
          </Button>
        </form>

        <div className='border-border bg-background/60 rounded-xl border'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Studio</TableHead>
                <TableHead className='hidden md:table-cell'>Owner</TableHead>
                <TableHead className='hidden lg:table-cell'>Members</TableHead>
                <TableHead className='hidden lg:table-cell'>Rooms</TableHead>
                <TableHead className='hidden lg:table-cell'>Projects</TableHead>
                <TableHead className='hidden lg:table-cell'>Invoices</TableHead>
                <TableHead className='text-right'>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {studios.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className='text-muted-foreground text-sm'
                  >
                    No studios found.
                  </TableCell>
                </TableRow>
              ) : (
                studios.map((s) => (
                  <TableRow key={s.id}>
                    <TableCell>
                      <div className='flex flex-col'>
                        <span className='text-sm font-medium'>{s.name}</span>
                        <span className='text-muted-foreground text-xs'>
                          /{s.slug}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className='hidden md:table-cell'>
                      <div className='flex flex-col'>
                        <span className='text-muted-foreground text-sm'>
                          {s.owner?.name ?? '—'}
                        </span>
                        <span className='text-muted-foreground text-xs'>
                          {s.owner?.email ?? ''}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className='hidden lg:table-cell'>
                      <Badge variant='outline'>{s._count.memberships}</Badge>
                    </TableCell>
                    <TableCell className='hidden lg:table-cell'>
                      <Badge variant='outline'>{s._count.rooms}</Badge>
                    </TableCell>
                    <TableCell className='hidden lg:table-cell'>
                      <Badge variant='outline'>{s._count.projects}</Badge>
                    </TableCell>
                    <TableCell className='hidden lg:table-cell'>
                      <Badge variant='outline'>{s._count.invoices}</Badge>
                    </TableCell>

                    <TableCell className='text-right'>
                      <Button
                        asChild
                        size='sm'
                        variant='outline'
                      >
                        <Link href={`/dashboard?studio=${s.slug}`}>Open</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
