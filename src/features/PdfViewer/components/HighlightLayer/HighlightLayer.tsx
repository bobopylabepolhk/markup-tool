import _ from 'lodash';

import cn from 'classnames';
import React, { FC, HTMLAttributes, useCallback, useEffect } from 'react';

import { useIndicatorsContext } from '#/features/Indicators/context/useIndicatorsContext';
import { calculateScaleDelta } from '#/utils/calculateScaleDelta';
import { coordsByRectPosition } from '#/utils/coordsByRectPosition';
import { randInt } from '#/utils/randInt';
import { rectByCoords } from '#/utils/rectByCoords';

import { usePdfViewerContext } from '../../context/usePdfViewerContext';
import {
  BboxCoords,
  HighlightPosition,
  SelectionCoords,
  SelectionHighlightPosition,
} from '../../models/highlight';
import { HighlightDrawingLayer } from '../HighlightDrawingLayer/HighlightDrawingLayer';
import RectangleHighlight from '../RectangleHighlight';
import SelectionHighlight from '../SelectionHighlight';
import cls from './style.module.css';

type Props = {
  pageNumber: number;
  pageHeight?: number;
} & HTMLAttributes<HTMLDivElement>;

const sort = (rects: SelectionHighlightPosition[]) =>
  rects.sort((rect1, rect2) => {
    const top = (rect1.pageNumber || 0) * rect1.y - (rect2.pageNumber || 0) * rect2.y;

    if (top === 0) {
      return rect1.x - rect2.x;
    }

    return top;
  });

const overlaps = (rect1: SelectionHighlightPosition, rect2: SelectionHighlightPosition) =>
  rect1.pageNumber === rect2.pageNumber && rect1.x <= rect2.x && rect2.x <= rect1.x + rect1.width;

const sameLine = (
  rect1: SelectionHighlightPosition,
  rect2: SelectionHighlightPosition,
  yMargin = 5,
) =>
  rect1.pageNumber === rect2.pageNumber &&
  Math.abs(rect1.y - rect2.y) < yMargin &&
  Math.abs(rect1.height - rect2.height) < yMargin;

const inside = (rect1: SelectionHighlightPosition, rect2: SelectionHighlightPosition) =>
  rect1.pageNumber === rect2.pageNumber &&
  rect1.y > rect2.y &&
  rect1.x > rect2.x &&
  rect1.y + rect1.height < rect2.y + rect2.height &&
  rect1.x + rect1.width < rect2.x + rect2.width;

const nextTo = (
  rect1: SelectionHighlightPosition,
  rect2: SelectionHighlightPosition,
  xMargin = 10,
) => {
  const rect1Right = rect1.x + rect1.width;
  const rect2Right = rect2.x + rect2.width;

  return (
    rect1.pageNumber === rect2.pageNumber &&
    rect1.x <= rect2.x &&
    rect1Right <= rect2Right &&
    rect2.x - rect1Right <= xMargin
  );
};

const extendWidth = (rect1: SelectionHighlightPosition, rect2: SelectionHighlightPosition) => {
  rect1.width = Math.max(rect2.width - rect1.x + rect2.x, rect1.width);
};

const optimizeClientRects = (
  clientRects: Array<SelectionHighlightPosition>,
): Array<SelectionHighlightPosition> => {
  const rects = sort(clientRects);

  const toRemove = new Set();

  const firstPass = rects.filter((rect) => {
    return rects.every((otherRect) => {
      return !inside(rect, otherRect);
    });
  });

  let passCount = 0;

  while (passCount <= 2) {
    for (const rect1 of firstPass) {
      for (const rect2 of firstPass) {
        if (rect1 === rect2 || toRemove.has(rect1) || toRemove.has(rect2)) {
          continue;
        }

        if (!sameLine(rect1, rect2)) {
          continue;
        }

        if (overlaps(rect1, rect2)) {
          extendWidth(rect1, rect2);
          rect1.height = Math.max(rect1.height, rect2.height);

          toRemove.add(rect2);
        }

        if (nextTo(rect1, rect2)) {
          extendWidth(rect1, rect2);

          toRemove.add(rect2);
        }
      }
    }
    passCount += 1;
  }

  return firstPass.filter((rect) => !toRemove.has(rect));
};

