import styled from 'styled-components';

export const MapWrapper = styled.div`
  position: relative;
`;

export const Point = styled.span<{ x: number; y: number }>`
  display: block;
  height: 15px;
  width: 15px;
  border-radius: 999999px;
  background: ${({ theme }) => theme.color.secondary};
  border: 2px solid white;

  position: absolute;
  translate: -50% -50%;
  left: ${({ x }) => x}%;
  top: ${({ y }) => y}%;
`;

export const MapImage = styled.img`
  vertical-align: middle;
`;
