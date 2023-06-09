import styled from 'styled-components';

import { Size, Variant } from './Button';

export const Button = styled.button<{ $size: Size; $variant: Variant }>`
  background: ${({ theme, $variant }) => theme.btn.bg[$variant]};
  color: ${({ theme, $variant }) => theme.btn.color[$variant]};

  font-size: ${({ theme, $size }) => theme.font[$size]};
  padding: 0.5em 1em;
  font-weight: 500;
  border: ${({ theme, $variant }) => theme.btn.border[$variant]};
  border-radius: 4px;
  cursor: pointer;
`;
