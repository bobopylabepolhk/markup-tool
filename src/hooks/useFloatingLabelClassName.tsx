import { useState } from 'react';

export const ERROR_CLSNAME = '__error';
export const DISABLED_CLSNAME = '__disabled';
export const ACTIVE_CLSNAME = '__active';
export const ELEVATE_CLSNAME = '__elevate';

export function useFloatingLabelClassName(hasValue: boolean, hasError: boolean) {
  const [isActive, setIsActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const makeActive = () => setIsActive(true);
  const makeInactive = () => {
    if (!isFocused) {
      setIsActive(false);
    }
  };

  const onFocus = () => {
    setIsFocused(true);
    setIsActive(true);
  };

  const onBlur = () => {
    setIsFocused(false);
    setIsActive(false);
  };

  return {
    onFocus,
    onBlur,
    makeActive,
    makeInactive,
    className: `${isActive || hasValue ? ELEVATE_CLSNAME : ''} ${isActive ? ACTIVE_CLSNAME : ''} ${
      hasError ? ERROR_CLSNAME : ''
    }`,
  };
}
