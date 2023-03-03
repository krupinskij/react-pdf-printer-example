import styled from 'styled-components';

import Link from 'components/Link';

export const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;

  font-size: ${({ theme }) => theme.font.md};
  line-height: ${({ theme }) => theme.lineHeight.md};
  padding: 0.5em;
  background: ${({ theme }) =>
    `linear-gradient(12deg, ${theme.color.secondary} 0%, ${theme.color.primary} 100%)`};
`;

export const NavLink = styled(Link)`
  color: white !important;
`;
