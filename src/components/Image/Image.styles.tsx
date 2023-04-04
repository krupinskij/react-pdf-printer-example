import styled, { css } from 'styled-components';

import Link from 'components/Link';

import { Position } from './Image';

export const Figure = styled.figure`
  margin: 0;
  position: relative;
  width: min-content;
`;

export const Image = styled.img`
  background-color: ${({ theme }) => theme.color.background.shadow};
  vertical-align: bottom;
  object-fit: cover;
`;

export const SourceLink = styled(Link)`
  color: black !important;

  ::before {
    content: '[';
  }
  ::after {
    content: ']';
  }
`;

export const Caption = styled.figcaption<{ $position: Position }>`
  position: absolute;
  font-size: ${({ theme }) => theme.font.sm};
  background-color: #ffffffcc;
  padding: 0.5em 1em;
  --rounded: 0.25em;

  ${({ $position }) =>
    $position === 'top-left'
      ? css`
          top: 0;
          left: 0;
          border-bottom-right-radius: var(--rounded);
        `
      : $position === 'top-right'
      ? css`
          top: 0;
          right: 0;
          border-bottom-left-radius: var(--rounded);
        `
      : $position === 'bottom-left'
      ? css`
          bottom: 0;
          left: 0;
          border-top-right-radius: var(--rounded);
        `
      : $position === 'bottom-right'
      ? css`
          bottom: 0;
          right: 0;
          border-top-left-radius: var(--rounded);
        `
      : ''}
`;
