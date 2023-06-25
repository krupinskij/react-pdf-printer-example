import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';

import * as Styled from './Screen.styles';

type Props = {
  isLoading: boolean;
  onRenderClick?: () => void;
};

const Screen = ({ isLoading, onRenderClick }: Props) => {
  const navigate = useNavigate();
  const { t } = useTranslation('pdf');
  return (
    <Styled.Wrapper>
      <img src={`${import.meta.env.BASE_URL}/assets/logo/logo_lg.png`} width="350" />
      <Styled.Buttons>
        <Button loading={isLoading} disabled={isLoading} size="lg" onClick={onRenderClick}>
          {t('print')}
        </Button>
        <Button size="lg" variant="outlined" onClick={() => navigate(-1)}>
          {t('goBack')}
        </Button>
      </Styled.Buttons>
    </Styled.Wrapper>
  );
};

export default Screen;
