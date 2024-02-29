import { useTranslation } from 'react-i18next';
import { usePrinter } from 'react-pdf-printer';

import { DC } from 'api';

import Background from './Background';
import * as Styled from './Cover.styles';

type Props = Pick<DC.CityDetails, 'description' | 'position' | 'background'> & {
  city: DC.ID;
};

const Cover = ({ city, description, position, background }: Props) => {
  const { t } = useTranslation('cities');
  const { isPrinter } = usePrinter();
  return (
    <Styled.Cover $print={isPrinter}>
      <Styled.TitleWrapper>
        <Styled.Title>{t(city)}</Styled.Title>
        <Styled.SubTitle>{description}</Styled.SubTitle>
      </Styled.TitleWrapper>
      {!isPrinter && <Styled.Map position={position} $print={isPrinter} />}
      <Background {...background} />
    </Styled.Cover>
  );
};

export default Cover;
