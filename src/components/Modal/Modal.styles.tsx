import styled from 'styled-components';

export const Modal = styled.dialog`
  border: none;
  padding: 0;
  box-shadow: 0 0 16px #0008;

  & > img {
    vertical-align: middle;
  }

  ::backdrop {
    background-color: black;
    opacity: 0.5;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  padding: 8px;
  border: none;
  background: black;
  opacity: 0.8;

  cursor: pointer;
`;

export const Icon = styled.img`
  width: 24px;
  filter: invert(1);
`;
