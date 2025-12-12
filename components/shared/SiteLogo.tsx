import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

const SiteLogo = ({
  href = '/',
  linkClasses,
  imgContainerClasses,
  imgSrc = '/assets/images/logo-round.png',
  imgAlt = 'Shed Studios Logo',
  imgWidth = 32,
  imgHeight = 32,
  imgClasses,
  textContainerClasses,
  text = 'Shed Studios',
  subText = 'Studio OS',
  textClasses,
  subTextClasses,
}: SiteLogoProps) => {
  return (
    <Link
      href={href}
      className={cn('flex items-center gap-2', linkClasses)}
    >
      <div
        className={cn(
          'flex items-center justify-center shadow-sm',
          imgContainerClasses
        )}
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={imgWidth}
          height={imgHeight}
          className={cn('h-8 w-8', imgClasses)}
        />
      </div>
      <div className={cn('flex flex-col leading-tight', textContainerClasses)}>
        <span
          className={cn('font-heading text-base font-semibold', textClasses)}
        >
          {text}
        </span>
        <span
          className={cn('text-muted-foreground text-[11px]', subTextClasses)}
        >
          {subText}
        </span>
      </div>
    </Link>
  );
};

export default SiteLogo;
