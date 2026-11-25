import type { Meta, StoryObj } from '@storybook/react-vite';

import alphabet from '#/features/PdfViewer/test-pdfs/Alphabet Inc. (Google) Sustainability Report 2024-1.pdf';
import { setupPdfJs } from '#/pdfjs';

import Widget from './index';

setupPdfJs();

const meta = {
  title: 'Widget',
  component: Widget,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Source name',
    data: [
      { file: alphabet, page: 2, text: 'Table of contents', id: 1 },
      { file: alphabet, page: 6, text: 'Our sustainability strategy', id: 2 },
    ],
    markupToolUrl: 'http://stg.etoso.io/markup-tool',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Widget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
