declare global {
  type SiteLogoProps = {
    href?: string;
    linkClasses?: string;
    imgContainerClasses?: string;
    imgSrc?: string;
    imgAlt?: string;
    imgWidth?: number;
    imgHeight?: number;
    imgClasses?: string;
    textContainerClasses?: string;
    text?: string;
    subText?: string;
    textClasses?: string;
    subTextClasses?: string;
  };

  type ActionButtonsProps = {
    variantBtn1?: 'default' | 'outline' | 'ghost' | 'link';
    variantBtn2?: 'default' | 'outline' | 'ghost' | 'link';
    btn1Text?: string;
    btn2Text?: string;
    sizeBtn1?: 'default' | 'sm' | 'lg';
    sizeBtn2?: 'default' | 'sm' | 'lg';
    classNameBtn1?: string;
    classNameBtn2?: string;
    icon1Classes?: string;
    icon2Classes?: string;
  };
}

export {};
