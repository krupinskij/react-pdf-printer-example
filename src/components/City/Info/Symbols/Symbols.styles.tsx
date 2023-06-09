import styled from 'styled-components';

export const Symbols = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

export const SymbolsList = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 24px;
`;

export const CoaImg = styled.img`
  height: 140px;
  width: auto;
`;

export const FlagImg = styled.img`
  height: 100px;
  width: auto;
`;

export const Caption = styled.span`
  font-size: ${({ theme }) => theme.font.lg};
  text-align: center;
`;
