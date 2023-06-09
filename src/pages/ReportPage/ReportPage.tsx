import { useTranslation } from 'react-i18next';
import { Page, StaticDocument } from 'react-pdf-printer';

import { cities } from 'api';
import { Footer, Header } from 'components/Document';

import City from './City';
import Screen from './Screen';

const ReportPage = () => {
  const { t } = useTranslation('pdf');
  const pagination = t('pagination');

  return (
    <StaticDocument
      header={<Header />}
      footer={<Footer />}
      screen={<Screen />}
      configuration={{
        pagination: {
          format: pagination,
        },
      }}
      // onRender={() => {}}
    >
      {cities.map((city) => (
        <City key={city} city={city} />
      ))}
    </StaticDocument>
  );
};

export default ReportPage;
