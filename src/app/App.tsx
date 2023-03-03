import { Suspense } from 'react';

import AppProviders from './AppProviders';
import AppRoutes from './AppRoutes';

const App = () => (
  <AppProviders>
    <Suspense>
      <AppRoutes />
    </Suspense>
  </AppProviders>
);

export default App;
