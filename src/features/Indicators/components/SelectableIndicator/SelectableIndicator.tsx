import cn from 'classnames';
import React, { FC, HTMLAttributes, useRef } from 'react';

import { useOpenTransition } from '#/hooks/useOpenTransition';
import { useOutsideClick } from '#/hooks/useOutsideClick';
import Checkbox from '#/ui/Checkbox';
import { Tooltip } from '#/ui/Tooltip/Tooltip';

import { GenericIndicatorData } from '../../models/indicators';
import cls from './style.module.css';

type Props = {
  name: string;
  code: string;
  description?: string;
  isSelected: boolean;
  notInIndex?: boolean;
  withBorder?: boolean;
  onChange: (value: boolean) => void;
} & HTMLAttributes<HTMLDivElement>;

const Title: FC<Omit<GenericIndicatorData, 'id'>> = ({ code, name, description }) => {
  const { isOpen, open, status, close } = useOpenTransition();
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(tooltipRef, close);

  return (
    <p className={cls.text}>
      <span className={cls.code}>{code}</span>
      <span className={cls.tooltipContainer}>
        {description && (
          <Tooltip open={isOpen} status={status} className={cls.tooltip} ref={tooltipRef}>
            {description}
          </Tooltip>
        )}

        <span
          className={cn(cls.name, description ? cls.withDescription : undefined)}
          onClick={open}
        >
          {name}
        </span>
      </span>
    </p>
  );
};

export const SelectableIndicator: FC<Props> = ({
  name,
  isSelected,
  description,
  onChange,
  className,
  withBorder = true,
  code,
  ...props
}) => (
  <div
    className={cn(cls.selectableIndicator, withBorder ? cls.withBorder : undefined, className)}
    {...props}
  >
    <Checkbox value={isSelected} onChange={onChange} />
    <Title name={name} code={code} description={description} />
  </div>
);
