import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { Navigate, useParams } from 'react-router-dom';

import API, { QUERY } from 'api';
import { Error, Spinner } from 'components/Info';

import Background from './Background';
import * as Styled from './CityPage.styles';
import Info from './Info';
import Tourism from './Tourism';

const CityPage = () => {
  const { city = '' } = useParams();

  const { t } = useTranslation('cities');

  const { data, isLoading, isError, refetch } = useQuery([QUERY.CITY, city], () =>
    API.getCity(city)
  );

  if (isLoading) return <Spinner text />;
  if (isError) return <Error onClick={refetch} />;
  return (
    <Styled.City>
      <Styled.Cover>
        <Styled.TitleWrapper>
          <Styled.Title>{t(city)}</Styled.Title>
          <Styled.SubTitle>{data.description}</Styled.SubTitle>
        </Styled.TitleWrapper>
        <Styled.Map position={data.position} />
        <Background src={data.background.src} />
      </Styled.Cover>
      <Info city={city} voivodeship={data.voivodeship} onlyCoa={data.onlyCoa} />
      <Tourism tourismList={data.tourism} />
    </Styled.City>
  );
};

export default CityPage;
