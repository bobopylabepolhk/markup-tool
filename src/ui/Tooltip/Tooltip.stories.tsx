import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tooltip } from './Tooltip';

const meta = {
  title: 'ui/Tooltip',
  component: Tooltip,
  parameters: {
    innerHeight: 800,
  },
  tags: ['autodocs'],
  args: {},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    children: (
      <>
        <b>The organization and its reporting practices</b> refers to how a company structures its
        internal processes for collecting, analyzing, and reporting relevant information, including
        financial, operational, and sustainability data. It encompasses the transparency, accuracy,
        and consistency of reporting mechanisms to stakeholders, ensuring compliance with regulatory
        requirements and fostering trust in the organization&apos;s practices.
      </>
    ),
    status: 'entered',
  },
};
