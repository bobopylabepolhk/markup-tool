import { fn } from 'storybook/test';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { GenericIndicatorData } from '#/features/Indicators/models/indicators';

import { SelectOption } from '../Select/Select';
import Autocomplete from './index';

const options: SelectOption<GenericIndicatorData>[] = [
  {
    label:
      'EM-MM-110a.1. Gross global Scope 1 emissions, percentage covered under emissions-limiting regulations',
    value: {
      id: 1,
      name: 'Gross global Scope 1 emissions, percentage covered under emissions-limiting regulations',
      code: 'EM-MM-110a.1.',
    },
  },
  {
    label:
      'EM-MM-110a.2. Discussion of long-and short-term strategy or plan to manage Scope 1 emissions, emissions reduction targets, and an analysis of performance against those targets',
    value: {
      id: 2,
      name: 'Discussion of long-and short-term strategy or plan to manage Scope 1 emissions, emissions reduction targets, and an analysis of performance against those targets',
      code: 'EM-MM-110a.2.',
    },
  },
  {
    label:
      'EM-MM-110a.3. Scope 1 emissions reduction initiatives and projects, including timelines and responsible parties',
    value: {
      id: 3,
      name: 'Scope 1 emissions reduction initiatives and projects, including timelines and responsible parties',
      code: 'EM-MM-110a.3.',
    },
  },
  {
    label:
      'EM-MM-110a.4. Assessment of risks and opportunities related to Scope 1 emissions, and mitigation strategies',
    value: {
      id: 4,
      name: 'Assessment of risks and opportunities related to Scope 1 emissions, and mitigation strategies',
      code: 'EM-MM-110a.4.',
    },
  },
];

const meta = {
  title: 'ui/Autocomplete',
  component: Autocomplete,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    options,
    onChange: fn(),
    onSearch: (s) =>
      Promise.resolve(options.filter((o) => o.label.toLowerCase().includes(s.toLowerCase()))),
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Indicator name',
  },
};
