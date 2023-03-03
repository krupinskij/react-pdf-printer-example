import styled from 'styled-components';

import LinkC from 'components/Link';

const Wrapper = styled.span`
  display: grid;
  align-items: center;
  gap: 8px;
`;

export const CityWrapper = styled(Wrapper)`
  grid-template-columns: 32px 1fr;
`;

export const VoivodeshipWrapper = styled(Wrapper)`
  grid-template-columns: 40px 1fr;
`;

export const ImgWrapper = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FlagImg = styled.img`
  height: 20px;
  width: auto;
`;

export const CoaImg = styled.img`
  height: 30px;
  width: auto;
`;

export const Name = styled.span<{ bold?: boolean }>`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-size: ${({ theme }) => theme.font.md};
  line-height: ${({ theme }) => theme.lineHeight.md};
`;

export const Link = styled(LinkC)`
  color: ${({ theme }) => theme.color.font.primary};
`;
