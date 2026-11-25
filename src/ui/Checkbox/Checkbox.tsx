import cn from 'classnames';
import React, { FC, HTMLAttributes, ReactNode } from 'react';

import Dash from '#/assets/checkbox-dash.svg?react';
import Tick from '#/assets/checkbox-tick.svg?react';

import cls from './style.module.css';

type Props = {
  value: boolean;
  isIntermediate?: boolean;
  onChange: (value: boolean) => void;
  renderTrue?: () => ReactNode;
  renderFalse?: () => ReactNode;
  shouldStopPropagation?: boolean;
  renderIntermediate?: () => ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onClick'>;

export const Checkbox: FC<Props> = ({
  value,
  isIntermediate,
  onChange,
  renderTrue = () => <Tick />,
  renderFalse = () => undefined,
  renderIntermediate = () => <Dash />,
  className,
  shouldStopPropagation = false,
  ...props
}) => (
  <div
    className={cn(cls.checkbox, className, value || isIntermediate ? cls.checked : undefined)}
    {...props}
    onClick={(e) => {
      if (shouldStopPropagation) {
        e.stopPropagation();
      }
      onChange(!value);
    }}
  >
    {isIntermediate ? renderIntermediate() : value ? renderTrue() : renderFalse()}
  </div>
);
