import { useTranslation } from 'react-i18next';

import * as Styled from './styles';

type Props = {
  code: string;
};

const City = ({ code }: Props) => {
  const { t } = useTranslation(['cities', 'city']);
  return (
    <Styled.CityWrapper>
      <Styled.ImgWrapper>
        <Styled.CoaImg
          src={`${import.meta.env.BASE_URL}/assets/coa/city/${code}.svg`}
          alt={t('flag', { ns: 'city', owner: code, context: 'city' }) as string}
        />
      </Styled.ImgWrapper>
      <Styled.Link to={`/city/${code}`}>
        <Styled.Name bold={true}>{t(code, { ns: 'cities' })}</Styled.Name>
      </Styled.Link>
    </Styled.CityWrapper>
  );
};

export default City;
