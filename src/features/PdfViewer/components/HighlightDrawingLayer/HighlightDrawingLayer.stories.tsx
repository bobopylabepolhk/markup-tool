import { fn } from 'storybook/test';

import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { HighlightDrawingLayer } from './HighlightDrawingLayer';

const meta = {
  title: 'PdfViewer/HighlightDrawingLayer',
  component: HighlightDrawingLayer,
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          width: '500px',
          height: '500px',
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
        }}
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
    onFinish: fn(),
  },
} satisfies Meta<typeof HighlightDrawingLayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
