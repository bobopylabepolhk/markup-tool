import cn from 'classnames';
import React, { FC, HTMLAttributes } from 'react';

import ToggleArrow from '#/assets/sidebar-arrow.svg?react';
import Icon from '#/ui/Icon';

import cls from './style.module.css';

type Props = {
  open: boolean;
  hasText?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export const SidebarToggle: FC<Props> = ({ open, hasText, className, ...props }) => (
  <button className={cn(cls.sidebarToggle, className)} {...props}>
    <Icon className={!open ? cls.turnedArrow : ''}>
      <ToggleArrow />
    </Icon>
    {(hasText ?? !open) && <p>Open docs</p>}
  </button>
);
