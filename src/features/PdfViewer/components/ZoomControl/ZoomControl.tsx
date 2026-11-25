import cn from 'classnames';
import React, { FC, HTMLAttributes, useMemo } from 'react';

import ZoomIn from '#/assets/zoom-in.svg?react';
import ZoomOut from '#/assets/zoom-out.svg?react';
import Icon from '#/ui/Icon';
import { withDecimalPrecision } from '#/utils/withDecimalPrecision';

import cls from './style.module.css';

type Props = {
  currentZoom: number;
  baseZoom?: number;
  minZoom?: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  increment?: number;
  isAutoadjustInProgress?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const ZoomControl: FC<Props> = ({
  currentZoom,
  setZoom,
  minZoom = 1,
  increment = 0.1,
  className,
  isAutoadjustInProgress = false,
  ...props
}) => {
  const onZoomIn = () => {
    setZoom((prev) => withDecimalPrecision(prev + increment, 1, Math.round));
  };

  const onZoomOut = () => {
    setZoom((prev) => withDecimalPrecision(prev - increment, 1, Math.round));
  };

  const zoomOutDisabled = useMemo(() => currentZoom === minZoom, [currentZoom, minZoom]);

  return (
    <div className={cn(cls.container, className)} {...props}>
      <Icon
        className={cn(
          cls.zoomBtn,
          zoomOutDisabled || isAutoadjustInProgress ? cls.disabled : undefined,
        )}
        onClick={!zoomOutDisabled ? onZoomOut : undefined}
      >
        <ZoomOut />
      </Icon>
      <div className={cls.value}>{Math.trunc(currentZoom * 100)}%</div>
      <Icon
        className={cn(cls.zoomBtn, isAutoadjustInProgress ? cls.disabled : undefined)}
        onClick={onZoomIn}
      >
        <ZoomIn />
      </Icon>
    </div>
  );
};
