import styled from 'styled-components';

import Link from 'components/Link';

export const Menu = styled.ul`
  font-size: ${({ theme }) => theme.font.md};
  list-style: none;
  margin: auto;
  padding: 0px;
  width: max-content;
`;

export const MenuItem = styled.li`
  padding: 0.6em 0.1em;

  &:first-child {
    padding-top: 2em;
  }

  &:last-child {
    padding-bottom: 2em;
  }
`;

export const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.color.font.primary};
  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: center;
  gap: 5px;
`;

export const MenuImg = styled.img`
  height: 25px;
  width: auto;
`;
