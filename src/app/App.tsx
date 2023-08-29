import { Suspense, useEffect } from 'react';

import i18n from 'translations/i18n';

import AppProviders from './AppProviders';
import AppRoutes from './AppRoutes';

const detectFirefox = () => {
  if (navigator.userAgent.includes('Firefox')) {
    alert(i18n.t('firefox', { ns: 'general' }));
  }
};

const App = () => {
  useEffect(() => {
    i18n.on('initialized', detectFirefox);

    return () => {
      i18n.off('initialized', detectFirefox);
    };
  }, []);

  return (
    <AppProviders>
      <Suspense>
        <AppRoutes />
      </Suspense>
    </AppProviders>
  );
};

export default App;
