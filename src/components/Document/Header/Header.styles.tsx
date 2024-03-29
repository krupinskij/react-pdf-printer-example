import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  height: 60px;
  padding: 12px 20px;
  color: white;
  font-size: ${({ theme }) => theme.font.lg};
  background: ${({ theme }) =>
    `linear-gradient(12deg, ${theme.color.secondary} 0%, ${theme.color.primary} 100%)`};
`;
