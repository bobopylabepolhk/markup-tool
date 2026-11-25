import cn from 'classnames';
import React, { HTMLAttributes, forwardRef } from 'react';

import cls from './style.module.css';

type Props = {
  hasHandles?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const Rectangle = forwardRef<HTMLDivElement, Props>(
  ({ className, hasHandles = false, ...props }, ref) => {
    return (
      <div
        className={cn(cls.rectangle, hasHandles ? cls.withHandles : undefined, className)}
        ref={ref}
        {...props}
      >
        <div className={cn(cls.handle, cls.top, cls.left)} />
        <div className={cn(cls.handle, cls.top, cls.right)} />
        <div className={cn(cls.handle, cls.bottom, cls.left)} />
        <div className={cn(cls.handle, cls.bottom, cls.right)} />
      </div>
    );
  },
);

Rectangle.displayName = 'Rectangle';
