import * as Styled from './Image.styles';

type Props = {
  src: string;
  caption: string;
  source?: string;
};

const Image = ({ src, caption, source }: Props) => {
  return (
    <Styled.Figure>
      <Styled.Image src={src} alt={caption} />
      <Styled.Caption>
        {caption} |{' '}
        {source ? <Styled.SourceLink to={source}>Źródło</Styled.SourceLink> : <>Zbiór własny</>}
      </Styled.Caption>
    </Styled.Figure>
  );
};

export default Image;
