import ActionButtons from '@/components/shared/navigation/ActionButtons';
import MobileNav from '@/components/shared/navigation/MobileNav';
import { ThemeSwitcher } from '@/components/shared/navigation/ThemeSwitcher';
import SiteLogo from '@/components/shared/SiteLogo';
import { NAV_LINKS } from '@/constants';

const Navbar = () => {
  return (
    <header className='border-border/60 bg-background/80 sticky top-0 z-40 border-b backdrop-blur'>
      <div className='container mx-auto flex h-16 items-center justify-between px-4'>
        {/* Brand */}
        <SiteLogo />

        {/* Desktop nav */}
        <nav className='hidden items-center gap-8 text-sm md:flex'>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className='text-muted-foreground hover:text-foreground text-sm transition-colors'
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className='hidden items-center gap-3 md:flex'>
          {/* Theme selector */}
          <ThemeSwitcher />
          <ActionButtons
            btn1Href='/sign-in'
            btn2Href='/'
          />
        </div>

        {/* Mobile menu */}
        <div className='flex items-center md:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
