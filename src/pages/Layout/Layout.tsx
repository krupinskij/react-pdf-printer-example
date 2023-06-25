import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import { Spinner } from 'components/Info';

import * as Styled from './Layout.styles';
import Menu from './Menu';
import Navbar from './Navbar';

const Layout = () => {
  const { t } = useTranslation('layout');
  return (
    <>
      <Styled.Header>
        <Styled.SkipButton />
        <Styled.LanguageSwitch />
        <Styled.Title>
          <img src={`${import.meta.env.BASE_URL}/assets/logo/logo_mid.png`} width="50" />
          {t('title', { ns: 'general' })}
          <img src={`${import.meta.env.BASE_URL}/assets/logo/logo_mid.png`} width="50" />
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
        <span>
          <Styled.Link translate="no" href="https://github.com/krupinskij/react-pdf-printer">
            React PDF Printer
          </Styled.Link>
          &nbsp;| {t('title', { ns: 'general' })}
        </span>
        <Styled.Link href="https://www.flaticon.com/free-icons/poland">{t('icons')}</Styled.Link>
      </Styled.Footer>
    </>
  );
};

export default Layout;
