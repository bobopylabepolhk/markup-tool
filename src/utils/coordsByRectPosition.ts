import { BboxCoords } from '#/features/PdfViewer/models/highlight';

export function coordsByRectPosition(data: {
  x: number;
  y: number;
  width: number;
  height: number;
}): BboxCoords {
  const { height, width, x, y } = data;
  return [
    [x, y],
    [x + width, y + height],
  ];
}
