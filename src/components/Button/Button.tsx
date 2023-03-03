import React from 'react';

import * as Styled from './Button.styles';

export type Size = 'sm' | 'md' | 'lg';

type Props = {
  size?: Size;
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
};

const Button = ({ size = 'md', onClick, children, className }: Props) => {
  return (
    <Styled.Button size={size} className={className} onClick={onClick}>
      {children}
    </Styled.Button>
  );
};

export default Button;
