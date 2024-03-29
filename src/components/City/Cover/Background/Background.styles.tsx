import styled, { css } from 'styled-components';

import ImageC from 'components/Image';

export const Wrapper = styled.div<{ $print: boolean }>`
  position: absolute;
  right: 0;
  z-index: 0;

  figure {
    width: 100%;
  }

  figcaption {
    font-size: ${({ theme }) => theme.font.md};
  }
`;

export const Shadow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0px;
  width: 300px;
  background: linear-gradient(90deg, white 20%, #fff0 100%);
  z-index: 1;
`;

export const Image = styled(ImageC)<{ $print: boolean }>`
  ${({ $print }) =>
    $print
      ? css`
          width: 100%;
          min-height: 620px;
        `
      : css`
          height: 85vh;
          translate: 0px -5vh;
        `}
`;
