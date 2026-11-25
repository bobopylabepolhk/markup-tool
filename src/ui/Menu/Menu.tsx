import cn from 'classnames';
import React, { FC, HTMLAttributes, MouseEvent } from 'react';

import cls from './style.module.css';

type Props = {
  items: { text: string; onClick: () => void }[];
} & HTMLAttributes<HTMLDivElement>;

export const Menu: FC<Props> = ({ items, className, ...props }) => {
  const withStopPropagation = (func: () => void) => (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    func();
  };

  return (
    <div className={cn(cls.menu, className)} {...props}>
      {items.map((i) => (
        <div key={i.text} onClick={withStopPropagation(i.onClick)} className={cls.item}>
          {i.text}
        </div>
      ))}
    </div>
  );
};
