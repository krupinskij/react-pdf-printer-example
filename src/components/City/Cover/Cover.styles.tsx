import styled, { css } from 'styled-components';

import MapC from './Map';

const leftMargin = '60px';

export const Cover = styled.div`
  height: 600px;
  position: relative;
  overflow: hidden;
  margin-bottom: 48px;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 400px;
  background-color: #ffffffdd;
  padding-left: ${leftMargin};
  z-index: 2;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.xxl};
  font-weight: 700;
  margin: 0;
  padding: 0.1em 1.5em 0.1em 0;
`;

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.font.lg};
  margin: 0;
  padding: 1.5em 2em 1.5em 0;
`;

export const Map = styled(MapC)<{ $print: boolean }>`
  position: absolute;
  top: 60px;
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
