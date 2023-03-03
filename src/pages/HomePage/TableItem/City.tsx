import { useTranslation } from 'react-i18next';

import * as Styled from './styles';

type Props = {
  code: string;
};

const City = ({ code }: Props) => {
  const { t } = useTranslation('cities');
  return (
    <Styled.CityWrapper>
      <Styled.ImgWrapper>
        <Styled.CoaImg src={`/src/assets/city/coa/${code}.svg`} />
      </Styled.ImgWrapper>
      <Styled.Link to={`/city/${code}`}>
        <Styled.Name bold={true}>{t(code)}</Styled.Name>
      </Styled.Link>
    </Styled.CityWrapper>
  );
};

export default City;
