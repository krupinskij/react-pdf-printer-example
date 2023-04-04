import { useTranslation } from 'react-i18next';

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
  className?: string;
};

const Image = ({ src, caption: { text, position }, source, className }: Props) => {
  const { t } = useTranslation('general', { keyPrefix: 'image' });
  return (
    <Styled.Figure>
      <Styled.Image src={src} alt={text} className={className} />
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
  );
};

export default Image;
