import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { IndicatorsContextProvider } from '#/features/Indicators/context/Provider';
import { PdfViewerContextProvider } from '#/features/PdfViewer/context/Provider';
import { setupPdfJs } from '#/pdfjs';

import { ContentVerificationStep } from './ContentVerificationStep';

setupPdfJs();

const meta = {
  title: 'Templates/ContentVerificationStep',
  component: ContentVerificationStep,
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
} satisfies Meta<typeof ContentVerificationStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
