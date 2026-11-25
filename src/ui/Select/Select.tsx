import cn from 'classnames';
import React, { FC, HTMLAttributes, useRef, useState } from 'react';

import SelectArrow from '#/assets/chevron.svg?react';
import { useOutsideClick } from '#/hooks/useOutsideClick';

import Arrow from '../Arrow';
import SelectOptionsMenu from '../SelectOptionsMenu';
import cls from './style.module.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SelectOption<T = any> = {
  value: T;
  label: string;
};

type Props = {
  options: SelectOption[];
  onChange: (o: SelectOption) => void;
  value?: SelectOption;
  isDisabled?: boolean;
  menuPosition?: 'left' | 'right';
  onMenuOpen?: () => void;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

export const Select: FC<Props> = ({
  options,
  value,
  onChange,
  isDisabled,
  menuPosition,
  onMenuOpen,
  className,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(containerRef, () => {
    setOpen(false);
  });

  const onClick = () => {
    onMenuOpen?.();
    if (!isDisabled) {
      setOpen(true);
    }
  };

  return (
    <div className={cn(cls.select, className)} onClick={onClick} ref={containerRef} {...props}>
      <span className={cls.value}>{value?.label}</span>
      <Arrow
        open={open}
        className={cls.arrow}
        Icon={<SelectArrow />}
        orientation={open ? 'right' : 'left'}
      />
      <SelectOptionsMenu
        menuPosition={menuPosition}
        onChange={onChange}
        open={open}
        setOpen={setOpen}
        options={options}
      />
    </div>
  );
};
