import cn from 'classnames';
import React, { FC, HTMLAttributes } from 'react';

import BackArrow from '#/assets/chevron.svg?react';

import cls from './style.module.css';

type Props = { onBack?: () => void } & Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>;

export const Back: FC<Props> = ({ onBack, className, ...props }) => (
  <div className={cn(cls.back, className)} onClick={onBack} {...props}>
    <BackArrow className={cls.arrow} /> <p>Back</p>
  </div>
);
