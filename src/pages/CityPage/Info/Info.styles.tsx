import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 24px;

  background-color: ${({ theme }) => theme.color.background.shadow};
`;
