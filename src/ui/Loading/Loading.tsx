import cn from 'classnames';
import React, { FC, HTMLAttributes, useRef } from 'react';
import { ClipLoader } from 'react-spinners';

import cls from './style.module.css';

type Props = {
  size?: number;
  color?: string;
} & HTMLAttributes<HTMLDivElement>;

export const Loading: FC<Props> = ({ size = 150, color, className, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={cn(cls.loader, className)} {...props}>
      <ClipLoader
        color={color ?? '#2a204d'}
        loading={true}
        speedMultiplier={1}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
