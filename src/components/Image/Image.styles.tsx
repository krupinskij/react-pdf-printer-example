import styled from 'styled-components';

import Link from 'components/Link';

export const Figure = styled.figure`
  margin: 0;
  position: relative;
  width: min-content;
`;

export const Image = styled.img`
  width: 320px;
  height: 200px;
  vertical-align: bottom;
  object-fit: cover;
`;

export const SourceLink = styled(Link)`
  color: black !important;

  ::before {
    content: '[';
  }
  ::after {
    content: ']';
  }
`;

export const Caption = styled.figcaption`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: ${({ theme }) => theme.font.sm};
  background-color: #ffffffcc;
  padding: 4px 12px;
  border-top-left-radius: 4px;
`;
