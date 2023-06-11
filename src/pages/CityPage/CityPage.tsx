import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import API, { QUERY } from 'api';
import { Cover, Info, Attractions } from 'components/City';
import { Error, Spinner } from 'components/Info';

import * as Styled from './CityPage.styles';

const CityPage = () => {
  const { city = '' } = useParams();

  const { data, isLoading, isError, refetch } = useQuery([QUERY.CITY, city], () =>
    API.getCity(city)
  );

  if (isLoading) return <Spinner text />;
  if (isError) return <Error onClick={refetch} />;
  return (
    <Styled.City>
      <Cover
        city={city}
        description={data.description}
        position={data.position}
        background={data.background}
      />
      <Info city={city} voivodeship={data.voivodeship} onlyCoa={data.onlyCoa} />
      <Attractions attractions={data.attractions} />
    </Styled.City>
  );
};

export default CityPage;
