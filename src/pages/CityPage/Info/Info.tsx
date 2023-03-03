import { useTranslation } from 'react-i18next';

import * as Styled from './Info.styles';
import Symbols from './Symbols';

type Props = {
  city: string;
  voivodeship: string;
  onlyCoa?: boolean;
};

const Info = ({ city, voivodeship, onlyCoa }: Props) => {
  return (
    <Styled.Wrapper>
      <Symbols type="city" code={city} onlyCoa={onlyCoa} />
      <Symbols type="voivodeship" code={voivodeship} />
    </Styled.Wrapper>
  );
};

export default Info;
