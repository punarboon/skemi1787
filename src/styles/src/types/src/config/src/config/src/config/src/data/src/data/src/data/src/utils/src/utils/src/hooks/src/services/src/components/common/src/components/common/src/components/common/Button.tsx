import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { THEME_CONFIG } from '../../config/theme';

type ButtonVariant = 'primary' | 'secondary' | 'gold';

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}

type AsButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AsLinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = AsButtonProps | AsLinkProps;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: THEME_CONFIG.buttons.primaryClass,
  secondary: THEME_CONFIG.buttons.secondaryClass,
  gold: THEME_CONFIG.buttons.goldAccentClass,
};

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClass = `inline-flex items-center justify-center gap-2 ${THEME_CONFIG.buttons.radius} px-5 py-3 text-sm sm:text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 ${VARIANT_CLASSES[variant]} ${className}`;

  if ('href' in props && props.href !== undefined) {
    const { href, ...anchorProps } = props;
    return (
      <a href={href} className={baseClass} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={baseClass} {...buttonProps}>
      {children}
    </button>
  );
}
