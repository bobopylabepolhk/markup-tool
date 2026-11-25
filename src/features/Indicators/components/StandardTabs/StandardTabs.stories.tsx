import { fn } from 'storybook/test';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { StandardTabs } from './StandardTabs';

const meta = {
  title: 'Indicators/StandardTabs',
  component: StandardTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChangeTab: fn() },
} satisfies Meta<typeof StandardTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { name: 'GRI', metric: 50, id: '1' },
      { name: 'SASB', metric: 92, id: '2' },
      { name: 'Custom', id: '3' },
    ],
    activeId: '1',
  },
};
