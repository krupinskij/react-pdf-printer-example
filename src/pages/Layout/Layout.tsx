import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

import LanguageSwitch from './LanguageSwitch';
import * as Styled from './Layout.styles';
import Menu from './Menu';
import Navbar from './Navbar';

const Layout = () => {
  const { t } = useTranslation('general');
  return (
    <>
      <Styled.Header>
        <LanguageSwitch />
        <Styled.Title>{t('title')}</Styled.Title>
        <Navbar />
      </Styled.Header>
      <Styled.SideBar>
        <Menu />
      </Styled.SideBar>
      <Styled.Main>
        <Outlet />
      </Styled.Main>
      <Styled.Footer>React PDF Printer | {t('title')}</Styled.Footer>
    </>
  );
};

export default Layout;
