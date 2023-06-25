import { useTranslation } from 'react-i18next';

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
        <GlobalStyled.VisuallyHidden>{t('lang.en.choose')}</GlobalStyled.VisuallyHidden>
        <Styled.LanguageImage
          src={`${import.meta.env.BASE_URL}/assets/flag/country/en.png`}
          alt={t('lang.en.lang') as string}
          aria-hidden="true"
        />
      </Styled.LanguageButton>
      <Styled.LanguageButton
        onClick={() => i18n.changeLanguage('pl')}
        selected={i18n.language === 'pl'}
        aria-selected={i18n.language === 'pl'}
      >
        <GlobalStyled.VisuallyHidden>{t('lang.en.choose')}</GlobalStyled.VisuallyHidden>
        <Styled.LanguageImage
          src={`${import.meta.env.BASE_URL}/assets/flag/country/pl.png`}
          alt={t('lang.pl.lang') as string}
          aria-hidden="true"
        />
      </Styled.LanguageButton>
    </Styled.LangWrapper>
  );
};

export default LanguageSwitch;
