import { useTranslation } from 'react-i18next';

import * as Styled from './styles';

type Props = {
  text?: boolean;
  className?: string;
};

const Spinner = ({ text, className }: Props) => {
  const { t } = useTranslation('general');
  return (
    <Styled.Wrapper className={className}>
      <Styled.Spinner
        src={`${import.meta.env.BASE_URL}/assets/icon/spinner.svg`}
        alt="spinner"
        aria-hidden="true"
      />
      {text && <Styled.Text>{t('loading')}...</Styled.Text>}
    </Styled.Wrapper>
  );
};

export default Spinner;
