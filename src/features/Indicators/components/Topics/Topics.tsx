import React, { FC } from 'react';

import { PdfData } from '#/features/PdfViewer/models/files';
import { SelectOption } from '#/ui/Select/Select';

import { IndicatorGroup } from '../../models/indicators';
import { Topic } from '../Topic/Topic';
import cls from './style.module.css';

type Props = {
  fileOptions: SelectOption<PdfData>[];
  indicatorGroups: IndicatorGroup[];
};

export const Topics: FC<Props> = ({ fileOptions, indicatorGroups }) => (
  <div className={cls.topics}>
    {indicatorGroups.length ? (
      <Topic name={'Metals & Mining'} fileOptions={fileOptions} groups={indicatorGroups} />
    ) : (
      <p className={cls.placeholder}>No results found</p>
    )}
  </div>
);
