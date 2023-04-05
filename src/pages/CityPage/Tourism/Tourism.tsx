import { Tourism as TourismList } from 'api/model';
import { ImageList } from 'components/Image';

import * as Styled from './Tourism.styles';

type Props = {
  tourismList: TourismList[];
};

const Tourism = ({ tourismList }: Props) => {
  return (
    <Styled.Wrapper>
      {tourismList.map(({ name, description, photos }, i) => (
        <Styled.Item key={name}>
          <Styled.Title>{name}</Styled.Title>
          <Styled.Description>{description}</Styled.Description>
          <ImageList carousel>
            {photos.map(({ caption, source, src }) => (
              <Styled.Image
                key={src}
                src={src}
                caption={{ text: caption, position: 'bottom-left' }}
                source={source}
                preview
              />
            ))}
          </ImageList>
        </Styled.Item>
      ))}
    </Styled.Wrapper>
  );
};

export default Tourism;
