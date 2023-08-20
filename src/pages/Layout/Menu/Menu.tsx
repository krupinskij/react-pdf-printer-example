import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import API, { QUERY } from 'api';

import * as Styled from './Menu.styles';

const Menu = () => {
  const { t } = useTranslation('cities');

  const { data = [] } = useQuery([QUERY.CITIES_LIST], API.getCitiesList, {
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
