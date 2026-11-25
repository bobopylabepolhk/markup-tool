import { ReactNode } from 'react';

type TabData = {
  id: string;
  name: string;
  content: ReactNode;
  metric?: number;
};

type ParamProperty = Exclude<keyof TabData, 'content'>;

type UseTabsReturn = {
  onChange: (tabId: string) => void;
  render: (rerenderTabContent?: string[]) => ReactNode;
  activeTabId: string;
};

export type { TabData, UseTabsReturn, ParamProperty };
