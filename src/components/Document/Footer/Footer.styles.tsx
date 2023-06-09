import { Pagination as PdfPagination } from 'react-pdf-printer';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 50px;
  color: white;
  background: ${({ theme }) =>
    `linear-gradient(12deg, ${theme.color.secondary} 0%, ${theme.color.primary} 100%)`};
`;

export const Pagination = styled(PdfPagination)`
  display: block;
  margin: auto 20px 8px;
`;
