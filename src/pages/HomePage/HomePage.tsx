import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import API, { QUERY } from 'api';
import Button from 'components/Button';
import { Column } from 'components/Table/Table';

import * as Styled from './HomePage.styles';
import { City, Voivodeship } from './TableItem';

const HomePage = () => {
  const { t } = useTranslation('home');
  const { data, isLoading, isFetching, isError, refetch } = useQuery(
    [QUERY.CITIES_LIST],
    API.getCitiesList,
    {
      refetchOnWindowFocus: false,
    }
  );

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
      style: {
        textAlign: 'right',
        minWidth: '150px',
      },
    },
    {
      dataIndex: 'area',
      title: <Styled.Column textAlign="right">{t('column.area')}</Styled.Column>,
      style: {
        textAlign: 'right',
        minWidth: '150px',
      },
    },
    {
      dataIndex: 'print',
      title: '',
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
    print: <Button size="sm">{t('print')}</Button>,
  }));

  return <Styled.Table columns={columns} dataSource={dataSource} isLoading={isFetching} />;
};

export default HomePage;
