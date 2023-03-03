import { useTranslation } from 'react-i18next';

import spinner from 'assets/icon/spinner.svg';

import * as Styled from './styles';

type Props = {
  text?: boolean;
  className?: string;
};

const Spinner = ({ text, className }: Props) => {
  const { t } = useTranslation('general');
  return (
    <Styled.Wrapper className={className}>
      <Styled.Spinner src={spinner} />
      {text && <Styled.Text>{t('loading')}</Styled.Text>}
    </Styled.Wrapper>
  );
};

export default Spinner;
