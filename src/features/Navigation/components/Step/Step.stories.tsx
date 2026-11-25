import type { Meta, StoryObj } from '@storybook/react-vite';

import { Step } from './Step';

const meta = {
  title: 'Navigation/Step',
  component: Step,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Step>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    index: 1,
    isActive: false,
    name: 'Index check',
    isComplete: false,
  },
};

export const Active: Story = {
  args: {
    index: 1,
    isActive: true,
    name: 'Index check',
    isComplete: false,
  },
};

export const Complete: Story = {
  args: {
    index: 1,
    isActive: false,
    name: 'Index check',
    isComplete: true,
  },
};

export const ActiveAndComplete: Story = {
  args: {
    index: 1,
    isActive: true,
    name: 'Index check',
    isComplete: true,
  },
};
