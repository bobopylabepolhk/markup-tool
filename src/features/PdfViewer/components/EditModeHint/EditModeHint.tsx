import cn from 'classnames';
import React, { FC, HTMLAttributes, ReactNode } from 'react';

import Caret from '#/assets/caret-highlight-tooltip.svg?react';
import RectIcon from '#/assets/edit-mode-rect.svg?react';
import TextIcon from '#/assets/edit-topic.svg?react';
import HintCard from '#/ui/HintCard';
import { Tooltip } from '#/ui/Tooltip/Tooltip';

import { usePdfViewerContext } from '../../context/usePdfViewerContext';
import { SelectionType } from '../../models/highlight';
import cls from './style.module.css';

type Props = {
  enabledTypes?: SelectionType[];
  showTypeSelector?: boolean;
} & HTMLAttributes<HTMLDivElement>;

const selectionTypesInfo: Record<SelectionType, { description: string; Icon: ReactNode }> = {
  rect: { description: 'Draw shapes to create highlights', Icon: <RectIcon /> },
  selection: { description: 'Select text to create highlights', Icon: <TextIcon /> },
};

export const EditModeHint: FC<Props> = ({
  enabledTypes = ['rect', 'selection'],
  showTypeSelector = true,
  className,
  ...props
}) => {
  const {
    editMode,
    selectionMode,
    setSelectionMode,
    setEditMode,
    setRectHighlights,
    setSelectionHighlights,
    setIndicatorIdToAppendTo,
  } = usePdfViewerContext();

  const onCancel = () => {
    setEditMode(false);
    setRectHighlights((prev) => ({ ...prev, unconfirmed: [] }));
    setSelectionHighlights((prev) => ({ ...prev, unconfirmed: [] }));
    setIndicatorIdToAppendTo(null);
  };

  if (!editMode) {
    return null;
  }

  return (
    <div className={cn(cls.editMode, className)} {...props}>
      {showTypeSelector && (
        <div className={cls.selectionTypes}>
          {enabledTypes.map((m, idx) => {
            const info = selectionTypesInfo[m];

            return (
              <div
                key={m}
                className={cn(
                  cls.selectionType,
                  selectionMode === m ? cls.active : undefined,
                  idx === 0 ? cls.leftCutoffBorder : undefined,
                  idx === enabledTypes.length - 1 ? cls.rightCutoffBorder : undefined,
                )}
                onClick={() => setSelectionMode(m)}
              >
                {info.Icon}
                <Tooltip className={cls.tooltip} triangleAtTop>
                  {info.description}
                </Tooltip>
              </div>
            );
          })}
        </div>
      )}
      <HintCard text={'Highlight the correct area in the text'} Icon={<Caret />} />
      <div className={cls.cancel} onClick={onCancel}>
        Cancel
      </div>
    </div>
  );
};
