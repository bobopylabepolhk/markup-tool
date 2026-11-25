import { fn } from 'storybook/test';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { EditTopicModal } from './EditTopicModal';

const meta = {
  title: 'Indicators/EditTopicModal',
  component: EditTopicModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    open: true,
    setOpen: fn(),
    onSave: fn(),
  },
} satisfies Meta<typeof EditTopicModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedIndicators: [],
    topic: {
      id: 1,
      name: 'Topic name',
      indicators: [
        {
          id: 1,
          name: 'Gross global Scope 1 emissions, percentage covered under emissions-limiting regulations',
          code: 'EM-MM-110a.1.',
        },
        {
          id: 2,
          name: 'Discussion of long-and short-term strategy or plan to manage Scope 1 emissions, emissions reduction targets, and an analysis of performance against those targets',
          code: 'EM-MM-110a.2.',
        },
        {
          id: 3,
          name: 'Scope 1 emissions reduction initiatives and projects, including timelines and responsible parties',
          code: 'EM-MM-110a.3.',
        },
        {
          id: 4,
          name: 'Assessment of risks and opportunities related to Scope 1 emissions, and mitigation strategies',
          code: 'EM-MM-110a.4.',
        },
      ],
    },
  },
};
