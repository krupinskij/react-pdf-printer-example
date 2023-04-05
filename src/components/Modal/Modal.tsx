import React from 'react';

import * as Styled from './Modal.styles';

type Props = {
  children: React.ReactNode;
};

const Modal = ({ children }: Props, ref: React.ForwardedRef<HTMLDialogElement>) => {
  const handleCloseModal = () => {
    if (typeof ref === 'function') return;

    ref?.current?.close();
  };

  const handleCloseModalBackdrop = (event: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = event.currentTarget;

    const rect = dialog.getBoundingClientRect();
    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!isInDialog) {
      dialog.close();
    }
  };

  return (
    <Styled.Modal ref={ref} onClick={handleCloseModalBackdrop}>
      <Styled.CloseButton onClick={handleCloseModal}>
        <Styled.Icon src={`/src/assets/icon/close.svg`} />
      </Styled.CloseButton>
      {children}
    </Styled.Modal>
  );
};

export default React.forwardRef(Modal);
