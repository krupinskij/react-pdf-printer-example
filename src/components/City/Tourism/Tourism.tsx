import { usePrinter } from 'react-pdf-printer';

import { Tourism as TourismList } from 'api/model';
import { ImageList } from 'components/Image';

import * as Styled from './Tourism.styles';

type Props = {
  tourismList: TourismList[];
};

const Tourism = ({ tourismList }: Props) => {
  const { isPrinter } = usePrinter();
  return (
    <Styled.Wrapper data-printer-divisible $print={isPrinter}>
      {tourismList.map(({ name, description, photos }, i) => (
        <Styled.Item key={name}>
          <Styled.Title $print={isPrinter}>{name}</Styled.Title>
          <Styled.Description $print={isPrinter}>{description}</Styled.Description>
          <ImageList carousel={!isPrinter}>
            {photos.map(({ caption, source, src }) => (
              <Styled.Image
                key={src}
                src={src}
                caption={{ text: caption, position: 'bottom-left' }}
                source={source}
                preview
                $print={isPrinter}
              />
            ))}
          </ImageList>
        </Styled.Item>
      ))}
    </Styled.Wrapper>
  );
};

export default Tourism;
