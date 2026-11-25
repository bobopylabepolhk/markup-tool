import cn from 'classnames';
import React, { FC, ReactNode } from 'react';

import ArrowIcon from '#/assets/arrow-chevron.svg?react';

import cls from './style.module.css';

type Props = {
  open: boolean;
  orientation?: 'up' | 'down' | 'left' | 'right';
  Icon?: ReactNode;
} & React.HTMLAttributes<HTMLOrSVGElement>;

export const Arrow: FC<Props> = ({
  open,
  orientation,
  Icon = <ArrowIcon />,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(cls.arrow, cls[orientation ?? (open ? 'down' : 'up')], className)}
      {...props}
    >
      {Icon}
    </div>
  );
};
