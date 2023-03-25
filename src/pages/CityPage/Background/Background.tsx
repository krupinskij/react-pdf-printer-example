import * as Styled from './Background.styles';

type Props = {
  src: string;
};

const Background = ({ src }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Shadow />
      <Styled.Image width="1000" src={src} />
    </Styled.Wrapper>
  );
};

export default Background;
