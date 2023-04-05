import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const List = styled.div<{ $wrap?: boolean }>`
  display: flex;
  flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'no-wrap')};
  gap: 16px;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Icon = styled.img<{ $flip?: boolean }>`
  width: 24px;
  scale: ${({ $flip }) => $flip && '-1'};
  opacity: 0.8;
`;

const Button = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  top: 0;
  bottom: 0;
  padding-inline: 8px;
  border-radius: 4px;

  :not(:disabled) {
    cursor: pointer;
    background: ${({ theme }) => theme.color.background.shadow};
  }

  :disabled ${Icon} {
    opacity: 0.3;
  }
`;

export const LeftButton = styled(Button)`
  left: 0;
  translate: -120%;
`;

export const RightButton = styled(Button)`
  right: 0;
  translate: 120%;
`;
