import styled from 'styled-components';

import { Spinner as SpinnerC, Error as ErrorC } from 'components/Info';
import TableComp from 'components/Table';

const margin = '24px';

export const Spinner = styled(SpinnerC)`
  margin-block: ${margin};
`;

export const Error = styled(ErrorC)`
  margin-block: ${margin};
`;

export const Table = styled(TableComp)`
  margin: ${margin} auto;
`;

export const Column = styled.span<{ textAlign?: React.CSSProperties['textAlign'] }>`
  display: block;
  font-size: ${({ theme }) => theme.font.lg};
  text-align: ${({ textAlign }) => textAlign};
`;

export const Cell = styled.span<{ textAlign?: React.CSSProperties['textAlign'] }>`
  display: block;
  text-align: ${({ textAlign }) => textAlign};
`;
