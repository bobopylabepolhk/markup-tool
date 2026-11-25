import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import socionext from '#/features/PdfViewer/test-pdfs/AD00-00006-1E.pdf';
import alphabet from '#/features/PdfViewer/test-pdfs/Alphabet Inc. (Google) Sustainability Report 2024-1.pdf';
import ameren from '#/features/PdfViewer/test-pdfs/Ameren Annual Report 2022.pdf';
import diageo from '#/features/PdfViewer/test-pdfs/Diageo Annual Report 2023.pdf';
import msGroup from '#/features/PdfViewer/test-pdfs/Marks & Spencer Group PLC Sustainability Report 2024-1.pdf';
import pepsico from '#/features/PdfViewer/test-pdfs/PEPSICO Annual Report 2022.pdf';
import blueApron from '#/features/PdfViewer/test-pdfs/blue apron.pdf';
import ubs from '#/features/PdfViewer/test-pdfs/hidden text.pdf';
import { setupPdfJs } from '#/pdfjs';

import { PdfViewerContextProvider } from '../../context/Provider';
import testReport from '../../test-pdfs/025eb979-33b1-4ff8-9b9d-d3a8bce91aba_page_56.pdf';
import helenOfTroy from '../../test-pdfs/Helen of Troy Ltd Sustainability Report 2023.pdf';
import Container from './index';

setupPdfJs();

const meta = {
  title: 'PdfViewer/Container',
  component: Container,
  decorators: [
    (Story) => (
      <PdfViewerContextProvider enableConfirmationFlow={false} enableHighlightEditing={false}>
        <Story />
      </PdfViewerContextProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  args: {
    enableContextMenu: true,
    fileOptions: [
      {
        value: { file: helenOfTroy, id: 1 },
        label: 'Helen of Troy Ltd Sustainability Report 2023',
      },
      { value: { file: socionext, id: 2 }, label: 'Socionext Inc. ESG Report 2023' },
      {
        value: { file: alphabet, id: 3 },
        label: 'Alphabet Inc. (Google) Sustainability Report 2024',
      },
      {
        value: { file: msGroup, id: 4 },
        label: 'Marks & Spencer Group PLC Sustainability Report 2024',
      },
      { value: { file: blueApron, id: 5 }, label: 'Blue Apron Annual Report 2022' },
      { value: { file: diageo, id: 6 }, label: 'Diageo Annual Report 2023' },
      { value: { file: pepsico, id: 7 }, label: 'PEPSICO Annual Report 2022' },
      { value: { file: ameren, id: 8 }, label: 'Ameren Annual Report 2022' },
      { value: { file: ubs, id: 9 }, label: 'UBS Sustainability Report 2023' },
      { value: { file: testReport, id: 10 }, label: 'test report' },
    ],
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
