import { useTranslation } from 'react-i18next';
import { usePrinter } from 'react-pdf-printer';

import { CityDetail } from 'api/model';

import Background from './Background';
import * as Styled from './Cover.styles';

type Props = Pick<CityDetail, 'description' | 'position' | 'background'> & {
  city: string;
};

const Cover = ({ city, description, position, background }: Props) => {
  const { t } = useTranslation('cities');
  const { isPrinter } = usePrinter();
  return (
    <Styled.Cover>
      <Styled.TitleWrapper>
        <Styled.Title>{t(city)}</Styled.Title>
        <Styled.SubTitle>{description}</Styled.SubTitle>
      </Styled.TitleWrapper>
      <Styled.Map position={position} $print={isPrinter} />
      <Background {...background} />
    </Styled.Cover>
  );
};

export default Cover;
