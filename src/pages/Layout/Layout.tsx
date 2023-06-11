import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import { Spinner } from 'components/Info';

import * as Styled from './Layout.styles';
import Menu from './Menu';
import Navbar from './Navbar';

const Layout = () => {
  const { t } = useTranslation('general');
  return (
    <>
      <Styled.Header>
        <Styled.SkipButton />
        <Styled.LanguageSwitch />
        <Styled.Title>
          <img src={`/src/assets/logo/logo_mid.png`} width="50" />
          {t('title')}
          <img src={`/src/assets/logo/logo_mid.png`} width="50" />
        </Styled.Title>
        <Navbar />
      </Styled.Header>
      <Styled.SideBar>
        <Menu />
      </Styled.SideBar>
      <Styled.Main id="main">
        <Suspense fallback={<Spinner text />}>
          <Outlet />
        </Suspense>
      </Styled.Main>
      <Styled.Footer>
        <span translate="no">React PDF Printer </span>&nbsp;| {t('title')}
      </Styled.Footer>
    </>
  );
};

export default Layout;
