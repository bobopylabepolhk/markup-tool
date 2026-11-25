import type { Meta, StoryObj } from '@storybook/react-vite';

import { SidebarToggle } from './SidebarToggle';

const meta = {
  title: 'Navigation/SidebarToggle',
  component: SidebarToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { open: true },
} satisfies Meta<typeof SidebarToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithText: Story = {
  args: {
    hasText: true,
  },
};
