import React, { CSSProperties, FC, PropsWithChildren, useRef } from 'react';
import { createPortal } from 'react-dom';

import Close from '#/assets/modal-close.svg?react';
import { useClick } from '#/hooks/useClick';
import { useHiddenScroll } from '#/hooks/useHiddenScroll';
import Icon from '#/ui/Icon';

import cls from './style.module.css';

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  contentWidth: number;
  contentHeight: number;
  closeOnOutsideClick?: boolean;
} & PropsWithChildren;

export const Modal: FC<Props> = ({
  open,
  onClose,
  title,
  children,
  contentHeight,
  contentWidth,
  closeOnOutsideClick = true,
}) => {
  useHiddenScroll(open);
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  useClick(backgroundRef, onClose, closeOnOutsideClick);

  return open
    ? createPortal(
        <div className={cls.container} data-open={open}>
          <div
            className={cls.content}
            style={
              {
                '--content-width': `${contentWidth}px`,
                '--content-height': `${contentHeight}px`,
              } as CSSProperties
            }
          >
            {title ? (
              <div className={cls.title}>
                <p>{title}</p>
                <Icon className={cls.close} onClick={onClose}>
                  <Close />
                </Icon>
              </div>
            ) : (
              <Icon className={cls.close} onClick={onClose}>
                <Close />
              </Icon>
            )}
            {children}
          </div>
          <div className={cls.bg} ref={backgroundRef} />
        </div>,
        document.body,
      )
    : null;
};
