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
  thumb?: string;
  caption: {
    text: string;
    position: Position;
  };
  source?: string;
  preview?: boolean;
  className?: string;
};

const Image = ({
  src,
  thumb = src,
  caption: { text, position },
  source,
  preview,
  className,
}: Props) => {
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
          src={thumb}
          alt={text}
          className={className}
          onLoad={run}
          onError={run}
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
      {!isPrinter && preview && (
        <Modal id={modalId} ref={modalRef}>
          <Styled.ModalImage src={src} alt={text} />
        </Modal>
      )}
    </>
  );
};

export default Image;
