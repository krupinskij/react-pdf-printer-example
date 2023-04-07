import styled from 'styled-components';

export const Button = styled.a`
  text-decoration: none;
  padding: 0.5em 1em;
  font-size: ${({ theme }) => theme.font.md};
  background: ${({ theme }) =>
    `linear-gradient(12deg, ${theme.color.secondary} 0%, ${theme.color.primary} 100%)`};
  color: white;
  border-radius: 0.5em;
`;
