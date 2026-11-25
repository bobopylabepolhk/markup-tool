import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { IndicatorsContextProvider } from '#/features/Indicators/context/Provider';
import { PdfViewerContextProvider } from '#/features/PdfViewer/context/Provider';

import { IndexCheckStep } from './IndexCheckStep';

const meta = {
  title: 'Templates/IndexCheckStep',
  component: IndexCheckStep,
  decorators: [
    (Story) => (
      <PdfViewerContextProvider enableConfirmationFlow={false} enableHighlightEditing={false}>
        <IndicatorsContextProvider>
          <Story />
        </IndicatorsContextProvider>
      </PdfViewerContextProvider>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof IndexCheckStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
