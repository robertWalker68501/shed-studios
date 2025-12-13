import { UserButton } from '@clerk/nextjs';
import { ArrowRight, LogIn } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

const ActionButtons = ({
  btn1Href = '#',
  variantBtn1 = 'ghost',
  sizeBtn1 = 'sm',
  classNameBtn1 = 'gap-1 text-sm',
  btn1Text = 'Log in',
  btn2Href = '#',
  variantBtn2 = 'default',
  sizeBtn2 = 'sm',
  classNameBtn2 = 'gap-1 text-sm',
  btn2Text = 'Start free trial',
  icon1Classes = 'h-4 w-4',
  icon2Classes = 'h-3.5 w-3.5',
}: ActionButtonsProps) => {
  return (
    <>
      <UserButton />
      <Button
        variant={variantBtn1}
        size={sizeBtn1}
        asChild
      >
        <Link
          href={btn1Href}
          className={classNameBtn1}
        >
          <LogIn className={icon1Classes} />
          {btn1Text}
        </Link>
      </Button>
      <Button
        variant={variantBtn2}
        size={sizeBtn2}
        asChild
      >
        <Link
          href={btn2Href}
          className={classNameBtn2}
        >
          {btn2Text}
          <ArrowRight className={icon2Classes} />
        </Link>
      </Button>
    </>
  );
};

export default ActionButtons;
