import styled, { css } from 'styled-components';

import Link from 'components/Link';

import { Position } from './Image';

export const Figure = styled.figure`
  margin: 0;
  position: relative;
  width: min-content;
`;

export const Preview = styled.button`
  position: absolute;
  inset: 0;

  opacity: 0;
  color: white;
  background-color: #0008;
  border: none;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 2;
  transition: opacity 0.3s;
  cursor: pointer;
  user-select: none;

  :hover,
  :focus {
    opacity: 1;
  }
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

export const Caption = styled.figcaption<{ $position: Position; $print: boolean }>`
  position: absolute;
  font-size: ${({ theme, $print }) => ($print ? theme.font.xs : theme.font.sm)};
  background-color: #ffffffcc;
  padding: 0.5em 1em;
  --rounded: 0.25em;
  z-index: 3;

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
      : ''};
`;

export const ModalImage = styled.img`
  max-height: 80vh;
  max-width: 80vw;
  height: auto;
  width: auto;
`;
