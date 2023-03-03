import * as Styled from './Background.styles';

type Props = {
  city: string;
};

const Background = ({ city }: Props) => {
  return (
    <Styled.Wrapper>
      <Styled.Shadow />
      <Styled.Image width="1000" src={`/src/assets/views/${city}/title.jpg`} />
    </Styled.Wrapper>
  );
};

export default Background;
