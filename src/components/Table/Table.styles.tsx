import styled, { css } from 'styled-components';

import { Spinner as SpinnerC } from 'components/Info';

export const Spinner = styled(SpinnerC)`
  position: absolute;
  visibility: hidden;
  transform: translateX(-50%);
  translate: 50% 60px;
  width: 100%;
`;

export const Table = styled.table`
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  text-align: left;
`;

export const TableHeadCell = styled.span`
  display: block;
  margin: 0.5em 20px;
`;

export const TableRow = styled.tr`
  :nth-of-type(odd) {
    background-color: ${({ theme }) => theme.color.background.shadow};
  }
`;

export const TableRowCell = styled.span`
  display: block;
  margin: 4px 0;
  padding: 0 20px;
`;

export const Wrapper = styled.div<{ isLoading?: boolean }>`
  position: relative;

  ${Spinner} {
    opacity: 0;
    transition: opacity 0.5s;
  }

  ${Table} {
    transition: opacity 0.5s;
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      pointer-events: none;

      ${Spinner} {
        visibility: visible;
        opacity: 1;
      }

      ${Table} {
        opacity: 0.2;
      }
    `};
`;
