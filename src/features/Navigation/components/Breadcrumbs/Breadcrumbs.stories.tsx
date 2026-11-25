import { fn } from 'storybook/test';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Breadcrumbs } from './Breadcrumbs';

const meta = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onIndexClick: fn() },
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    completeIndexes: [],
    currentIndex: 1,
  },
};

export const FirstStepComplete: Story = {
  args: {
    completeIndexes: [1],
    currentIndex: 2,
  },
};
