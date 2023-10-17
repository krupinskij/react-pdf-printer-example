import { usePrinter } from 'react-pdf-printer';

import { Attraction } from 'api/model';
import { ImageList } from 'components/Image';

import * as Styled from './Attractions.styles';

type Props = {
  attractions: Attraction[];
};

const Tourism = ({ attractions }: Props) => {
  const { isPrinter } = usePrinter();
  return (
    <Styled.Wrapper data-printer-divisible $print={isPrinter}>
      {attractions.map(({ name, description, photos }) => (
        <Styled.Item key={name}>
          <Styled.Title $print={isPrinter}>{name}</Styled.Title>
          <Styled.Description $print={isPrinter}>{description}</Styled.Description>
          <ImageList carousel={!isPrinter} images={photos} />
        </Styled.Item>
      ))}
    </Styled.Wrapper>
  );
};

export default Tourism;
