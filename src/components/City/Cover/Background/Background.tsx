import { usePrinter } from 'react-pdf-printer';

import { Image } from 'api/model';

import * as Styled from './Background.styles';

type Props = Image;

const Background = ({ caption, source, src }: Props) => {
  const { isPrinter } = usePrinter();
  return (
    <Styled.Wrapper $print={isPrinter}>
      <Styled.Shadow />
      <Styled.Image caption={{ text: caption, position: 'top-right' }} source={source} src={src} />
    </Styled.Wrapper>
  );
};

export default Background;
