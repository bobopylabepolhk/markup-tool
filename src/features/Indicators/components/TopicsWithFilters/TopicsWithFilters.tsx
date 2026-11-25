import React, { FC, useMemo } from 'react';

import { usePdfViewerContext } from '#/features/PdfViewer/context/usePdfViewerContext';
import { PdfData } from '#/features/PdfViewer/models/files';
import { SelectOption } from '#/ui/Select/Select';

import { useIndicatorsContext } from '../../context/useIndicatorsContext';
import { IndicatorGroup, IndicatorWithPages } from '../../models/indicators';
import Filters from '../Filters';
import { Topics } from '../Topics/Topics';

type Props = {
  fileOptions: SelectOption<PdfData>[];
};

export const TopicsWithFilters: FC<Props> = ({ fileOptions }) => {
  const { indicatorGroups } = usePdfViewerContext();
  const { notFound, search } = useIndicatorsContext();
  const counts = useMemo(() => {
    const indicators = indicatorGroups.flatMap((g) => g.indicators);
    const total = indicators.length;
    const notFound = indicators.filter((i) => i.notFound).length;

    return { total, notFound };
  }, [indicatorGroups]);

  const filteredIndicatorGroups = useMemo(() => {
    const result: IndicatorGroup[] = [];
    for (const g of indicatorGroups) {
      let indicators: IndicatorWithPages[] = [];
      if (g.subTopicName.toLowerCase().includes(search.toLowerCase())) {
        result.push(g);
      } else {
        indicators = g.indicators.filter((i) => {
          const notFoundCondition = notFound ? i.notFound : true;
          const searchCondition =
            i.name.toLowerCase().includes(search.toLowerCase()) ||
            i.code.toLowerCase().includes(search.toLowerCase());

          return notFoundCondition && searchCondition;
        });
        if (indicators.length) {
          result.push({ ...g, indicators });
        }
      }
    }

    return result;
  }, [indicatorGroups, notFound, search]);

  return (
    <>
      <Filters notFoundCount={counts.notFound} totalCount={counts.total} />
      <Topics fileOptions={fileOptions} indicatorGroups={filteredIndicatorGroups} />
    </>
  );
};
