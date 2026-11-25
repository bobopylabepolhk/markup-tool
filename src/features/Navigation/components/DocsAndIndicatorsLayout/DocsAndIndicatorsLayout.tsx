import cn from 'classnames';
import React, { FC, ReactNode, useState } from 'react';

import SidebarToggle from '../SidebarToggle';
import cls from './style.module.css';

type Props = {
  Docs: ReactNode;
  Indicators: ReactNode;
  openByDefault?: boolean;
};

export const DocsAndIndicatorsLayout: FC<Props> = ({ Docs, Indicators, openByDefault }) => {
  const [open, setOpen] = useState(!!openByDefault);
  return (
    <>
      <div className={cn(cls.docs, open ? cls.open : undefined)}>{Docs}</div>
      <div className={cn(cls.indicators, open ? cls.shrink : undefined)}>
        {Indicators}
        {open && (
          <SidebarToggle
            open={open}
            className={cls.indicatorsToggle}
            onClick={() => setOpen(false)}
          />
        )}
      </div>
      {!open && (
        <SidebarToggle open={open} className={cls.docsToggle} onClick={() => setOpen(true)} />
      )}
    </>
  );
};
