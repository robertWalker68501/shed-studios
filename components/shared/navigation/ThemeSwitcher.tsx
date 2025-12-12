// components/theme-switcher.tsx
'use client';

import * as React from 'react';

import { useTheme } from 'next-themes';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function ThemeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // avoid hydration mismatch
    return (
      <Select disabled>
        <SelectTrigger className='h-8 w-30 text-xs'>
          <SelectValue placeholder='Theme' />
        </SelectTrigger>
      </Select>
    );
  }

  const current = theme === 'system' ? (systemTheme ?? 'system') : theme;

  return (
    <Select
      value={theme}
      onValueChange={(value) => setTheme(value)}
    >
      <SelectTrigger className='h-8 w-32.5 text-xs'>
        <SelectValue
          placeholder='Theme'
          aria-label={`Current theme: ${current}`}
        />
      </SelectTrigger>
      <SelectContent className='text-xs'>
        <SelectItem value='light'>Light</SelectItem>
        <SelectItem value='dark'>Dark</SelectItem>
        <SelectItem value='system'>System</SelectItem>
      </SelectContent>
    </Select>
  );
}
