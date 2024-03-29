import { useTranslation } from 'react-i18next';

import { useGetCityList } from 'api';

import * as Styled from './Menu.styles';

const Menu = () => {
  const { t } = useTranslation('cities');

  const { data = [] } = useGetCityList({
    refetchOnWindowFocus: false,
  });

  return (
    <Styled.Menu>
      {data.map(({ id: city }) => (
        <Styled.MenuItem key={city}>
          <Styled.MenuLink to={`/city/${city}`} checkCurrent>
            <Styled.MenuImg src={`${import.meta.env.BASE_URL}/assets/coa/city/${city}.svg`} />
            {t(city)}
          </Styled.MenuLink>
        </Styled.MenuItem>
      ))}
    </Styled.Menu>
  );
};

export default Menu;
