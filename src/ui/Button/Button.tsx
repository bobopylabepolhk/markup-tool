import cn from 'classnames';
import React, { FC, useEffect, useState } from 'react';

import Loading from '#/ui/Loading';

import cls from './style.module.css';
import { ButtonProps, ButtonVariant } from './types';

const loaderColors: Record<ButtonVariant, string> = {
  contrast: '#fff',
  danger: '#fff',
  default: '#2D1E50',
};

export const Button: FC<ButtonProps> = ({
  variant,
  disabled,
  mechanic,
  onClick,
  loading: loadingProp,
  withShadow,
  children,
  className,
  ...props
}) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (loadingProp !== undefined) setLoading(loadingProp);
  }, [loadingProp]);

  function createRipple(event: React.MouseEvent<HTMLButtonElement>) {
    const button = event.currentTarget;

    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const viewportOffset = button.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - viewportOffset.left - radius}px`;
    circle.style.top = `${event.clientY - viewportOffset.top - radius}px`;
    circle.classList.add(cls.ripple);

    const ripple = button.getElementsByClassName(cls.ripple)[0];

    if (ripple) {
      ripple.remove();
    }

    button.append(circle);
  }

  /**
   * This is where the mechanic is handled.
   * If a button is awaited, it will show a loading indicator, wait for the promise to
   * resolve / reject and then hide it.
   * If a button is submit, it will ignore the onClick prop.
   * If a button is non-awaiter, it will just call the onClick prop.
   */
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if ((mechanic === 'awaited' && loading) || disabled) {
      return;
    }

    if (mechanic === 'awaited') {
      setLoading(true);
    }

    createRipple(event);

    if (mechanic === 'awaited') {
      Promise.resolve(onClick?.(event))
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    } else if (mechanic === 'submit') {
      return;
    } else {
      onClick?.(event);
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled || loading}
      className={cn(
        cls.btn,
        className,
        disabled ? cls.disabled : undefined,
        cls[variant],
        withShadow ? cls.withShadow : undefined,
      )}
      {...props}
    >
      <>{loading ? <Loading color={loaderColors[variant]} size={14} /> : children}</>
    </button>
  );
};
