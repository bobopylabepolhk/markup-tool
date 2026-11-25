import type { Meta, StoryObj } from '@storybook/react-vite';

import { MarkupTool } from './MarkupTool';

const meta = {
  title: 'Templates/MarkupTool',
  component: MarkupTool,
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof MarkupTool>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
