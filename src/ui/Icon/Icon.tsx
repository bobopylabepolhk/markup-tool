import cn from 'classnames';
import React, { FC } from 'react';

import cls from './style.module.css';
import { IconProps } from './types';

export const Icon: FC<IconProps> = ({ className, children, ...props }) => {
  return (
    <div className={cn(cls.icon, className)} {...props}>
      {children}
    </div>
  );
};
