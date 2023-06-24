import { useQuery } from '@tanstack/react-query';
import { MouseEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DocumentRef, PortalDocument, usePrinter } from 'react-pdf-printer';

import API, { QUERY } from 'api';
import Button from 'components/Button';
import { Footer, Header } from 'components/Document';
import { City as PDFCity } from 'components/PDF';
import { Column } from 'components/Table/Table';

import * as Styled from './HomePage.styles';
import { City, Voivodeship } from './TableItem';

const HomePage = () => {
  const { t } = useTranslation(['home', 'pdf']);
  const { isRendering } = usePrinter();
  const { data, isLoading, isFetching, isError, refetch } = useQuery(
    [QUERY.CITIES_LIST],
    API.getCitiesList,
    {
      refetchOnWindowFocus: false,
    }
  );

  const [selectedCity, setSelectedCity] = useState<string>();
  const documentRef = useRef<DocumentRef>(null);

  const handlePrint = (event: MouseEvent<HTMLButtonElement>) => {
    const { city } = event.currentTarget.dataset;
    setSelectedCity(city);
    documentRef.current?.render();
  };

  if (isLoading || (isError && isFetching)) return <Styled.Spinner text />;
  if (isError) return <Styled.Error onClick={refetch} />;

  const columns: Column[] = [
    {
      dataIndex: 'name',
      title: <Styled.Column>{t('column.name')}</Styled.Column>,
      style: {
        minWidth: '200px',
      },
    },
    {
      dataIndex: 'voivodeship',
      title: <Styled.Column>{t('column.voivodeship')}</Styled.Column>,
      style: {
        minWidth: '250px',
      },
    },
    {
      dataIndex: 'population',
      title: <Styled.Column textAlign="right">{t('column.population')}</Styled.Column>,
      align: 'right',
      style: {
        minWidth: '150px',
      },
    },
    {
      dataIndex: 'area',
      title: <Styled.Column textAlign="right">{t('column.area')}</Styled.Column>,
      align: 'right',
      style: {
        minWidth: '150px',
      },
    },
    {
      dataIndex: 'print',
      title: '',
      align: 'center',
      style: {
        minWidth: '150px',
      },
    },
  ];

  const dataSource = data.map((row) => ({
    ...row,
    name: <City code={row.id} />,
    voivodeship: <Voivodeship code={row.voivodeship} />,
    population: (
      <Styled.Cell textAlign="right">
        {t('number', { val: row.population, ns: 'general' })}
      </Styled.Cell>
    ),
    area: (
      <Styled.Cell textAlign="right">{t('float', { val: row.area, ns: 'general' })}</Styled.Cell>
    ),
    print: (
      <Button
        loading={isRendering && selectedCity === row.id}
        disabled={isRendering}
        data-city={row.id}
        size="sm"
        onClick={handlePrint}
      >
        {t('print')}
      </Button>
    ),
  }));

  return (
    <>
      <Styled.Table columns={columns} dataSource={dataSource} isLoading={isFetching} />
      <PortalDocument
        ref={documentRef}
        header={<Header />}
        footer={<Footer />}
        configuration={{
          pagination: {
            format: t('pagination', { ns: 'pdf' }) as string,
          },
        }}
      >
        {selectedCity && <PDFCity city={selectedCity} />}
      </PortalDocument>
    </>
  );
};

export default HomePage;
