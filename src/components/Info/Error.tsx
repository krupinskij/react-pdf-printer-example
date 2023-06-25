import { useTranslation } from 'react-i18next';

import * as Styled from './styles';

type Props = {
  className?: string;
  onClick?: () => void;
};

const Error = ({ onClick, className }: Props) => {
  const { t } = useTranslation('general');
  return (
    <Styled.Wrapper className={className}>
      <Styled.Icon
        src={`${import.meta.env.BASE_URL}/assets/icon/error.svg`}
        alt="error"
        aria-hidden="true"
      />
      <Styled.Text>{t('error')}</Styled.Text>
      <Styled.Button onClick={() => onClick?.()}>{t('refresh')}</Styled.Button>
    </Styled.Wrapper>
  );
};

export default Error;
