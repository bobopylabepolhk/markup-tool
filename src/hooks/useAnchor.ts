import React, { useEffect, useState } from 'react';

type UseAnchorArgs = {
  target: HTMLElement | null;
  anchorRef?: React.RefObject<HTMLElement | null>;
  scrollableWrapperRef?: React.RefObject<HTMLDivElement>;
  repositionOnScroll?: boolean;
  viewportOverflow?: {
    enabled: boolean;
    paddingX: number;
    // paddingY: number;
  };
};

/** Place target with position: absolute; within portal at top left corner of anchor. */
export function useAnchor({
  anchorRef,
  target,
  scrollableWrapperRef,
  viewportOverflow,
  repositionOnScroll = false,
}: UseAnchorArgs) {
  const [overflows, setOverflows] = useState<'left' | 'right' | null>(null);
  useEffect(() => {
    if (!anchorRef?.current || !target) {
      return;
    }

    const setElementPosition = () => {
      if (anchorRef?.current) {
        const anchorRect = anchorRef.current.getBoundingClientRect();
        const absTop = window.scrollY + anchorRect.top;
        let absLeft = window.scrollX + anchorRect.left;

        if (viewportOverflow) {
          const overflowsRight =
            window.innerWidth < target.clientWidth + absLeft + viewportOverflow.paddingX;
          const overflowsLeft = viewportOverflow.paddingX > target.clientWidth + absLeft;
          setOverflows(overflowsLeft ? 'left' : 'right');

          if (overflowsRight) {
            absLeft -= target.clientWidth;
          } else if (overflowsLeft) {
            absLeft += target.clientWidth;
          } else {
            setOverflows(null);
          }
        }

        target.style.top = `${absTop}px`;
        target.style.left = `${absLeft}px`;
      }
    };

    setElementPosition();
    window.addEventListener('resize', setElementPosition);
    const scrollableWrapper = scrollableWrapperRef?.current ?? document;

    if (repositionOnScroll) {
      scrollableWrapper.addEventListener('scroll', setElementPosition);
    }

    return () => {
      window.removeEventListener('resize', setElementPosition);

      if (repositionOnScroll) {
        scrollableWrapper.removeEventListener('scroll', setElementPosition);
      }
    };
  }, [target, anchorRef, scrollableWrapperRef, repositionOnScroll, viewportOverflow]);

  return { overflows };
}
