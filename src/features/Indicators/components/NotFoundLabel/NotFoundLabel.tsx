import cn from 'classnames';
import React, { FC, HTMLAttributes, useId, useRef, useState } from 'react';

import { useOutsideClick } from '#/hooks/useOutsideClick';
import Menu from '#/ui/Menu';

import cls from './style.module.css';

type Props = {
  isActiveSelection: boolean;
} & HTMLAttributes<HTMLSpanElement>;

export const NotFoundLabel: FC<Props> = ({ isActiveSelection, className, ...props }) => {
  const [open, setOpen] = useState(false);
  const labelRef = useRef<HTMLSpanElement | null>(null);
  const menuId = useId();
  const onItemClickWithMenuClose = (func: () => void) => () => {
    setOpen(false);
    func();
  };
  useOutsideClick(labelRef, () => setOpen(false), [menuId]);

  return (
    <span
      className={cn(cls.notFoundLabel, className, isActiveSelection ? cls.active : undefined)}
      onClick={() => {
        setOpen(true);
      }}
      ref={labelRef}
      {...props}
    >
      Not found
      {open && (
        <Menu
          items={[{ text: 'Show in index', onClick: onItemClickWithMenuClose(() => undefined) }]}
          id={menuId}
          className={cls.menu}
        />
      )}
    </span>
  );
};
