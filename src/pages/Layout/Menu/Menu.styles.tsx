import styled from 'styled-components';

import Link from 'components/Link';

export const Menu = styled.ul`
  font-size: ${({ theme }) => theme.font.md};
  padding: 0.5em 2em;
  list-style: none;
`;

export const MenuItem = styled.li`
  padding: 0.4em 0.1em;
`;

export const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.color.font.primary};
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const MenuImg = styled.img`
  height: 25px;
  width: auto;
`;
