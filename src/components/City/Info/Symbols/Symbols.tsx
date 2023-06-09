import { useTranslation } from 'react-i18next';

import * as Styled from './Symbols.styles';

type Props = {
  type: 'city' | 'voivodeship';
  code: string;
  onlyCoa?: boolean;
};

const Symbols = ({ type, code, onlyCoa }: Props) => {
  const { t } = useTranslation('city');

  return (
    <Styled.Symbols>
      <Styled.SymbolsList>
        <Styled.CoaImg
          src={`/src/assets/${type}/coa/${code}.svg`}
          alt={t('coa', { owner: code, context: type }) as string}
        />
        {!onlyCoa && (
          <Styled.FlagImg
            src={`/src/assets/${type}/flag/${code}.svg`}
            alt={t('flag', { owner: code, context: type }) as string}
          />
        )}
      </Styled.SymbolsList>
      <Styled.Caption aria-hidden="true">
        {t(onlyCoa ? 'coa' : 'coa-flag', {
          owner: code,
          context: type,
        })}
      </Styled.Caption>
    </Styled.Symbols>
  );
};

export default Symbols;
