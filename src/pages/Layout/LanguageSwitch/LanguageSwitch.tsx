import enFlag from 'assets/country/flags/en.png';
import plFlag from 'assets/country/flags/pl.png';
import i18n from 'translations/i18n';

import * as Styled from './LanguageSwitch.styles';

const LanguageSwitch = () => {
  return (
    <Styled.LangWrapper>
      <Styled.LanguageButton
        onClick={() => i18n.changeLanguage('en')}
        selected={i18n.language === 'en'}
      >
        <Styled.LanguageImage src={enFlag} alt="british-american flag" />
      </Styled.LanguageButton>
      <Styled.LanguageButton
        onClick={() => i18n.changeLanguage('pl')}
        selected={i18n.language === 'pl'}
      >
        <Styled.LanguageImage src={plFlag} alt="polish flag" />
      </Styled.LanguageButton>
    </Styled.LangWrapper>
  );
};

export default LanguageSwitch;
