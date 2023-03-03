import styled from 'styled-components';

import { Size } from './Button';

export const Button = styled.button<{ size: Size }>`
  background: ${({ theme }) =>
    `linear-gradient(12deg, ${theme.color.secondary} 0%, ${theme.color.primary} 100%)`};
  color: white;

  font-size: ${({ theme, size }) => theme.font[size]};
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
`;
