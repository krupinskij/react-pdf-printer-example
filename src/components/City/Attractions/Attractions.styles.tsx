import styled from 'styled-components';

import ImageC from 'components/Image';

export const Wrapper = styled.div<{ $print: boolean }>`
  margin: ${({ $print }) => ($print ? '10px 30px' : '60px 100px')};
`;

export const Item = styled.div`
  margin-bottom: 60px;
`;

export const Title = styled.h3<{ $print: boolean }>`
  font-size: ${({ theme, $print }) => ($print ? theme.font.lg : theme.font.xl)};
  margin-block: 16px;
`;

export const Image = styled(ImageC)<{ $print: boolean }>`
  width: auto;
  height: ${({ $print }) => ($print ? '120px' : '220px')};
`;

export const Description = styled.p<{ $print: boolean }>`
  font-size: ${({ theme, $print }) => ($print ? theme.font.md : theme.font.lg)};
  margin-block: 16px;
`;
