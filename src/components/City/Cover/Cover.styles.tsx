import styled, { css } from 'styled-components';

import MapC from './Map';

const leftMargin = '60px';

export const Cover = styled.div<{ $print: boolean }>`
  height: ${({ $print }) => ($print ? '600px' : 'clamp(600px, 65vh, 1000px)')};
  position: relative;
  overflow: hidden;

  ${({ $print }) =>
    $print
      ? css`
          height: 600px;
          margin-bottom: 80px;
        `
      : css`
          height: clamp(600px, 65vh, 1000px);
          margin-bottom: 40px;
        `}
`;

export const TitleWrapper = styled.div`
  position: absolute;
  bottom: 60px;
  background-color: #ffffffdd;
  padding-left: ${leftMargin};
  z-index: 2;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.xxl};
  font-weight: 700;
  margin: 0;
  padding: 0.4em 1.5em 0.1em 0;
`;

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.font.lg};
  margin: 0;
  padding: 1.5em 2em 1.5em 0;
`;

export const Map = styled(MapC)<{ $print: boolean }>`
  position: absolute;
  bottom: 260px;
  left: ${leftMargin};
  z-index: 1;

  ${({ $print }) =>
    $print &&
    css`
      span {
        height: 12px;
        width: 12px;
      }
      img {
        width: 200px;
      }
    `}
`;
