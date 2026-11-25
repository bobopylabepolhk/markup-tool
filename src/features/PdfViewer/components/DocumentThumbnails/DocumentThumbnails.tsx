import cn from 'classnames';
import React, { FC, HTMLAttributes } from 'react';
import { Thumbnail, ThumbnailProps } from 'react-pdf';
import { OnItemClickArgs } from 'react-pdf/dist/cjs/shared/types';

import Loading from '#/ui/Loading';
import { scrollToElement } from '#/utils/scrollToElement';

import { usePdfViewerContext } from '../../context/usePdfViewerContext';
import cls from './style.module.css';

type Props = ThumbnailProps & HTMLAttributes<HTMLDivElement>;

export const DocumentThumbnails: FC<Props> = ({ className, ...props }) => {
  const { currentFileProxy, currentPage, pageRefs } = usePdfViewerContext();
  const onItemClick = ({ pageNumber }: OnItemClickArgs) => {
    scrollToElement(pageRefs?.current?.[pageNumber]);
  };

  if (currentFileProxy) {
    return (
      <div className={cn(cls.container, className)} {...props}>
        {Array.from({ length: currentFileProxy.numPages }, (_, i) => (
          <div key={i} className={cn(cls.item, i + 1 === currentPage ? cls.current : undefined)}>
            <Thumbnail
              className={cls.thumbnail}
              pageNumber={i + 1}
              pdf={currentFileProxy}
              loading={<Loading />}
              onItemClick={onItemClick}
            />
            <div className={cls.pageNum}>{i + 1}</div>
          </div>
        ))}
      </div>
    );
  }
  return null;
};
