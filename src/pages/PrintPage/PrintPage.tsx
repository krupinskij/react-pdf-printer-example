import { useQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Document, DocumentRef } from 'react-pdf-printer';

import API, { QUERY, cities } from 'api';
import { Footer, Header } from 'components/Document';
import { City } from 'components/PDF';

import Screen from './Screen';

const ReportPage = () => {
  const { t } = useTranslation('pdf');

  const documentRef = useRef<DocumentRef>(null);
  const { data = [] } = useQuery([QUERY.CITIES_LIST], API.getCitiesList, {
    refetchOnWindowFocus: false,
  });

  return (
    <Document
      ref={documentRef}
      header={<Header />}
      footer={<Footer />}
      screen={({ isRendering }) => (
        <Screen isLoading={isRendering} onRenderClick={() => documentRef.current?.render()} />
      )}
      configuration={{
        pagination: {
          format: t('pagination') as string,
        },
      }}
      title={t('title') as string}
      renderOnInit={false}
    >
      {data.map(({ id: city }) => (
        <City key={city} city={city} />
      ))}
    </Document>
  );
};

export default ReportPage;
