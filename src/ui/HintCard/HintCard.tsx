import cn from 'classnames';
import React, { FC, HTMLAttributes, ReactNode } from 'react';

import cls from './style.module.css';

type Props = {
  text: string;
  Icon?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const HintCard: FC<Props> = ({ text, Icon, className, ...props }) => (
  <div className={cn(cls.hint, className)} {...props}>
    {Icon ? Icon : null} <p>{text}</p>
  </div>
);
