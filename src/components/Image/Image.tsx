import { useEffect, useId, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { usePrinter } from 'react-pdf-printer';

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
  const { subscribe, run, isPrinter } = usePrinter(src);
  const { t } = useTranslation('general', { keyPrefix: 'image' });
  const modalRef = useRef<HTMLDialogElement>(null);
  const modalId = useId();

  const handleShowDialog = () => {
    modalRef.current?.showModal();
  };

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    subscribe();
    const image = imageRef.current;

    if (!image) return;

    image.addEventListener('load', run);

    return () => {
      image.removeEventListener('load', run);
    };
  }, []);

  return (
    <>
      <Styled.Figure>
        {preview && (
          <Styled.Preview aria-controls={modalId} aria-haspopup="dialog" onClick={handleShowDialog}>
            {t('preview')}
          </Styled.Preview>
        )}
        <Styled.Image
          ref={imageRef}
          loading={isPrinter ? 'eager' : 'lazy'}
          src={src}
          alt={text}
          className={className}
        />
        <Styled.Caption $position={position} $print={isPrinter}>
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
