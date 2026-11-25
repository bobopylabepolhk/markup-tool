import cn from 'classnames';
import React, { FC, HTMLAttributes } from 'react';

import CheckActive from '#/assets/step-active-complete.svg?react';
import Check from '#/assets/step-complete.svg?react';

import cls from './style.module.css';

type Props = {
  index: number;
  name: string;
  isActive: boolean;
  isComplete: boolean;
} & HTMLAttributes<HTMLDivElement>;

export const Step: FC<Props> = ({ index, isActive, name, isComplete, className, ...props }) => {
  return (
    <div className={cn(cls.step, className)} data-is-active={isActive} {...props}>
      <div className={cls.circle} data-is-active={isActive}>
        {isComplete ? isActive ? <CheckActive /> : <Check /> : index}
      </div>
      <p>{name}</p>
    </div>
  );
};
