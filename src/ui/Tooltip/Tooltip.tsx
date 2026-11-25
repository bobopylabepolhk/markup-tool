import cn from 'classnames';
import React, { HTMLAttributes, ReactNode, forwardRef } from 'react';
import { TransitionStatus } from 'react-transition-state';

import cls from './style.module.css';

type TrianglePosition = 'left' | 'right' | 'center';

type Props = {
  open?: boolean;
  status?: TransitionStatus;
  children: ReactNode;
  trianglePos?: TrianglePosition;
  triangleAtTop?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const Tooltip = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      open = true,
      status = 'entered',
      trianglePos = 'center',
      triangleAtTop = false,
      className,
      ...props
    },
    ref,
  ) => {
    if (!open) {
      return null;
    }

    return (
      <div className={cn(cls.tooltip, status, className)} ref={ref} {...props}>
        <div className={cn(cls.triangle, cls[trianglePos], triangleAtTop ? cls.top : cls.bottom)} />
        {children}
      </div>
    );
  },
);

Tooltip.displayName = 'Tooltip';
