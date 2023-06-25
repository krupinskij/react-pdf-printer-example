import React, { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

import * as Styled from './Modal.styles';

type Props = HTMLAttributes<HTMLDialogElement> & {
  children: React.ReactNode;
};

const Modal = ({ children, ...attr }: Props, ref: React.ForwardedRef<HTMLDialogElement>) => {
  const { t } = useTranslation('general', { keyPrefix: 'modal' });
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
    <Styled.Modal ref={ref} onClick={handleCloseModalBackdrop} {...attr}>
      <Styled.CloseButton aria-label={t('close') as string} onClick={handleCloseModal}>
        <Styled.Icon src={`${import.meta.env.BASE_URL}/assets/icon/close.svg`} />
      </Styled.CloseButton>
      {children}
    </Styled.Modal>
  );
};

export default React.forwardRef(Modal);
