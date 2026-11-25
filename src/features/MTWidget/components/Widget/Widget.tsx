/* eslint-disable react/prop-types */
import cn from 'classnames';
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useMemo, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { CustomTextRenderer } from 'react-pdf/dist/cjs/shared/types';

import Chevron from '#/assets/chevron.svg?react';
import { highlightTextPattern } from '#/utils/highlightTextPattern';

import cls from './style.module.css';
import type { WidgetComponent } from './type';

const defaultTitle = (title: string) => <div className={cls.title}>{title}</div>;
const defaultMtLink = (markupToolLink: string) => (
  <a className={cls.markupToolLink} href={markupToolLink}>
    Open in markup tool
  </a>
);
const defaultCarouselProgress = (currentSlide: number, totalSldies: number) => (
  <div className={cls.currentSlide}>
    {currentSlide}/{totalSldies}
  </div>
);

export const Widget: WidgetComponent = ({
  title,
  data,
  className,
  loadingPlaceholder,
  markupToolUrl,
  carouselProgressComponent = defaultCarouselProgress,
  markupToolLinkComponent = defaultMtLink,
  titleComponent = defaultTitle,
  maxWidth = 900,
  ...props
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [currentSlide, setCurrentSlide] = useState(1);

  const textRenderer: (text: string) => CustomTextRenderer = useCallback(
    (text: string) => (textItem) => highlightTextPattern(textItem.str, text, cls.mark),
    [],
  );

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide((prev) => prev - 1);
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide((prev) => prev + 1);
    emblaApi.scrollNext();
  }, [emblaApi]);

  const hasPrevSlide = useMemo(() => !!emblaApi?.canScrollPrev(), [emblaApi, currentSlide]);
  const hasNextSlide = useMemo(() => !!emblaApi?.canScrollNext(), [emblaApi, currentSlide]);

  return (
    <div className={cn(cls.container, className)} {...props}>
      <div className={cls.head}>
        {titleComponent(title)}
        {carouselProgressComponent(currentSlide, data.length)}
        <div className={cn(cls.title, cls.widthAdjuster)}>{title}</div>
      </div>
      <div className={cn(cls.carousel, 'embla')} ref={emblaRef}>
        <div className={cn(cls.pdf, 'embla__container')} style={{ maxWidth }}>
          {data.map(({ file, page, text, id }) => (
            <div key={id} className={cn(cls.slide, 'embla__slide')}>
              <Document file={file} loading={loadingPlaceholder}>
                <Page
                  pageNumber={page}
                  customTextRenderer={textRenderer(text)}
                  width={maxWidth}
                  renderAnnotationLayer={false}
                  loading={loadingPlaceholder}
                />
              </Document>
            </div>
          ))}
        </div>
        {hasPrevSlide && (
          <div className={cn(cls.slideArrow, cls.left)} onClick={onPrevButtonClick}>
            <Chevron />
          </div>
        )}
        {hasNextSlide && (
          <div className={cn(cls.slideArrow, cls.right)} onClick={onNextButtonClick}>
            <Chevron />
          </div>
        )}
      </div>
      {markupToolUrl && markupToolLinkComponent(markupToolUrl)}
    </div>
  );
};
