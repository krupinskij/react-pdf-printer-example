import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Page, Pages, usePrinter } from 'react-pdf-printer';

import API, { QUERY } from 'api';
import { Cover, Info, Tourism } from 'components/City';
import { Error } from 'components/Info';

type Props = {
  city: string;
};

const City = ({ city }: Props) => {
  const { subscribe, run } = usePrinter(city);

  const { data, isLoading, isError } = useQuery([QUERY.CITY, city], () => API.getCity(city), {
    onSettled: () => {
      run();
    },
  });

  useEffect(() => {
    subscribe();
  }, []);

  if (isLoading) return null;
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
        <Tourism tourismList={data.tourism} />
      </Pages>
    </>
  );
};

export default City;
