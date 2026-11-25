import cn from 'classnames';
import React, { FC, HTMLAttributes, MouseEvent, useCallback } from 'react';

import CancelNewHighlight from '#/assets/cancel-highlight.svg?react';
import Check from '#/assets/check-confirm-highlight.svg?react';
import Delete from '#/assets/delete-highlight.svg?react';
import Edit from '#/assets/edit-topic.svg?react';
import Lock from '#/assets/indicator-confirmed-lock.svg?react';
import type { HighlightControlsState } from '#/hooks/useHighlightControls';
import HintCard from '#/ui/HintCard';

import cls from './style.module.css';

type Props = {
  shouldLock: boolean;
  onDelete: () => void;
  onConfirm: () => void;
} & HighlightControlsState &
  HTMLAttributes<HTMLDivElement>;

export const HighlightControls: FC<Props> = ({
  isEditing,
  isConfirmed,
  setIsConfirmed,
  setIsEditing,
  onConfirm,
  onDelete,
  shouldLock,
  className,
  ...props
}) => {
  const renderControls = useCallback(() => {
    if (shouldLock) {
      return <HintCard text={'Indicator confirmed'} Icon={<Lock />} />;
    }

    if (isEditing) {
      return (
        <HintCard
          onClick={() => {
            onConfirm();
            setIsConfirmed(true);
            setIsEditing(false);
          }}
          text={'Confirm'}
          Icon={<Check />}
        />
      );
    }

    return (
      <>
        <HintCard
          onClick={() => {
            setIsEditing(true);
            setIsConfirmed(false);
          }}
          text={'Edit'}
          Icon={<Edit className={cls.editIcon} />}
        />
        <HintCard onClick={onDelete} text={'Delete'} Icon={<Delete />} />
      </>
    );
  }, [shouldLock, isEditing, isConfirmed]);

  return (
    <>
      {isEditing && !isConfirmed && !shouldLock && (
        <div className={cls.cancel} onClick={onDelete}>
          <CancelNewHighlight />
        </div>
      )}
      <div
        className={cn(cls.controls, className, !isEditing ? cls.showOnHover : undefined)}
        onMouseDown={(e: MouseEvent) => {
          e.stopPropagation();
        }}
        {...props}
      >
        {renderControls()}
      </div>
    </>
  );
};
