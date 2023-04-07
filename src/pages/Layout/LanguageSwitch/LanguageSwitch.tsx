import { useTranslation } from 'react-i18next';

import enFlag from 'assets/country/flags/en.png';
import plFlag from 'assets/country/flags/pl.png';
import * as GlobalStyled from 'styles/global';
import i18n from 'translations/i18n';

import * as Styled from './LanguageSwitch.styles';

type Props = {
  className?: string;
};

const LanguageSwitch = ({ className }: Props) => {
  const { t } = useTranslation('general');
  return (
    <Styled.LangWrapper className={className}>
      <Styled.LanguageButton
        onClick={() => i18n.changeLanguage('en')}
        selected={i18n.language === 'en'}
        aria-selected={i18n.language === 'en'}
      >
        <GlobalStyled.VisuallyHidden>{t('english.lang.choose')}</GlobalStyled.VisuallyHidden>
        <Styled.LanguageImage src={enFlag} alt={t('br-am.flag') as string} aria-hidden="true" />
      </Styled.LanguageButton>
      <Styled.LanguageButton
        onClick={() => i18n.changeLanguage('pl')}
        selected={i18n.language === 'pl'}
        aria-selected={i18n.language === 'pl'}
      >
        <GlobalStyled.VisuallyHidden>{t('poland.lang.choose')}</GlobalStyled.VisuallyHidden>
        <Styled.LanguageImage src={plFlag} alt={t('poland.flag') as string} aria-hidden="true" />
      </Styled.LanguageButton>
    </Styled.LangWrapper>
  );
};

export default LanguageSwitch;
