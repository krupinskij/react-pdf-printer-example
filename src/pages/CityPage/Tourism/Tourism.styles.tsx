import styled from 'styled-components';

import ImageC from 'components/Image';

export const Wrapper = styled.div`
  margin: 60px 100px;
`;

export const Item = styled.div`
  margin-bottom: 60px;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.xl};
  margin-block: 16px;
`;

export const Image = styled(ImageC)`
  width: auto;
  height: 200px;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.font.lg};
  margin-block: 16px;
`;
