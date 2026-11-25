import { fn } from 'storybook/test';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { FilterButton } from './FilterButton';

const meta = {
  title: 'ui/FilterButton',
  component: FilterButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof FilterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Not in index',
  },
};

export const WithMetric: Story = {
  args: {
    text: 'Not in index',
    metric: '12 (43%)',
  },
};
