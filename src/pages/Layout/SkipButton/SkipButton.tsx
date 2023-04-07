import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import * as Styled from './SkipButton.styles';

type Props = {
  className?: string;
};

const SkipButton = ({ className }: Props) => {
  const { t } = useTranslation('general');

  return (
    <Styled.Button tabIndex={0} href="#main" className={className}>
      {t('skip')}
    </Styled.Button>
  );
};

export default SkipButton;
