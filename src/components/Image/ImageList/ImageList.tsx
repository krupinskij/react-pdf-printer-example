import { MouseEvent, UIEvent, useEffect, useId, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { usePrinter } from 'react-pdf-printer';

import { DC } from 'api';
import Modal from 'components/Modal';

import * as Styled from './ImageList.styles';

type Props = {
  images: DC.Image[];
  carousel?: boolean;
};

const ImageList = ({ images, carousel }: Props) => {
  const { t } = useTranslation();
  const { isPrinter } = usePrinter();

  const listRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDialogElement>(null);
  const modalId = useId();

  const [imageInfo, setImageInfo] = useState({ src: '', caption: '' });

  const [isLeftScrollDisabled, setIsLeftScrollDisabled] = useState(true);
  const [isRightScrollDisabled, setIsRightScrollDisabled] = useState(false);

  const setDisabled = (elem: HTMLDivElement) => {
    setIsLeftScrollDisabled(elem.scrollLeft === 0);
    setIsRightScrollDisabled(Math.abs(elem.scrollWidth - elem.clientWidth - elem.scrollLeft) < 5);
  };

  const handleScrollLeft = () => {
    const elem = listRef.current;
    if (!elem) return;

    elem.scrollBy(-400, 0);
    setDisabled(elem);
  };

  const handleScrollRight = () => {
    const elem = listRef.current;
    if (!elem) return;

    elem.scrollBy(400, 0);
    setDisabled(elem);
  };

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    setDisabled(event.currentTarget);
  };

  const handlePreviewClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { src, caption } = event.currentTarget.dataset;
    const modalElem = modalRef.current;

    if (!src || !caption || !modalElem) return;

    setImageInfo({ src, caption });
    modalElem.showModal();
  };

  useEffect(() => {
    const modalElem = modalRef.current;

    if (!modalElem) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowRight': {
          setImageInfo(({ src }) => {
            const index = images.findIndex((image) => image.src === src);
            return images[(index + 1) % images.length];
          });
          break;
        }
        case 'ArrowLeft': {
          setImageInfo(({ src }) => {
            const index = images.findIndex((image) => image.src === src);
            return images[(index + images.length - 1) % images.length];
          });
          break;
        }
      }
    };

    modalElem.addEventListener('keydown', handleKeyDown);

    return () => {
      modalElem.removeEventListener('keydown', handleKeyDown);
    };
  }, [images]);

  return (
    <>
      <Styled.Wrapper>
        {carousel && (
          <Styled.LeftButton
            disabled={isLeftScrollDisabled}
            onClick={handleScrollLeft}
            aria-label={t('swipe.left') as string}
          >
            <Styled.Icon
              src={`${import.meta.env.BASE_URL}/assets/icon/arrow.svg`}
              alt={t('swipe.left') as string}
              aria-hidden="true"
            />
          </Styled.LeftButton>
        )}
        <Styled.List ref={listRef} onScroll={handleScroll} $wrap={!carousel}>
          {images.map(({ caption, source, src, thumb }) => (
            <Styled.Image
              key={src}
              src={src}
              thumb={thumb}
              caption={{ text: caption, position: 'bottom-left' }}
              source={source}
              preview
              $print={isPrinter}
              modalId={modalId}
              onPreviewClick={handlePreviewClick}
            />
          ))}
        </Styled.List>
        {carousel && (
          <Styled.RightButton
            disabled={isRightScrollDisabled}
            onClick={handleScrollRight}
            aria-label={t('swipe.right') as string}
          >
            <Styled.Icon
              src={`${import.meta.env.BASE_URL}/assets/icon/arrow.svg`}
              alt={t('swipe.right') as string}
              aria-hidden="true"
              $flip
            />
          </Styled.RightButton>
        )}
      </Styled.Wrapper>
      {!isPrinter && (
        <Modal id={modalId} ref={modalRef}>
          <Styled.ModalImage src={imageInfo.src} alt={imageInfo.caption} />
        </Modal>
      )}
    </>
  );
};

export default ImageList;
