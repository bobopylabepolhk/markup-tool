import _ from 'lodash';

import cn from 'classnames';
import React, { FC, HTMLAttributes, useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useGtmEvent } from '#/gtm/gtm-provider';
import { TAB_PARAM } from '#/hooks/useTabs/useTabs';
import FilterButton from '#/ui/FilterButton';
import Input from '#/ui/Input';

import { useIndicatorsContext } from '../../context/useIndicatorsContext';
import cls from './style.module.css';

type Props = {
  notFoundCount: number;
  totalCount: number;
} & HTMLAttributes<HTMLDivElement>;

// time before gtm event is sent (after last throttled onChange has been triggered)
const GTM_EVENT_SEARCH_DELAY = 3500;

export const Filters: FC<Props> = ({ notFoundCount, totalCount, className, ...props }) => {
  const { notFound, search, setNotFound, setSearch } = useIndicatorsContext();
  const gtmEvent = useGtmEvent();
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [params] = useSearchParams();

  const onFilterClick = () => {
    setNotFound((prev) => !prev);
    gtmEvent({
      action_type: 'click',
      action_type_property: 'apply',
      widget_type: 'builder_filters',
      widget_item_type: 'not_found',
      widget_prop: params.get(TAB_PARAM) ?? undefined,
    });
  };

  const onSearch = useCallback(
    (v: string) => {
      setSearch(v);
      if (timer) {
        clearTimeout(timer);
      }
      setTimer(
        setTimeout(() => {
          gtmEvent({
            action_type: 'click',
            action_type_property: 'apply',
            widget_type: 'builder_search_bar',
            widget_prop: params.get(TAB_PARAM) ?? undefined,
          });
        }, GTM_EVENT_SEARCH_DELAY),
      );
    },
    [timer],
  );

  const throttledOnSearch = useCallback(_.throttle(onSearch, 200), [onSearch]);

  return (
    <div className={cn(cls.filters, className)} {...props}>
      <Input
        value={search}
        className={cls.search}
        onChange={throttledOnSearch}
        placeholder={'Topic, indicator or metric name'}
      />
      {notFoundCount && (
        <FilterButton
          text={'Not Found'}
          active={notFound}
          metric={`${notFoundCount} (${Math.trunc((notFoundCount / totalCount) * 100)}%)`}
          onClick={onFilterClick}
        />
      )}
    </div>
  );
};
