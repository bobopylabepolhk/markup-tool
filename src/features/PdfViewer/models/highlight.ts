export type SelectionType = 'selection' | 'rect';

export type HighlightPosition = {
  width: number;
  height: number;
  x: number;
  y: number;
  pageNumber?: number;
};

export type BboxCoords = [[number, number], [number, number]];
export type SelectionHighlightPosition = { pageNumber: number } & HighlightPosition;
export type SelectionCoords = {
  position: SelectionHighlightPosition;
  boxes: HighlightPosition[];
};

export type Highlight<T extends SelectionType> = {
  id: number;
  indicatorId: number;
  docId: number;
  originalZoom: number;
  type: T;
  coords: T extends 'rect' ? BboxCoords : T extends 'selection' ? SelectionCoords : null;
  pageNumber: number;
};

export type PageRectData = {
  pageNumber: number;
  node: HTMLElement;
};
