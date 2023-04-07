import { LinkProps, useMatch, useResolvedPath } from 'react-router-dom';

import * as Styled from './Link.styles';

type Props = LinkProps & {
  checkCurrent?: boolean;
};

const Link = ({ checkCurrent, ...props }: Props) => {
  const resolved = useResolvedPath(props.to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return <Styled.Link aria-current={match && checkCurrent ? 'page' : undefined} {...props} />;
};

export default Link;
