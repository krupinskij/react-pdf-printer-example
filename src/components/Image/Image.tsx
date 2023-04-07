import { useEffect, useId, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Modal from 'components/Modal';

import * as Styled from './Image.styles';

type Horizontal = 'left' | 'right';
type Vertical = 'top' | 'bottom';

export type Position = `${Vertical}-${Horizontal}`;

type Props = {
  src: string;
  caption: {
    text: string;
    position: Position;
  };
  source?: string;
  preview?: boolean;
  className?: string;
};

const Image = ({ src, caption: { text, position }, source, preview, className }: Props) => {
  const { t } = useTranslation('general', { keyPrefix: 'image' });
  const modalRef = useRef<HTMLDialogElement>(null);
  const modalId = useId();

  const handleShowDialog = () => {
    modalRef.current?.showModal();
  };

  return (
    <>
      <Styled.Figure>
        {preview && (
          <Styled.Preview aria-controls={modalId} aria-haspopup="dialog" onClick={handleShowDialog}>
            {t('preview')}
          </Styled.Preview>
        )}
        <Styled.Image loading="lazy" src={src} alt={text} className={className} />
        <Styled.Caption $position={position}>
          {text} |{' '}
          {source ? (
            <Styled.SourceLink to={source} target="_blank">
              {t('source')}
            </Styled.SourceLink>
          ) : (
            <>{t('private')}</>
          )}
        </Styled.Caption>
      </Styled.Figure>
      <Modal id={modalId} ref={modalRef}>
        <Styled.ModalImage src={src} alt={text} />
      </Modal>
    </>
  );
};

export default Image;
