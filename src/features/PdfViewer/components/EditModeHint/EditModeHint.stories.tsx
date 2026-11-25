import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { PdfViewerContextProvider } from '../../context/Provider';
import { EditModeHint } from './EditModeHint';

const meta = {
  title: 'PdfViewer/EditModeHint',
  component: EditModeHint,
  decorators: [
    (Story) => (
      <PdfViewerContextProvider
        editModeByDefault
        enableConfirmationFlow={true}
        enableHighlightEditing={true}
      >
        <Story />
      </PdfViewerContextProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  args: {},
  tags: ['autodocs'],
} satisfies Meta<typeof EditModeHint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
