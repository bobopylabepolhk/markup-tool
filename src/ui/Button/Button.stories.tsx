import { fn } from 'storybook/test';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const meta = {
  title: 'ui/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Click me',
  },
};

export const Contrast: Story = {
  args: {
    variant: 'contrast',
    children: 'Click me',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: `Don't click me!`,
  },
};
