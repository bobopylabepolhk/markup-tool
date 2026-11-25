import type { FC, HTMLAttributes, ReactNode } from 'react';

export type CustomMTLink = (markupToolLink: string) => ReactNode;
export type CustomTitle = (title: string) => ReactNode;
export type CustomCarouselProgress = (currentSlide: number, totalSldies: number) => ReactNode;

type WidgetProps = {
  title: string;
  data: { file: string | ArrayBuffer | Blob | null; page: number; text: string; id: number }[];
  loadingPlaceholder?: ReactNode;
  maxWidth?: number;
  markupToolUrl?: string;
  markupToolLinkComponent?: CustomMTLink;
  titleComponent?: CustomTitle;
  carouselProgressComponent?: CustomCarouselProgress;
} & HTMLAttributes<HTMLDivElement>;

export type WidgetComponent = FC<WidgetProps>;
