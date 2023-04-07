import { useTranslation } from 'react-i18next';

import * as Styled from './styles';

type Props = {
  code: string;
};

const Voivodeship = ({ code }: Props) => {
  const { t } = useTranslation(['voivodeships', 'city']);
  return (
    <Styled.VoivodeshipWrapper>
      <Styled.FlagImg
        src={`/src/assets/voivodeship/flag/${code}.svg`}
        alt={t('flag', { ns: 'city', owner: code, context: 'voivodeship' }) as string}
      />
      <Styled.Name>{t(code, { ns: 'voivodeships' })}</Styled.Name>
    </Styled.VoivodeshipWrapper>
  );
};

export default Voivodeship;
