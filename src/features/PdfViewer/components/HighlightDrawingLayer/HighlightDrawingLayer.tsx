import cn from 'classnames';
import React, {
  FC,
  HTMLAttributes,
  MouseEvent,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';

import { rectByCoords } from '#/utils/rectByCoords';

import { BboxCoords, HighlightPosition } from '../../models/highlight';
import Rectangle from '../Rectangle';
import cls from './style.module.css';

type Props = {
  onFinish: (position: HighlightPosition) => void;
} & HTMLAttributes<HTMLDivElement>;

// @to do check for typr not for truthness
const areCoordsValid = (coords: BboxCoords) => {
  return coords[0][0] && coords[0][1] && coords[1][0] && coords[1][1];
};

export const HighlightDrawingLayer: FC<Props> = ({ onFinish, className, ...props }) => {
  const [topLeftPoint, setTopLeftPoint] = useState<[number, number]>([0, 0]);
  const [bottomRightPoint, setBottomRightPoint] = useState<[number, number]>([0, 0]);

  const [action, setAction] = useState<'press' | 'click' | undefined>();
  const isLongPress = useRef<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const coords = useMemo(() => {
    if (areCoordsValid([topLeftPoint, bottomRightPoint])) {
      return rectByCoords([topLeftPoint, bottomRightPoint]);
    }

    return null;
  }, [topLeftPoint, bottomRightPoint]);

  const startTimer = () => {
    isLongPress.current = false;
    intervalRef.current = setTimeout(() => {
      isLongPress.current = true;
      setAction('press');
    }, 100);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startDrawing = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    startTimer();
    const box = (e.target as HTMLDivElement).getBoundingClientRect();
    setTopLeftPoint([e.clientX - box.left, e.clientY - box.top]);
  };

  const stopDrawing = useCallback(() => {
    if (coords) {
      onFinish(coords);
    }
    stopTimer();
    setTopLeftPoint([0, 0]);
    setBottomRightPoint([0, 0]);
    setAction(undefined);
  }, [onFinish, coords]);

  const onClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      if (isLongPress.current) {
        stopDrawing();
        return;
      }
      setAction('click');
    },
    [stopDrawing],
  );

  const drawSecondDot = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (action === 'press') {
        const box = (e.target as HTMLDivElement).getBoundingClientRect();
        setBottomRightPoint([e.clientX - box.left, e.clientY - box.top]);
      }
    },
    [action],
  );

  return (
    <div
      className={cn(cls.drawingLayer, className)}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      onClick={onClick}
      onMouseMove={drawSecondDot}
      {...props}
    >
      {coords && (
        <Rectangle
          style={{
            position: 'absolute',
            width: `${coords.width}px`,
            height: `${coords.height}px`,
            left: `${coords.x}px`,
            top: `${coords.y}px`,
            pointerEvents: 'none',
          }}
          hasHandles
        />
      )}
    </div>
  );
};
