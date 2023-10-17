import { MouseEventHandler, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { usePrinter } from 'react-pdf-printer';

import { Position } from './Image.model';
import * as Styled from './Image.styles';

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
  modalId?: string;
  onPreviewClick?: MouseEventHandler<HTMLButtonElement>;
};

const Image = ({
  src,
  thumb = src,
  caption: { text, position },
  source,
  preview,
  className,
  modalId,
  onPreviewClick,
}: Props) => {
  const { subscribe, run, isPrinter } = usePrinter(src);
  const { t } = useTranslation('general', { keyPrefix: 'image' });

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    subscribe();
  }, []);

  return (
    <>
      <Styled.Figure>
        {preview && (
          <Styled.Preview
            aria-controls={modalId}
            aria-haspopup="dialog"
            data-src={src}
            data-caption={text}
            onClick={onPreviewClick}
          >
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
    </>
  );
};

export default Image;
