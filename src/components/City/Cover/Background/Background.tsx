import { usePrinter } from 'react-pdf-printer';

import { BackgroundImage } from 'api/model';

import * as Styled from './Background.styles';

type Props = BackgroundImage;

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
