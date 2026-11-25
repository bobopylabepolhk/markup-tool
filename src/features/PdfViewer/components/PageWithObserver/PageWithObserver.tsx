import cn from 'classnames';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { Page, PageProps } from 'react-pdf';

import HighlightLayer from '../HighlightLayer';
import LoadingPage from '../LoadingPage';
import cls from './style.module.css';

type Props = {
  setPageVisibility: (pageNumber: number, isIntersecting: boolean) => void;
  shouldDisableSelect: boolean;
  disableSelect?: boolean;
} & Omit<PageProps, 'onLoadSuccess'>;

export const PageWithObserver: FC<Props> = ({
  pageNumber,
  setPageVisibility,
  scale,
  disableSelect,
  ...props
}) => {
  const [pageRef, setPageRef] = useState<HTMLCanvasElement | null>(null);
  const onIntersectionChange: IntersectionObserverCallback = useCallback(
    ([entry]) => {
      if (pageNumber) {
        setPageVisibility(pageNumber, entry.isIntersecting);
      }
    },
    [setPageVisibility],
  );

  useEffect(() => {
    if (!pageRef) {
      return;
    }

    const observer = new IntersectionObserver(onIntersectionChange, { threshold: 0.1 });

    observer.observe(pageRef);

    return () => {
      observer.disconnect();
    };
  }, [pageRef, onIntersectionChange]);

  return (
    <div className={cn(cls.pageWithHighlight, disableSelect ? cls.disableSelect : undefined)}>
      {pageNumber && <HighlightLayer pageNumber={pageNumber} pageHeight={pageRef?.clientHeight} />}
      <Page
        canvasRef={setPageRef}
        pageNumber={pageNumber}
        className={cls.page}
        loading={<LoadingPage />}
        scale={scale}
        {...props}
      />
    </div>
  );
};
