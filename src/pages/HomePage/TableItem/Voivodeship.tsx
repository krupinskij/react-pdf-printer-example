import { useTranslation } from 'react-i18next';

import * as Styled from './styles';

type Props = {
  code: string;
};

const Voivodeship = ({ code }: Props) => {
  const { t } = useTranslation('voivodeships');
  return (
    <Styled.VoivodeshipWrapper>
      <Styled.FlagImg src={`/src/assets/voivodeship/flag/${code}.svg`} />
      <Styled.Name>{t(code)}</Styled.Name>
    </Styled.VoivodeshipWrapper>
  );
};

export default Voivodeship;
