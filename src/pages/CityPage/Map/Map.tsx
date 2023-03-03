import * as Styled from './Map.styles';

type Props = {
  position: { x: number; y: number };
  className?: string;
};

const MapImage = ({ position, className }: Props) => {
  return (
    <Styled.MapWrapper className={className}>
      <Styled.Point {...position} />
      <Styled.MapImage width="250" src={`/src/assets/icon/poland.svg`} />
    </Styled.MapWrapper>
  );
};

export default MapImage;
