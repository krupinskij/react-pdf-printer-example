import React, { HTMLAttributes, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as Styled from './Button.styles';

export type Size = 'sm' | 'md' | 'lg';
export type Variant = 'contained' | 'outlined';

type Props = HTMLAttributes<HTMLButtonElement> & {
  size?: Size;
  variant?: Variant;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const Button = ({
  size = 'md',
  variant = 'contained',
  onClick,
  loading,
  disabled,
  children,
  ...attr
}: Props) => {
  const [dots, setDots] = useState(0);
  const { t } = useTranslation('general');

  useEffect(() => {
    if (!loading) return;

    const interval = setInterval(() => {
      setDots((dots) => (dots % 3) + 1);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [loading]);

  return (
    <Styled.Button
      $size={size}
      $variant={variant}
      {...attr}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {loading ? t('loading') + '.'.repeat(dots).padEnd(3, '\xa0') : children}
    </Styled.Button>
  );
};

export default Button;
