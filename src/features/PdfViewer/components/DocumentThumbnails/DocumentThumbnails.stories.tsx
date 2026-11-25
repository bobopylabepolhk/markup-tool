import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import socionext from '#/features/PdfViewer/test-pdfs/AD00-00006-1E.pdf';
import alphabet from '#/features/PdfViewer/test-pdfs/Alphabet Inc. (Google) Sustainability Report 2024-1.pdf';
import pepsico from '#/features/PdfViewer/test-pdfs/PEPSICO Annual Report 2022.pdf';
import { setupPdfJs } from '#/pdfjs';

import { PdfViewerContextProvider } from '../../context/Provider';
import Container from '../Container';
import DocumentThumbnails from './index';

setupPdfJs();

const meta = {
  title: 'PdfViewer/DocumentThumbnails',
  component: DocumentThumbnails,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DocumentThumbnails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pepsi: Story = {
  decorators: [
    (Story) => (
      <PdfViewerContextProvider enableConfirmationFlow={false} enableHighlightEditing={false}>
        <Story />
        <div style={{ visibility: 'hidden', width: 0, height: 0 }}>
          <Container fileOptions={[{ label: '', value: { file: pepsico, id: 1 } }]} />
        </div>
      </PdfViewerContextProvider>
    ),
  ],
};

export const Socionext: Story = {
  decorators: [
    (Story) => (
      <PdfViewerContextProvider enableConfirmationFlow={false} enableHighlightEditing={false}>
        <Story />
        <div style={{ visibility: 'hidden', width: 0, height: 0 }}>
          <Container fileOptions={[{ label: '', value: { file: socionext, id: 1 } }]} />
        </div>
      </PdfViewerContextProvider>
    ),
  ],
};

export const Alphabet: Story = {
  decorators: [
    (Story) => (
      <PdfViewerContextProvider enableConfirmationFlow={false} enableHighlightEditing={false}>
        <Story />
        <div style={{ visibility: 'hidden', width: 0, height: 0 }}>
          <Container fileOptions={[{ label: '', value: { file: alphabet, id: 1 } }]} />
        </div>
      </PdfViewerContextProvider>
    ),
  ],
};
