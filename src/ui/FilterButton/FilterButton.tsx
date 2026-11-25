import cn from 'classnames';
import React, { FC, HTMLAttributes } from 'react';

import cls from './style.module.css';

type Props = {
  text: string;
  metric?: string;
  active?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export const FilterButton: FC<Props> = ({ text, metric, active, className, ...props }) => {
  return (
    <button className={cn(cls.filterButton, active ? cls.active : undefined, className)} {...props}>
      {text}
      {metric ? <span> · {metric}</span> : <></>}
    </button>
  );
};