const getClientRects = (
  range: Range,
  highlightLayerId: string,
  pageNumber: number,
): Array<SelectionHighlightPosition> => {
  const clientRects = Array.from(range.getClientRects());
  const highlightLayerNode = document.getElementById(highlightLayerId)!;
  const rects: SelectionHighlightPosition[] = [];

  for (const clientRect of clientRects) {
    const pageRect = highlightLayerNode.getBoundingClientRect();

    if (
      clientRect.width > 0 &&
      clientRect.height > 0 &&
      clientRect.width < pageRect.width &&
      clientRect.height < pageRect.height
    ) {
      const highlightedRect: SelectionHighlightPosition = {
        y: clientRect.top + highlightLayerNode.scrollTop - pageRect.top,
        x: clientRect.left + highlightLayerNode.scrollLeft - pageRect.left,
        width: clientRect.width,
        height: clientRect.height,
        pageNumber,
      };

      rects.push(highlightedRect);
    }
  }

  return optimizeClientRects(rects);
};

const getGroupBox = (clientRects: SelectionHighlightPosition[]): SelectionHighlightPosition => {
  const rects = Array.from(clientRects).map((rect) => {
    const { x, y, width, height, pageNumber } = rect;

    const X0 = x;
    const X1 = x + width;

    const Y0 = y;
    const Y1 = y + height;

    return { X0, X1, Y0, Y1, pageNumber };
  });

  let firstPageNumber = Number.MAX_SAFE_INTEGER;

  for (const rect of rects) {
    firstPageNumber = Math.min(firstPageNumber, rect.pageNumber ?? firstPageNumber);
  }

  const rectsWithSizeOnFirstPage = rects.filter(
    (rect) =>
      (rect.X0 > 0 || rect.X1 > 0 || rect.Y0 > 0 || rect.Y1 > 0) &&
      rect.pageNumber === firstPageNumber,
  );

  const optimal = rectsWithSizeOnFirstPage.reduce((res, rect) => {
    return {
      X0: Math.min(res.X0, rect.X0),
      X1: Math.max(res.X1, rect.X1),

      Y0: Math.min(res.Y0, rect.Y0),
      Y1: Math.max(res.Y1, rect.Y1),

      pageNumber: firstPageNumber,
    };
  }, rectsWithSizeOnFirstPage[0]);

  const { X0, X1, Y0, Y1, pageNumber } = optimal;

  return {
    x: X0,
    y: Y0,
    width: X1 - X0,
    height: Y1 - Y0,
    pageNumber,
  };
};

const getPageFromElement = (target: HTMLElement): number | null => {
  const node = target.closest('[data-page-number]') as HTMLElement | null;
  if (!node) {
    return null;
  }
  const number = Number(node.dataset.pageNumber);

  return number;
};

const getPagesFromRange = (range: Range): number[] => {
  const startParentElement = range.startContainer.parentElement;
  const endParentElement = range.endContainer.parentElement;
  if (!startParentElement || !endParentElement) return [];

  const startPage = getPageFromElement(startParentElement);
  const endPage = getPageFromElement(endParentElement);

  if (!startPage || !endPage) {
    return [];
  }

  if (startPage === endPage) {
    return [startPage];
  }

  if (startPage === endPage - 1) {
    return [startPage, endPage];
  }

  const pages: number[] = [];

  let currentPageNumber = startPage;

  while (currentPageNumber <= endPage) {
    const currentPage = getPageFromElement(
      document.querySelector(`[data-page-number='${currentPageNumber}'`) as HTMLElement,
    );
    if (currentPage) {
      pages.push(currentPage);
    }
    currentPageNumber++;
  }

  return pages;
};

const WITH_THUMBNAILS_SCALE = 0.159;
const WITH_THUMBNAILS_SCALE_ON_CREATION = 0.1903;

