import { fn } from 'storybook/test';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { IndicatorWithPages } from './IndicatorWithPages';

const meta = {
  title: 'Indicators/IndicatorWithPages',
  component: IndicatorWithPages,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onChange: fn(),
    onNewHighlightClick: fn(),
    onPageClick: fn(),
    setIndicatorBlockedState: fn(),
    enableConfirmations: true,
    search: '',
  },
} satisfies Meta<typeof IndicatorWithPages>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    indicatorGroup: {
      subTopicName: '',
      id: 1,
      code: '123-1',
      name: 'indicator name',
      description: 'this is an indicator. la di da',
      indicators: [
        {
          id: 124,
          code: '123-1a',
          linkedPages: [{ highlightId: 1, pageNumber: 2, docId: 1 }],
          name: 'lorem ipsum',
          notFound: false,
        },
        {
          id: 12312,
          code: '123-1b',
          linkedPages: [
            { highlightId: 2, pageNumber: 24, docId: 1 },
            { highlightId: 3, pageNumber: 24, docId: 2 },
          ],
          name: 'dolor sit amet',
          notFound: false,
        },
      ],
    },
  },
};

export const Confirmed: Story = {
  args: {
    indicatorGroup: {
      subTopicName: '',
      id: 1,
      confirmation: { user: 'jesse.broadway', date: new Date() },
      code: '123-1',
      name: 'indicator name',
      description: 'this is an indicator. la di da',
      indicators: [
        {
          id: 12312,
          code: '123-1a',
          linkedPages: [{ highlightId: 1, pageNumber: 2, docId: 1 }],
          name: 'lorem ipsum',
          notFound: false,
        },
        {
          id: 8881,
          code: '123-1b',
          linkedPages: [
            { highlightId: 2, pageNumber: 24, docId: 1 },
            { highlightId: 3, pageNumber: 24, docId: 2 },
          ],
          name: 'dolor sit amet',
          notFound: false,
        },
      ],
    },
  },
};
