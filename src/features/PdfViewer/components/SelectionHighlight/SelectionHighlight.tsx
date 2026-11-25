import React, { CSSProperties, forwardRef, useCallback } from 'react';

import { useHighlightControls } from '#/hooks/useHighlightControls';

import { HighlightPosition, SelectionCoords } from '../../models/highlight';
import HighlightControls from '../HighlightControls';
import cls from './style.module.css';

type Props = {
  position: SelectionCoords;
  onDelete: () => void;
  editable: boolean;
  shouldLock?: boolean;
  onConfirm: () => void;
  scale?: number;
  scaleForThumbnails?: number;
  enableControls: boolean;
};

export const SelectionHighlight = forwardRef<HTMLDivElement, Props>(
  (
    {
      position,
      editable,
      onConfirm,
      onDelete,
      enableControls,
      scale = 0,
      scaleForThumbnails = 0,
      shouldLock = false,
    },
    ref,
  ) => {
    const { isConfirmed, isEditing, setIsConfirmed, setIsEditing } = useHighlightControls(editable);

    const calculateContainerPosition = useCallback(
      (position: HighlightPosition): CSSProperties => {
        const scaledPosition = {
          height: position.height + position.height * scale,
          width: position.width + position.width * scale,
          left: position.x + position.x * scale,
          top: position.y + position.y * scale,
        };

        if (scaleForThumbnails) {
          scaledPosition.height -= position.height * scaleForThumbnails;
          scaledPosition.width -= position.width * scaleForThumbnails;
          scaledPosition.left -= position.x * scaleForThumbnails;
          scaledPosition.top -= position.y * scaleForThumbnails;
        }

        return scaledPosition;
      },
      [scale, scaleForThumbnails],
    );

    const calculateBoxPosition = useCallback(
      (box: HighlightPosition, containerX: number, containerY: number): CSSProperties => {
        const scaledPosition = {
          width: box.width + box.width * scale,
          height: box.height + box.height * scale,
          left: box.x - containerX + (box.x - containerX) * scale,
          top: box.y - containerY + (box.y - containerY) * scale,
        };

        if (scaleForThumbnails) {
          scaledPosition.width -= box.width * scaleForThumbnails;
          scaledPosition.height -= box.height * scaleForThumbnails;
          scaledPosition.top -= (box.y - containerY) * scaleForThumbnails;
        }

        return scaledPosition;
      },
      [scale, scaleForThumbnails],
    );

    return (
      <div
        className={cls.textHighlight}
        ref={ref}
        style={calculateContainerPosition(position.position)}
      >
        {position.boxes.map((b) => (
          <div
            key={JSON.stringify(b)}
            className={cls.box}
            style={calculateBoxPosition(b, position.position.x, position.position.y)}
          />
        ))}
        {enableControls && (
          <HighlightControls
            isConfirmed={isConfirmed}
            isEditing={isEditing}
            onConfirm={onConfirm}
            onDelete={onDelete}
            setIsConfirmed={setIsConfirmed}
            setIsEditing={setIsEditing}
            shouldLock={shouldLock}
            className={cls.controls}
          />
        )}
      </div>
    );
  },
);

SelectionHighlight.displayName = 'SelectionHighlight';
