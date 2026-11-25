import cn from 'classnames';
import React, { FC } from 'react';
import { Outline, OutlineProps } from 'react-pdf';

import { scrollToElement } from '#/utils/scrollToElement';

import { usePdfViewerContext } from '../../context/usePdfViewerContext';
import cls from './style.module.css';

export const TableOfContents: FC<OutlineProps> = ({ className, ...props }) => {
  const { currentFileProxy, pageRefs } = usePdfViewerContext();

  if (currentFileProxy) {
    return (
      <Outline
        className={cn(cls.toc, className)}
        pdf={currentFileProxy}
        onItemClick={({ pageNumber }) => {
          scrollToElement(pageRefs?.current?.[pageNumber]);
        }}
        {...props}
      />
    );
  }

  return null;
};
