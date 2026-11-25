import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ParamProperty, TabData, UseTabsReturn } from './types';

export const TAB_PARAM = 'tab';

// useTabs's render() allows switching tabs without re-mounting the content on every switch
export function useTabs(
  defaultTabId: string,
  tabData: TabData[],
  paramProperty: ParamProperty | null = 'id',
  tabParamName = TAB_PARAM,
): UseTabsReturn {
  const [params, setParams] = useSearchParams();
  const [activeTabId, setActiveTabId] = useState<string>(defaultTabId);
  const [visitedTabsId, setVisitedTabsId] = useState<Record<string, boolean | undefined>>({
    [defaultTabId]: true,
  });

  const onChange = useCallback(
    (newTabId: string) => {
      setActiveTabId(newTabId);
      setVisitedTabsId((prev) => (!prev[newTabId] ? { ...prev, [newTabId]: true } : prev));
      if (paramProperty) {
        const tabItemByNewId = tabData.find(({ id }) => id === newTabId);
        params.set(tabParamName, tabItemByNewId?.[paramProperty]?.toString() ?? '');
        setParams(params);
      }
    },
    [paramProperty, tabParamName, tabData],
  );

  const renderableTabs = useMemo(
    () => tabData.filter(({ id }) => visitedTabsId[id]),
    [tabData, visitedTabsId],
  );

  useEffect(() => {
    const initialTabId = tabData.find((t) => t.id === defaultTabId)?.id ?? defaultTabId;
    onChange(initialTabId);
  }, []);

  const render = (rerenderTabContent?: string[]) => {
    return (
      <>
        {renderableTabs.map(({ content, id }) => {
          const isVisible = activeTabId === id;
          const shouldRerenderOnTabChange = rerenderTabContent && rerenderTabContent.includes(id);
          if (shouldRerenderOnTabChange && !isVisible) {
            return null;
          }

          return (
            <div key={id} style={{ display: isVisible ? 'block' : 'none' }}>
              {content}
            </div>
          );
        })}
      </>
    );
  };

  return {
    render,
    onChange,
    activeTabId,
  };
}
