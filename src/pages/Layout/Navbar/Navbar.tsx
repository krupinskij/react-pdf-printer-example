import { useTranslation } from 'react-i18next';

import * as Styled from './Navbar.styles';

const Navbar = () => {
  const { t } = useTranslation('layout');
  return (
    <Styled.Navbar>
      <Styled.NavLink to="/" checkCurrent>
        {t('navbar.home')}
      </Styled.NavLink>
      <Styled.NavLink to="/report" checkCurrent>
        {t('navbar.report')}
      </Styled.NavLink>
    </Styled.Navbar>
  );
};

export default Navbar;
