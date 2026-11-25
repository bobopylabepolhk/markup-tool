import cn from 'classnames';
import React, { FC, HTMLAttributes } from 'react';

import Cross from '#/assets/cross.svg?react';

import { GenericIndicatorData } from '../../models/indicators';
import cls from './style.module.css';

type Props = {
  indicator: GenericIndicatorData;
  onRemove: () => void;
} & HTMLAttributes<HTMLDivElement>;

export const RemovableIndicatorCard: FC<Props> = ({ indicator, onRemove, className, ...props }) => (
  <div className={cn(cls.card, className)} {...props}>
    <p>
      {indicator.code} {indicator.name}
    </p>
    <Cross className={cls.cross} onClick={onRemove} />
  </div>
);
