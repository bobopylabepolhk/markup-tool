import cn from 'classnames';
import React, { FC, HTMLAttributes, useCallback } from 'react';

import { useGtmEvent } from '#/gtm/gtm-provider';

import cls from './style.module.css';

type Props = {
  tabs: {
    id: string;
    name: string;
    metric?: number;
  }[];
  activeId: string;
  onChangeTab: (id: string) => void;
} & HTMLAttributes<HTMLDivElement>;

export const StandardTabs: FC<Props> = ({ tabs, activeId, className, onChangeTab, ...props }) => {
  const gtmEvent = useGtmEvent();
  const onTabClick = useCallback(
    (id: string, standardName: string) => () => {
      if (activeId !== id) {
        onChangeTab(id);
        gtmEvent({
          action_type: 'click',
          action_type_property: 'select',
          widget_type: 'builder_standard_tab',
          widget_item_type: standardName,
          widget_prop: standardName,
        });
      }
    },
    [onChangeTab, activeId, gtmEvent],
  );

  return (
    <div className={cn(cls.container, className)} {...props}>
      {tabs.map(({ name, metric, id }) => (
        <div
          key={id}
          className={cn(cls.tab, activeId === id ? cls.active : undefined)}
          onClick={onTabClick(id, name)}
        >
          <p>
            <span className={cls.tabName}>{name}</span>&nbsp;
            {metric && (
              <>
                <span className={cls.dot}>·</span>&nbsp;
                <span className={cls.metric}>{metric}%</span>
              </>
            )}
          </p>
        </div>
      ))}
    </div>
  );
};
