import cn from 'classnames';
import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';

import {
  ACTIVE_CLSNAME,
  DISABLED_CLSNAME,
  ELEVATE_CLSNAME,
  ERROR_CLSNAME,
} from '#/hooks/useFloatingLabelClassName';

import cls from './style.module.css';

type Props = {
  error?: string;
  label?: string;
  labelId?: string;
  disabled?: boolean;
} & PropsWithChildren &
  HTMLAttributes<HTMLDivElement>;

const mapClassNames: Record<string, string> = {
  [ACTIVE_CLSNAME]: cls.active,
  [DISABLED_CLSNAME]: cls.disabled,
  [ELEVATE_CLSNAME]: cls.elevate,
  [ERROR_CLSNAME]: cls.error,
};

export const FloatingLabelControlContainer: FC<Props> = ({
  error,
  label,
  labelId,
  disabled,
  children,
  className,
  ...props
}) => (
  <div className={cn(cls.container, className)} {...props}>
    {children}
    {label && (
      <>
        <label
          htmlFor={labelId}
          className={cn(cls.label, disabled ? mapClassNames[DISABLED_CLSNAME] : undefined)}
        >
          <span className={cn(cls.actualLabel, error ? mapClassNames[ERROR_CLSNAME] : undefined)}>
            {label}
          </span>
        </label>
        <div className={cls.fakeLabel}>
          <span>{label}</span>
        </div>
      </>
    )}
    {error && <span className={cls.errorMsg}>{error}</span>}
  </div>
);
