import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import * as Styled from './Map.styles';

type Props = {
  position: { x: number; y: number };
  className?: string;
};

const MapImage = ({ position, className }: Props) => {
  const { t } = useTranslation('general');
  const imageRef = useRef<HTMLImageElement>(null);
  const [isPointVisible, setIsPointVisible] = useState(false);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const setPointVisible = () => {
      setIsPointVisible(true);
    };

    image.addEventListener('load', setPointVisible);

    return () => {
      image.removeEventListener('load', setPointVisible);
    };
  }, []);

  return (
    <Styled.MapWrapper className={className} aria-hidden="true">
      {isPointVisible && <Styled.Point {...position} />}
      <Styled.MapImage
        ref={imageRef}
        width="250"
        src={`/src/assets/icon/poland.svg`}
        alt={t('poland.map') as string}
      />
    </Styled.MapWrapper>
  );
};

export default MapImage;
