import { useTranslation } from 'react-i18next';

import * as Styled from './Header.styles';

const Header = () => {
  const { t } = useTranslation('general');
  return <Styled.Wrapper>{t('title')}</Styled.Wrapper>;
};

export default Header;
