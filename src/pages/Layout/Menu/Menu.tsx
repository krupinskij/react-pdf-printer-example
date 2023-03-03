import { useTranslation } from 'react-i18next';

import { cities } from 'api';

import * as Styled from './Menu.styles';

const Menu = () => {
  const { t } = useTranslation('cities');
  return (
    <Styled.Menu>
      {cities.map((city) => (
        <Styled.MenuItem key={city}>
          <Styled.MenuLink to={`/city/${city}`}>
            <Styled.MenuImg src={`/src/assets/city/coa/${city}.svg`} />
            {t(city)}
          </Styled.MenuLink>
        </Styled.MenuItem>
      ))}
    </Styled.Menu>
  );
};

export default Menu;
