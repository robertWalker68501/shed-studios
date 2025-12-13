import { currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import prisma from '@/lib/prisma';

type UserRow = {
  id: string;
  clerkId: string;
  email: string | null;
  name: string | null;
  role: 'PLATFORM_ADMIN' | 'STUDIO_USER';
  deletedAt: Date | null;
  createdAt: Date;
};

export function UserManagementCard({
  users,
  query,
  showDeleted,
}: {
  users: UserRow[];
  query: string;
  showDeleted: boolean;
}) {
  return (
    <Card className='border-border/70 bg-card/80'>
      <CardHeader>
        <CardTitle className='font-heading text-lg'>User management</CardTitle>
      </CardHeader>

      <CardContent className='space-y-4'>
        <form className='flex flex-col gap-3 sm:flex-row sm:items-center'>
          <Input
            name='q'
            defaultValue={query}
            placeholder='Search users (name, email, clerkId)…'
            className='sm:flex-1'
          />
          <div className='flex items-center gap-2'>
            <Button
              type='submit'
              variant='outline'
            >
              Search
            </Button>
            <Button
              type='submit'
              variant={showDeleted ? 'default' : 'secondary'}
              name='d'
              value={showDeleted ? '0' : '1'}
              title='Toggle deleted users'
            >
              {showDeleted ? 'Hide deleted' : 'Show deleted'}
            </Button>
          </div>
        </form>

        <div className='border-border bg-background/60 rounded-xl border'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead className='hidden md:table-cell'>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className='text-right'>Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {users.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className='text-muted-foreground text-sm'
                  >
                    No users found.
                  </TableCell>
                </TableRow>
              ) : (
                users.map((u) => (
                  <TableRow key={u.id}>
                    <TableCell>
                      <div className='flex flex-col'>
                        <span className='text-sm font-medium'>
                          {u.name ?? 'Unnamed user'}
                        </span>
                        <span className='text-muted-foreground text-xs'>
                          {u.clerkId}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell className='hidden md:table-cell'>
                      <span className='text-muted-foreground text-sm'>
                        {u.email ?? '—'}
                      </span>
                    </TableCell>

                    <TableCell>
                      <RoleSelect
                        userId={u.id}
                        role={u.role}
                        disabled={!!u.deletedAt}
                      />
                    </TableCell>

                    <TableCell>
                      {u.deletedAt ? (
                        <Badge variant='destructive'>Deleted</Badge>
                      ) : (
                        <Badge variant='outline'>Active</Badge>
                      )}
                    </TableCell>

                    <TableCell className='text-right'>
                      {u.deletedAt ? (
                        <form action={restoreUserAction}>
                          <input
                            type='hidden'
                            name='userId'
                            value={u.id}
                          />
                          <Button
                            size='sm'
                            variant='outline'
                          >
                            Restore
                          </Button>
                        </form>
                      ) : (
                        <span className='text-muted-foreground text-xs'>—</span>
                      )}
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

async function restoreUserAction(formData: FormData) {
  'use server';
  const clerk = await currentUser();
  if (!clerk) throw new Error('Unauthorized');

  const appUser = await prisma.user.findFirst({
    where: { clerkId: clerk.id, deletedAt: null },
    select: { role: true },
  });

  if (!appUser || appUser.role !== 'PLATFORM_ADMIN') {
    throw new Error('Forbidden: PLATFORM_ADMIN role required');
  }
  const userId = String(formData.get('userId') ?? '');
  if (!userId) return;

  await prisma.user.update({
    where: { id: userId },
    data: { deletedAt: null },
  });
  revalidatePath('/admin/users');
}

async function updateUserRoleAction(formData: FormData) {
  'use server';
  const clerk = await currentUser();
  if (!clerk) throw new Error('Unauthorized');

  const appUser = await prisma.user.findFirst({
    where: { clerkId: clerk.id, deletedAt: null },
    select: { role: true },
  });

  if (!appUser || appUser.role !== 'PLATFORM_ADMIN') {
    throw new Error('Forbidden: PLATFORM_ADMIN role required');
  }
  const userId = String(formData.get('userId') ?? '');
  const role = String(formData.get('role') ?? '');
  if (!userId) return;
  if (role !== 'PLATFORM_ADMIN' && role !== 'STUDIO_USER') return;

  await prisma.user.update({
    where: { id: userId },
    data: { role: role as any },
  });
  revalidatePath('/admin/users');
}

function RoleSelect({
  userId,
  role,
  disabled,
}: {
  userId: string;
  role: 'PLATFORM_ADMIN' | 'STUDIO_USER';
  disabled?: boolean;
}) {
  return (
    <form
      action={updateUserRoleAction}
      className='flex items-center justify-end gap-2'
    >
      <input
        type='hidden'
        name='userId'
        value={userId}
      />
      <Select
        name='role'
        defaultValue={role}
        disabled={disabled}
      >
        <SelectTrigger className='h-8 w-42.5 text-xs'>
          <SelectValue placeholder='Role' />
        </SelectTrigger>
        <SelectContent className='text-xs'>
          <SelectItem value='STUDIO_USER'>STUDIO_USER</SelectItem>
          <SelectItem value='PLATFORM_ADMIN'>PLATFORM_ADMIN</SelectItem>
        </SelectContent>
      </Select>
      <Button
        type='submit'
        size='sm'
        variant='outline'
        disabled={disabled}
      >
        Save
      </Button>
    </form>
  );
}
