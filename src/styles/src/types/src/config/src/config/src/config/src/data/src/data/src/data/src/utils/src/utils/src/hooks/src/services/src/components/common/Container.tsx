import { ReactNode } from 'react';
import { THEME_CONFIG } from '../../config/theme';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full ${THEME_CONFIG.spacing.containerMaxWidth} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
