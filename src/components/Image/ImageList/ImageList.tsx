import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

import * as Styled from './ImageList.styles';

type Props = {
  carousel?: boolean;
  children: React.ReactNode;
};

const ImageList = ({ carousel, children }: Props) => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [isLeftScrollDisabled, setIsLeftScrollDisabled] = useState(true);
  const [isRightScrollDisabled, setIsRightScrollDisabled] = useState(false);

  const setDisabled = (elem: HTMLDivElement) => {
    setIsLeftScrollDisabled(elem.scrollLeft === 0);
    setIsRightScrollDisabled(Math.abs(elem.scrollWidth - elem.clientWidth - elem.scrollLeft) < 5);
  };

  const handleScrollLeft = () => {
    const elem = listRef.current;
    if (!elem) return;

    elem.scrollBy(-400, 0);
    setDisabled(elem);
  };

  const handleScrollRight = () => {
    const elem = listRef.current;
    if (!elem) return;

    elem.scrollBy(400, 0);
    setDisabled(elem);
  };

  const handleScroll = (elem: HTMLDivElement) => {
    setDisabled(elem);
  };

  return (
    <Styled.Wrapper>
      {carousel && (
        <Styled.LeftButton disabled={isLeftScrollDisabled} onClick={handleScrollLeft}>
          <Styled.Icon src={`/src/assets/icon/arrow.svg`} alt="" />
        </Styled.LeftButton>
      )}
      <Styled.List
        ref={(elem) => (listRef.current = elem)}
        onScroll={(event) => handleScroll(event.currentTarget)}
        $wrap={!carousel}
      >
        {children}
      </Styled.List>
      {carousel && (
        <Styled.RightButton disabled={isRightScrollDisabled} onClick={handleScrollRight}>
          <Styled.Icon src={`/src/assets/icon/arrow.svg`} $flip alt="" />
        </Styled.RightButton>
      )}
    </Styled.Wrapper>
  );
};

export default ImageList;
