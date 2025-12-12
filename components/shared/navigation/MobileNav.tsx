import { Menu } from 'lucide-react';

import ActionButtons from '@/components/shared/navigation/ActionButtons';
import { ThemeSwitcher } from '@/components/shared/navigation/ThemeSwitcher';
import SiteLogo from '@/components/shared/SiteLogo';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_LINKS } from '@/constants';

const MobileNav = () => {
  return (
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
            <SiteLogo />
          </SheetTitle>
        </SheetHeader>

        {/* Mobile nav links */}
        <nav className='mt-6 flex flex-1 flex-col gap-3 text-sm'>
          {NAV_LINKS.map((link) => (
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
          <ActionButtons />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
