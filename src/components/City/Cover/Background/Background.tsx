import { usePrinter } from 'react-pdf-printer';

import { DC } from 'api';

import * as Styled from './Background.styles';

type Props = DC.BackgroundImage;

const Background = ({ caption, source, src }: Props) => {
  const { isPrinter } = usePrinter();
  return (
    <Styled.Wrapper $print={isPrinter}>
      {!isPrinter && <Styled.Shadow />}
      <Styled.Image
        $print={isPrinter}
        caption={{ text: caption, position: 'top-right' }}
        source={source}
        src={src}
      />
    </Styled.Wrapper>
  );
};

export default Background;
