import { Image } from 'api/model';

import * as Styled from './Background.styles';

type Props = Image;

const Background = ({ caption, source, src }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Shadow />
      <Styled.Image caption={{ text: caption, position: 'top-right' }} source={source} src={src} />
    </Styled.Wrapper>
  );
};

export default Background;
