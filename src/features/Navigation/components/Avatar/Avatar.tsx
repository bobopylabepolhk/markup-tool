import _ from 'lodash';

import cn from 'classnames';
import React, { FC, HTMLAttributes, useRef, useState } from 'react';

import ArrowHeader from '#/assets/arrow-header.svg?react';
import { useOutsideClick } from '#/hooks/useOutsideClick';
import Arrow from '#/ui/Arrow';
import Menu from '#/ui/Menu';

import cls from './style.module.css';

type Props = {
  userName: string;
  userRole: string;
  avatarBase64?: string;
  onLogOut: () => void;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onClick'>;

export const Avatar: FC<Props> = ({
  avatarBase64,
  userName,
  userRole,
  className,
  onLogOut,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const avatarRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(avatarRef, () => setOpen(false));

  return (
    <div
      ref={avatarRef}
      className={cn(cls.avatar, className)}
      onClick={() => setOpen((prev) => !prev)}
      {...props}
    >
      {avatarBase64 ? <img src={avatarBase64} /> : <div className={cls.loadingAvatar} />}
      <div>
        <p className={cls.userName}>{userName}</p>
        <p className={cls.userRole}>{_.startCase(userRole.toLowerCase())}</p>
      </div>
      <Arrow open={open} Icon={<ArrowHeader />} />
      {open && (
        <Menu
          className={cls.menu}
          items={[
            {
              text: 'Log Out',
              onClick: () => {
                setOpen(false);
                onLogOut();
              },
            },
          ]}
        />
      )}
    </div>
  );
};
