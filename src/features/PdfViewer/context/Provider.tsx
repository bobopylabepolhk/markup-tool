import React, { FC, PropsWithChildren, useMemo, useRef, useState } from 'react';
import { DocumentCallback } from 'react-pdf/dist/cjs/shared/types';

import { IndicatorGroup } from '#/features/Indicators/models/indicators';
import { SelectOption } from '#/ui/Select/Select';

import { PdfData } from '../models/files';
import { Highlight, SelectionType } from '../models/highlight';
import Context from './pdfViewerContext';
import type { PdfViewerContext } from './pdfViewerContext';

type Props = {
  editModeByDefault?: boolean;
  enableHighlightEditing: boolean;
  enableConfirmationFlow: boolean;
} & PropsWithChildren;

export const PdfViewerContextProvider: FC<Props> = ({
  enableHighlightEditing,
  enableConfirmationFlow,
  editModeByDefault = false,
  children,
}) => {
  const pageRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const highlightRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const [editMode, setEditMode] = useState(enableHighlightEditing ? editModeByDefault : false);
  const [currentFileProxy, setCurrentFileProxy] = useState<DocumentCallback | null>(null);

  const [currentFile, setCurrentFile] = useState<SelectOption<PdfData> | undefined>();
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [thumbnailsOpen, setThumbnailsOpen] = useState(false);

  const [selectionMode, setSelectionMode] = useState<SelectionType>('selection');
  const [rectHighlights, setRectHighlights] = useState<{
    unconfirmed: Highlight<'rect'>[];
    confirmed: Highlight<'rect'>[];
  }>({ confirmed: [], unconfirmed: [] });
  const [selectionHighlights, setSelectionHighlights] = useState<{
    unconfirmed: Highlight<'selection'>[];
    confirmed: Highlight<'selection'>[];
  }>({
    confirmed: [
      {
        id: 9871147,
        coords: {
          position: {
            x: 43.890625,
            y: 19.875,
            width: 153.91990661621094,
            height: 21,
            pageNumber: 3,
          },
          boxes: [
            {
              y: 19.875,
              x: 43.890625,
              width: 153.91990661621094,
              height: 21,
              pageNumber: 3,
            },
          ],
        },
        docId: 10,
        type: 'selection',
        indicatorId: 13212,
        originalZoom: 1,
        pageNumber: 3,
      },
    ],
    unconfirmed: [],
  });
  const indicatorGroups: IndicatorGroup[] = useMemo(
    () => [
      {
        subTopicName: 'Greenhouse gas emissions',
        id: 1,
        code: 'EM-MM-110a.1.',
        name: 'Gross global Scope 1 emissions, percentage covered under emissions-limiting regulations',
        description: 'description',

        indicators: [
          {
            id: 13212,
            code: 'EM-MM-110a.1.a',
            linkedPages: [...rectHighlights.confirmed, ...selectionHighlights.confirmed]
              .filter((h) => h.indicatorId === 13212)
              .map((h) => ({ highlightId: h.id, pageNumber: h.pageNumber, docId: h.docId })),
            name: 'Gross global Scope 1 emissions (Category: Quantitative, Unit: Metric tonnes (t) CO₂-e)',
            notFound: false,
          },
          {
            id: 343,
            code: 'EM-MM-110a.1.b',
            linkedPages: [...rectHighlights.confirmed, ...selectionHighlights.confirmed]
              .filter((h) => h.indicatorId === 343)
              .map((h) => ({ highlightId: h.id, pageNumber: h.pageNumber, docId: h.docId })),
            name: 'Percentage of gross global Scope 1 emissions covered under emissions-limiting regulations (Category: Quantitative, Unit: Percentage (%))',
            notFound: false,
          },
        ],
      },
      {
        id: 8,
        code: 'EM-CO-11a.1.',
        subTopicName: 'pollution',
        name: 'Gross global Scope 2 emissions, percentage covered under emissions-limiting regulations',
        description: 'description',
        indicators: [
          {
            id: 999,
            code: 'EM-CO-10a.1',
            linkedPages: [...rectHighlights.confirmed, ...selectionHighlights.confirmed]
              .filter((h) => h.indicatorId === 999)
              .map((h) => ({ highlightId: h.id, pageNumber: h.pageNumber, docId: h.docId })),
            name: 'Percentage of gross global Scope 2 emissions covered under emissions-limiting regulations',
            notFound: true,
          },
        ],
      },
    ],
    [rectHighlights, selectionHighlights],
  );
  const [indicatorIdToAppendTo, setIndicatorIdToAppendTo] = useState<number | null>(null);

  const value: PdfViewerContext = {
    editMode,
    setEditMode,
    currentFile,
    setCurrentFile,
    pageRefs,
    highlightRefs,
    currentPage,
    setCurrentPage,
    zoom,
    setZoom,
    selectionMode,
    setSelectionMode,
    rectHighlights,
    setRectHighlights,
    selectionHighlights,
    setSelectionHighlights,
    indicatorIdToAppendTo,
    setIndicatorIdToAppendTo,
    indicatorGroups,
    currentFileProxy,
    setCurrentFileProxy,
    thumbnailsOpen,
    setThumbnailsOpen,
    enableHighlightEditing,
    enableConfirmationFlow,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
