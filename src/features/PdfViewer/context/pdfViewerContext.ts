import { createContext } from 'react';
import { DocumentCallback } from 'react-pdf/dist/cjs/shared/types';

import { IndicatorGroup } from '#/features/Indicators/models/indicators';
import { Highlight, SelectionType } from '#/features/PdfViewer/models/highlight';
import { SelectOption } from '#/ui/Select/Select';

import { PdfData } from '../models/files';

export type PdfViewerContext = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  currentFileProxy: DocumentCallback | null;
  setCurrentFileProxy: React.Dispatch<React.SetStateAction<DocumentCallback | null>>;
  currentFile?: SelectOption<PdfData>;
  setCurrentFile: React.Dispatch<React.SetStateAction<SelectOption<PdfData> | undefined>>;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  pageRefs?: React.RefObject<Record<number, HTMLDivElement | null>>;
  highlightRefs?: React.RefObject<Record<number, HTMLDivElement | null>>;
  selectionMode: SelectionType;
  setSelectionMode: React.Dispatch<React.SetStateAction<SelectionType>>;
  rectHighlights: {
    unconfirmed: Highlight<'rect'>[];
    confirmed: Highlight<'rect'>[];
  };
  setRectHighlights: React.Dispatch<
    React.SetStateAction<{
      unconfirmed: Highlight<'rect'>[];
      confirmed: Highlight<'rect'>[];
    }>
  >;
  selectionHighlights: {
    unconfirmed: Highlight<'selection'>[];
    confirmed: Highlight<'selection'>[];
  };
  setSelectionHighlights: React.Dispatch<
    React.SetStateAction<{
      unconfirmed: Highlight<'selection'>[];
      confirmed: Highlight<'selection'>[];
    }>
  >;
  indicatorIdToAppendTo: number | null;
  setIndicatorIdToAppendTo: React.Dispatch<React.SetStateAction<number | null>>;
  indicatorGroups: IndicatorGroup[];
  thumbnailsOpen: boolean;
  setThumbnailsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  enableHighlightEditing: boolean;
  enableConfirmationFlow: boolean;
};

export default createContext<PdfViewerContext>({
  editMode: false,
  thumbnailsOpen: false,
  selectionMode: 'rect',
  currentPage: 1,
  zoom: 1,
  enableHighlightEditing: false,
  enableConfirmationFlow: false,
  currentFileProxy: null,
  rectHighlights: { confirmed: [], unconfirmed: [] },
  selectionHighlights: { confirmed: [], unconfirmed: [] },
  indicatorIdToAppendTo: null,
  indicatorGroups: [],

  setThumbnailsOpen: function () {
    throw new Error('Function not implemented.');
  },
  setIndicatorIdToAppendTo: function () {
    throw new Error('Function not implemented.');
  },
  setRectHighlights: function () {
    throw new Error('Function not implemented.');
  },
  setSelectionHighlights: function () {
    throw new Error('Function not implemented.');
  },
  setCurrentFile: function () {
    throw new Error('Function not implemented.');
  },
  setCurrentFileProxy: function () {
    throw new Error('Function not implemented.');
  },
  setZoom: function () {
    throw new Error('Function not implemented.');
  },
  setCurrentPage: function () {
    throw new Error('Function not implemented.');
  },

  setEditMode: function () {
    throw new Error('Function not implemented.');
  },
  setSelectionMode: function () {
    throw new Error('Function not implemented.');
  },
});
