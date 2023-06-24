import { useTranslation } from 'react-i18next';

import * as Styled from './Navbar.styles';

const Navbar = () => {
  const { t } = useTranslation('layout');
  return (
    <Styled.Navbar>
      <Styled.NavLink to="/" checkCurrent>
        {t('navbar.home')}
      </Styled.NavLink>
      <Styled.NavLink to="/print" checkCurrent>
        {t('navbar.print')}
      </Styled.NavLink>
    </Styled.Navbar>
  );
};

export default Navbar;
