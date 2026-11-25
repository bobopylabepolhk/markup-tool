import cn from 'classnames';
import React, { FC, HTMLAttributes } from 'react';

import Loading from '#/ui/Loading';

import cls from './style.module.css';

export const LoadingPage: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => (
  <div className={cn(cls.loaderContainer, className)}>
    <Loading color={'#198690'} />
  </div>
);
