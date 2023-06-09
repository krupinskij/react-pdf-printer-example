import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { StaticDocument, DocumentRef } from 'react-pdf-printer';

import { cities } from 'api';
import { Footer, Header } from 'components/Document';
import { City } from 'components/PDF';

import Screen from './Screen';

const ReportPage = () => {
  const { t } = useTranslation('pdf');

  const documentRef = useRef<DocumentRef>(null);

  return (
    <StaticDocument
      ref={documentRef}
      header={<Header />}
      footer={<Footer />}
      screen={(isLoading) => (
        <Screen isLoading={isLoading} onRenderClick={() => documentRef.current?.render()} />
      )}
      configuration={{
        pagination: {
          format: t('pagination') as string,
        },
      }}
      // renderOnInit={false}
    >
      {cities.map((city) => (
        <City key={city} city={city} />
      ))}
    </StaticDocument>
  );
};

export default ReportPage;
