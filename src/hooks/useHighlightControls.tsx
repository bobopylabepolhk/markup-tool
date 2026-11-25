import { useCallback, useEffect, useState } from 'react';

import { usePdfViewerContext } from '#/features/PdfViewer/context/usePdfViewerContext';

export type HighlightControlsState = {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  isConfirmed: boolean;
  setIsConfirmed: (value: boolean) => void;
};

export function useHighlightControls(
  editable: boolean,
  turnOnEditModeOnEditStart = true,
): HighlightControlsState {
  const [isEditing, setIsEditing] = useState(editable);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const { setEditMode } = usePdfViewerContext();
  const setIsEditingWithEditModeToggle = useCallback(
    (value: boolean) => {
      if (value && turnOnEditModeOnEditStart) {
        setEditMode(true);
      }
      setIsEditing(value);
    },
    [turnOnEditModeOnEditStart],
  );

  useEffect(() => {
    setIsEditing(editable);
  }, [editable]);

  return { isEditing, isConfirmed, setIsEditing: setIsEditingWithEditModeToggle, setIsConfirmed };
}
