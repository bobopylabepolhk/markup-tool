import { fn } from 'storybook/test';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { SelectableIndicator } from './SelectableIndicator';

const meta = {
  title: 'Indicators/SelectableIndicator',
  component: SelectableIndicator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof SelectableIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    code: '123-1',
    isSelected: false,
    name: 'indicator name',
  },
};

export const WithDescription: Story = {
  args: {
    code: '123-1',
    isSelected: false,
    name: 'indicator name',
    description: 'texttexttexttexttext',
  },
};

export const LongText: Story = {
  args: {
    code: '123-1',
    isSelected: false,
    name: 'indicator with loooooooooooooooooooooooooooooooooooooooooooooooonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnng name',
  },
};
