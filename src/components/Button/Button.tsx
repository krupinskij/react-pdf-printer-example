import React, { HTMLAttributes } from 'react';

import * as Styled from './Button.styles';

export type Size = 'sm' | 'md' | 'lg';

type Props = HTMLAttributes<HTMLButtonElement> & {
  size?: Size;
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const Button = ({ size = 'md', onClick, children, ...attr }: Props) => {
  return (
    <Styled.Button size={size} {...attr} onClick={onClick}>
      {children}
    </Styled.Button>
  );
};

export default Button;
