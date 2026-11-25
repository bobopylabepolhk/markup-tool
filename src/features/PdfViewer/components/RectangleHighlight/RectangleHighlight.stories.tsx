import { fn } from 'storybook/test';

import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { RectangleHighlight } from './RectangleHighlight';

const highlightLayerId = 'storyLayer';

const meta = {
  title: 'PdfViewer/RectangleHighlight',
  component: RectangleHighlight,
  decorators: [
    (Story) => (
      <div
        id={highlightLayerId}
        style={{ width: '500px', height: '500px', backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onDelete: fn(),
    onCreate: fn(),
    onEdit: fn(),
    defaultPosition: { height: 150, width: 150, x: 150, y: 150 },
    highlightLayerId,
    onConfirm: fn(),
  },
} satisfies Meta<typeof RectangleHighlight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    editable: false,
    enableControls: true,
  },
};

export const Editable: Story = {
  args: {
    editable: true,
    enableControls: true,
  },
};

export const Confirmed: Story = {
  args: {
    editable: false,
    shouldLock: true,
    enableControls: true,
  },
};