export const HighlightLayer: FC<Props> = ({ pageNumber, pageHeight, className, ...props }) => {
  const {
    editMode,
    rectHighlights,
    setRectHighlights,
    selectionHighlights,
    setSelectionHighlights,
    selectionMode,
    indicatorIdToAppendTo,
    currentFile,
    highlightRefs,
    zoom,
    indicatorGroups,
    thumbnailsOpen,
    enableHighlightEditing,
  } = usePdfViewerContext();
  const { confirmations } = useIndicatorsContext();
  //   const [deleteHighlightWarningModalOpen, setDeleteHighlightWarningModalOpen] = useState(false); @to do
  const id = `highlightLayer_${pageNumber}_${currentFile?.value.id}`;

  const onCreateRect = (indicatorId: number | null) => (coords: BboxCoords) => {
    if (!indicatorId || !currentFile) {
      return;
    }

    const newId = randInt();
    setRectHighlights((prev) => ({
      ...prev,
      unconfirmed: [
        ...prev.unconfirmed,
        {
          id: newId,
          coords,
          indicatorId,
          type: 'rect',
          docId: currentFile.value.id,
          pageNumber,
          originalZoom: zoom,
        },
      ],
    }));
  };

  const onCreateSelection = useCallback(
    (indicatorId: number | null, coords: SelectionCoords) => {
      if (!indicatorId || !currentFile) {
        return;
      }
      const newId = randInt();
      window.getSelection()?.removeAllRanges();

      setSelectionHighlights((prev) => ({
        confirmed: prev.confirmed,
        unconfirmed: [
          ...prev.unconfirmed,
          {
            id: newId,
            coords: coords,
            docId: currentFile.value.id,
            type: 'selection',
            indicatorId,
            originalZoom: zoom,
            pageNumber,
          },
        ],
      }));
    },
    [zoom, currentFile, pageNumber],
  );

  const onFinishDrag = (position: HighlightPosition) => {
    const coords = coordsByRectPosition(position);
    onCreateRect(indicatorIdToAppendTo)(coords);
  };

  const onDeleteRect = (highlightId: number) => () => {
    setRectHighlights((prev) => ({
      confirmed: prev.confirmed.filter((rh) => rh.id !== highlightId),
      unconfirmed: prev.unconfirmed.filter((rh) => rh.id !== highlightId),
    }));
  };

  const onEditRect = (highlightId: number) => (newCoords: BboxCoords) => {
    setRectHighlights((prev) => ({
      confirmed: prev.confirmed.map((rh) =>
        rh.id === highlightId ? { ...rh, coords: newCoords } : rh,
      ),
      unconfirmed: prev.unconfirmed.map((rh) =>
        rh.id === highlightId ? { ...rh, coords: newCoords } : rh,
      ),
    }));
  };

  const onConfirmRect = (highlightId: number) => () => {
    setRectHighlights((prev) => ({
      confirmed: [...prev.confirmed, ...prev.unconfirmed.filter((rh) => rh.id === highlightId)],
      unconfirmed: prev.unconfirmed.filter((rh) => rh.id !== highlightId),
    }));
  };

  const onDeleteText = (highlightId: number) => () => {
    setSelectionHighlights((prev) => ({
      confirmed: prev.confirmed.filter((rh) => rh.id !== highlightId),
      unconfirmed: prev.unconfirmed.filter((rh) => rh.id !== highlightId),
    }));
  };

  const onConfirmSelection = (highlightId: number) => () => {
    setSelectionHighlights((prev) => ({
      confirmed: [...prev.confirmed, ...prev.unconfirmed.filter((rh) => rh.id === highlightId)],
      unconfirmed: prev.unconfirmed.filter((rh) => rh.id !== highlightId),
    }));
  };

  const debouncedCreateSelection = _.debounce(onCreateSelection, 500);

  useEffect(() => {
    const handler = () => {
      if (!editMode || selectionMode !== 'selection') return; // @to do same for 'text'
      const selection = window.getSelection();
      if (!selection || !selection.toString().trim().length) {
        return;
      }

      const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
      if (!range) return;
      const n = getPagesFromRange(range);
      if (!n.includes(pageNumber)) return;

      const rects = getClientRects(range, id, pageNumber);

      if (rects.length === 0) {
        return;
      }

      const boundingRect = getGroupBox(rects);
      if (thumbnailsOpen) {
        boundingRect.height += boundingRect.height * WITH_THUMBNAILS_SCALE_ON_CREATION;
        boundingRect.width += boundingRect.width * WITH_THUMBNAILS_SCALE_ON_CREATION;
        boundingRect.y += boundingRect.y * WITH_THUMBNAILS_SCALE_ON_CREATION;
        boundingRect.x += boundingRect.x * WITH_THUMBNAILS_SCALE_ON_CREATION;

        for (const r of rects) {
          r.height += r.height * WITH_THUMBNAILS_SCALE_ON_CREATION;
          r.width += r.width * WITH_THUMBNAILS_SCALE_ON_CREATION;
          r.x += r.x * WITH_THUMBNAILS_SCALE_ON_CREATION;
          r.y += r.y * WITH_THUMBNAILS_SCALE_ON_CREATION;
        }
      }

      debouncedCreateSelection(indicatorIdToAppendTo, {
        position: boundingRect,
        boxes: rects,
      });
    };

    document.addEventListener('selectionchange', handler);
    return () => document.removeEventListener('selectionchange', handler);
  }, [id, pageNumber, indicatorIdToAppendTo, editMode, selectionMode, thumbnailsOpen]);

  return (
    <div
      id={id}
      style={{
        height: pageHeight ? `${pageHeight}px` : 'calc(100% - 58px)',
      }}
      className={cn(cls.highlightLayer, className)}
      {...props}
    >
      {editMode && selectionMode === 'rect' && <HighlightDrawingLayer onFinish={onFinishDrag} />}
      {[...selectionHighlights.confirmed, ...selectionHighlights.unconfirmed]
        .filter(
          (h) => currentFile && h.pageNumber === pageNumber && h.docId === currentFile.value.id,
        )
        .map((h) => {
          const highlightsGroupId = indicatorGroups.find(
            (g) => !!g.indicators.find((i) => i.id === h.indicatorId),
          )?.id;
          const shouldLock = !!(highlightsGroupId && !!confirmations[highlightsGroupId]);
          const scale = calculateScaleDelta(h.originalZoom, zoom);

          return (
            <SelectionHighlight
              key={h.id}
              enableControls={enableHighlightEditing}
              editable={editMode}
              onConfirm={onConfirmSelection(h.id)}
              onDelete={onDeleteText(h.id)}
              scale={scale}
              scaleForThumbnails={thumbnailsOpen ? WITH_THUMBNAILS_SCALE : undefined}
              position={h.coords}
              shouldLock={shouldLock}
              ref={(ref) => {
                if (highlightRefs && highlightRefs.current) {
                  highlightRefs.current[h.id] = ref;
                }
              }}
            />
          );
        })}
      {[...rectHighlights.confirmed, ...rectHighlights.unconfirmed]
        .filter(
          (h) => currentFile && h.pageNumber === pageNumber && h.docId === currentFile?.value.id,
        )
        .map((h) => {
          const highlightsGroupId = indicatorGroups.find(
            (g) => !!g.indicators.find((i) => i.id === h.indicatorId),
          )?.id;
          const shouldLock = !!(highlightsGroupId && !!confirmations[highlightsGroupId]);
          const scale = calculateScaleDelta(h.originalZoom, zoom);

          return (
            <RectangleHighlight
              key={h.id}
              enableControls={enableHighlightEditing}
              defaultPosition={rectByCoords(h.coords)}
              editable={editMode}
              shouldLock={shouldLock}
              scale={scale}
              ref={(ref) => {
                if (highlightRefs && highlightRefs.current) {
                  highlightRefs.current[h.id] = ref;
                }
              }}
              highlightLayerId={id}
              onCreate={onCreateRect(indicatorIdToAppendTo)}
              onDelete={onDeleteRect(h.id)}
              onEdit={onEditRect(h.id)}
              onConfirm={onConfirmRect(h.id)}
            />
          );
        })}
    </div>
  );
};
