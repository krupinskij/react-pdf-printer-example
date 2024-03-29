import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { PrinterProvider } from 'react-pdf-printer';
import { ThemeProvider } from 'styled-components';

import { theme } from 'styles/theme';
import i18n from 'translations/i18n';

type Props = {
  children: React.ReactNode;
};

export const queryClient = new QueryClient();

const AppProviders = ({ children }: Props) => (
  <PrinterProvider configuration={{ useAsync: true }}>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </ThemeProvider>
    </I18nextProvider>
  </PrinterProvider>
);

export default AppProviders;
