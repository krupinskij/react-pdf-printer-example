import { Tourism as TourismList } from 'api/model';
import Image from 'components/Image';

import * as Styled from './Tourism.styles';

type Props = {
  tourismList: TourismList[];
};

const Tourism = ({ tourismList }: Props) => {
  return (
    <Styled.Wrapper>
      {tourismList.map(({ name, description, photos }, i) => (
        <Styled.Item key={i}>
          <Styled.Title>{name}</Styled.Title>
          <Styled.Description key={i}>{description}</Styled.Description>
          <Styled.Images>
            {photos.map(({ caption, source, src }) => (
              <Image key={src} src={src} caption={caption} source={source} />
            ))}
          </Styled.Images>
        </Styled.Item>
      ))}
    </Styled.Wrapper>
  );
};

export default Tourism;
