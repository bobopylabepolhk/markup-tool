import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { TopicAccordion } from './TopicAccordion';

const meta = {
  title: 'Indicators/TopicAccordion',
  component: TopicAccordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof TopicAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'Topic name',
    children: <>123123</>,
  },
};

export const WithDescription: Story = {
  args: {
    name: 'Topic name',
    children: <>123123</>,
    description: 'tauydvuawdfvuawda',
  },
};

export const WithCounter: Story = {
  args: {
    name: 'Topic name',
    counter: {
      active: 3,
      total: 10,
    },
  },
};
