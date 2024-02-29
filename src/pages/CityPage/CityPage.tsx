import { useParams } from 'react-router-dom';

import { DC, useGetCityDetails } from 'api';
import { Cover, Info, Attractions } from 'components/City';
import { Error, Spinner } from 'components/Info';

import * as Styled from './CityPage.styles';

const CityPage = () => {
  const { city } = useParams<{ city: DC.ID }>();
  const { data, isLoading, isPending, isError, refetch } = useGetCityDetails(city as DC.ID);

  if (isLoading || isPending) return <Spinner text />;
  if (isError || !city) return <Error onClick={refetch} />;
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
