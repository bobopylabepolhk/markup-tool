import React, { forwardRef, useCallback } from 'react';
import { Rnd } from 'react-rnd';

import { useHighlightControls } from '#/hooks/useHighlightControls';
import { coordsByRectPosition } from '#/utils/coordsByRectPosition';

import { BboxCoords, HighlightPosition } from '../../models/highlight';
import HighlightControls from '../HighlightControls';
import { Rectangle } from '../Rectangle/Rectangle';
import cls from './style.module.css';

type Props = {
  defaultPosition: HighlightPosition;
  onCreate: (position: BboxCoords) => void;
  onDelete: () => void;
  onConfirm: () => void;
  onEdit: (position: BboxCoords) => void;
  enableControls: boolean;
  editable: boolean;
  highlightLayerId?: string;
  shouldLock?: boolean;
  scale?: number;
};

export const RectangleHighlight = forwardRef<HTMLDivElement, Props>(
  (
    {
      onCreate,
      editable,
      onDelete,
      onEdit,
      onConfirm,
      defaultPosition,
      highlightLayerId,
      enableControls,
      scale = 0,
      shouldLock = false,
    },
    ref,
  ) => {
    const { isConfirmed, isEditing, setIsConfirmed, setIsEditing } = useHighlightControls(editable);
    const calculateContainerPosition = useCallback(
      (position: HighlightPosition): HighlightPosition => ({
        height: position.height + position.height * scale,
        width: position.width + position.width * scale,
        x: position.x + position.x * scale,
        y: position.y,
      }),
      [scale],
    );

    return (
      <Rnd
        default={calculateContainerPosition(defaultPosition)}
        className={cls.draggable}
        bounds={`#${highlightLayerId}`}
        cancel={`.${cls.controls}`}
        disableDragging={!(isEditing && !isConfirmed) || shouldLock}
        enableResizing={isEditing && !isConfirmed && !shouldLock}
        onDragStart={(e) => e.stopPropagation()}
        onResizeStop={(e, dir, ref, delta, pos) => {
          const coords = coordsByRectPosition({
            width: ref.clientWidth,
            height: ref.clientHeight,
            x: pos.x,
            y: pos.y,
          });

          if (isEditing) {
            onEdit(coords);
          } else {
            onCreate(coords);
          }
        }}
        onDragStop={(e, data) => {
          const coords = coordsByRectPosition({
            width: data.node.clientWidth,
            height: data.node.clientHeight,
            x: data.x,
            y: data.y,
          });

          if (isEditing) {
            onEdit(coords);
          } else {
            onCreate(coords);
          }
        }}
      >
        <Rectangle className={cls.highlightRect} ref={ref} hasHandles={isEditing && !isConfirmed} />

        {enableControls && (
          <HighlightControls
            isConfirmed={isConfirmed}
            isEditing={isEditing}
            onConfirm={onConfirm}
            onDelete={onDelete}
            setIsConfirmed={setIsConfirmed}
            setIsEditing={setIsEditing}
            shouldLock={shouldLock}
            className={cls.showOnHover}
          />
        )}
      </Rnd>
    );
  },
);

RectangleHighlight.displayName = 'RectangleHighlight';
