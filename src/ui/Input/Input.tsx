import cn from 'classnames';
import React, { FC, InputHTMLAttributes, useId } from 'react';

import { useFloatingLabelClassName } from '#/hooks/useFloatingLabelClassName';

import FloatingLabelControlContainer from '../FloatingLabelControlContainer';
import cls from './style.module.css';

type Props = {
  onChange: (value: string) => void;
  labelText?: string;
  errorText?: string;
  value?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

export const Input: FC<Props> = ({
  value,
  labelText,
  errorText,
  disabled,
  onChange,
  className,
  ...props
}) => {
  const id = useId();
  const {
    className: controlClassName,
    makeActive,
    makeInactive,
    onBlur,
    onFocus,
  } = useFloatingLabelClassName(!!value?.length, !!errorText);

  return (
    <FloatingLabelControlContainer
      label={labelText}
      disabled={disabled}
      labelId={id}
      className={cn(className, controlClassName)}
      error={errorText}
      onMouseOver={makeActive}
      onMouseOut={makeInactive}
    >
      <input
        {...props}
        type={'text'}
        autoComplete={'off'}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        id={id}
        className={cn(cls.input, errorText ? cls.error : undefined)}
        onChange={(e) => onChange(e.target.value)}
      />
    </FloatingLabelControlContainer>
  );
};
