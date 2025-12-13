'use client';

import type { ReactNode } from 'react';

import { SignOutButton, UserButton } from '@clerk/nextjs';
import {
  LayoutDashboard,
  Calendar,
  AudioLines,
  FileText,
  Receipt,
  Settings,
  Shield,
  Menu,
  LogOutIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ThemeSwitcher } from '@/components/shared/navigation/ThemeSwitcher';
import SiteLogo from '@/components/shared/SiteLogo';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

type Role = 'PLATFORM_ADMIN' | 'STUDIO_USER';

const studioNav = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/schedule', label: 'Schedule', icon: Calendar },
  { href: '/dashboard/mixes', label: 'Mix Reviews', icon: AudioLines },
  { href: '/dashboard/contracts', label: 'Contracts', icon: FileText },
  { href: '/dashboard/invoices', label: 'Invoices', icon: Receipt },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

const adminNav = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/admin', label: 'Admin', icon: Shield },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
];

export function DashboardShell({
  children,
  user,
}: {
  children: ReactNode;
  user: { name: string; role: Role };
}) {
  const pathname = usePathname();
  const links = user.role === 'PLATFORM_ADMIN' ? adminNav : studioNav;

  return (
    <div className='bg-background text-foreground min-h-screen'>
      {/* Topbar */}
      <header className='border-border/60 bg-background/80 sticky top-0 z-40 border-b backdrop-blur'>
        <div className='container mx-auto flex h-16 items-center justify-between px-4'>
          <div className='flex items-center gap-3'>
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant='outline'
                  size='icon'
                  className='md:hidden'
                  aria-label='Open menu'
                >
                  <Menu className='h-5 w-5' />
                </Button>
              </SheetTrigger>
              <SheetContent
                side='left'
                className='p-0'
              >
                <SheetHeader>
                  <SheetTitle>
                    <SiteLogo />
                  </SheetTitle>
                </SheetHeader>
                <Separator />
                <nav className='px-2 py-3'>
                  {links.map(({ href, label, icon: Icon }) => {
                    const active = pathname === href;
                    return (
                      <Link
                        key={href}
                        href={href}
                        className={[
                          'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
                          active
                            ? 'bg-muted text-foreground'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                        ].join(' ')}
                      >
                        <Icon className='h-4 w-4' />
                        {label}
                      </Link>
                    );
                  })}
                </nav>
                <div className='border-border border-t px-4 py-4'>
                  <ThemeSwitcher />
                </div>
              </SheetContent>
            </Sheet>

            <Link
              href='/dashboard'
              className='flex items-center gap-2'
            >
              <div className='from-primary to-accent text-primary-foreground flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br'>
                <AudioLines className='h-4 w-4' />
              </div>
              <div className='leading-tight'>
                <div className='font-heading text-sm font-semibold'>
                  Shed Studios
                </div>
                <div className='text-muted-foreground text-[11px]'>
                  Studio OS
                </div>
              </div>
            </Link>
          </div>

          <div className='flex items-center gap-3'>
            <Badge
              variant='outline'
              className='hidden sm:inline-flex'
            >
              {user.role === 'PLATFORM_ADMIN'
                ? 'Platform Admin'
                : 'Studio User'}
            </Badge>
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <div className='container mx-auto grid grid-cols-1 gap-6 px-4 py-6 md:grid-cols-[240px_1fr]'>
        {/* Sidebar */}
        <aside className='hidden md:block'>
          <div className='border-border bg-card/80 rounded-xl border p-3'>
            <div className='px-2 pb-2'>
              <div className='text-sm font-medium'>{user.name}</div>
              <div className='text-muted-foreground text-xs'>
                {user.role === 'PLATFORM_ADMIN'
                  ? 'Platform Admin'
                  : 'Studio User'}
              </div>
            </div>

            <nav className='mt-2 space-y-1'>
              {links.map(({ href, label, icon: Icon }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={[
                      'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
                      active
                        ? 'bg-muted text-foreground'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                    ].join(' ')}
                  >
                    <Icon className='h-4 w-4' />
                    {label}
                  </Link>
                );
              })}
              <SignOutButton>
                <Link
                  href=''
                  className={buttonVariants({
                    variant: 'default',
                    className: 'mt-3 w-full',
                  })}
                >
                  <LogOutIcon className='h-4 w-4' />
                  Logout
                </Link>
              </SignOutButton>
            </nav>
          </div>
        </aside>

        {/* Content */}
        <section className='min-w-0'>{children}</section>
      </div>
    </div>
  );
}
