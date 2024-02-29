import { useEffect } from 'react';
import { Page, Pages, usePrinter } from 'react-pdf-printer';

import { DC, useGetCityDetails } from 'api';
import { Attractions, Cover, Info } from 'components/City';
import { Error } from 'components/Info';

type Props = {
  city: DC.ID;
};

const City = ({ city }: Props) => {
  const { subscribe, run } = usePrinter(city);

  const { data, isLoading, isPending, isError } = useGetCityDetails(city, {
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    subscribe();
  }, []);

  useEffect(() => {
    if (!!data) {
      run();
    }
  }, [data]);

  if (isPending || isLoading) return null;
  if (isError)
    return (
      <Page>
        <Error />
      </Page>
    );

  return (
    <>
      <Page>
        <Cover
          city={city}
          description={data.description}
          position={data.position}
          background={data.background}
        />
        <Info city={city} voivodeship={data.voivodeship} onlyCoa={data.onlyCoa} />
      </Page>
      <Pages>
        <Attractions attractions={data.attractions} />
      </Pages>
    </>
  );
};

export default City;
