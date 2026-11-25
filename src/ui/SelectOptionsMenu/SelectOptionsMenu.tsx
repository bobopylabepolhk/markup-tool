import cn from 'classnames';
import React, { FC, HTMLAttributes, useCallback } from 'react';

import { SelectOption } from '../Select/Select';
import cls from './style.module.css';

type Props = {
  options: SelectOption[];
  menuPosition?: 'left' | 'right';
  open: boolean;
  onChange: (o: SelectOption) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

export const SelectOptionsMenu: FC<Props> = ({
  open,
  setOpen,
  menuPosition = 'left',
  options,
  onChange,
  className,
  ...props
}) => {
  const onSelect = useCallback(
    (o: SelectOption) => (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      onChange(o);
      setOpen(false);
    },
    [onChange, setOpen],
  );

  if (!open) {
    return null;
  }

  return (
    <div className={cn(cls.menu, cls[menuPosition], className)} {...props}>
      {options.map((o, idx) => (
        <div key={`${idx}-${o.label}`} className={cn(cls.option)} onClick={onSelect(o)}>
          {o.label}
        </div>
      ))}
    </div>
  );
};
