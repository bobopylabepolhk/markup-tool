import cn from 'classnames';
import React, { FC, HTMLAttributes } from 'react';

import { usePdfViewerContext } from '#/features/PdfViewer/context/usePdfViewerContext';
import { PdfData } from '#/features/PdfViewer/models/files';
import { SelectOption } from '#/ui/Select/Select';
import { scrollToElement } from '#/utils/scrollToElement';

import { useIndicatorsContext } from '../../context/useIndicatorsContext';
import { IndicatorConfirmationData, IndicatorGroup } from '../../models/indicators';
import { IndicatorWithPages } from '../IndicatorWithPages/IndicatorWithPages';
import TopicAccordion from '../TopicAccordion';
import cls from './style.module.css';

type Props = {
  groups: IndicatorGroup[];
  name: string;
  counter?: {
    active: number;
    total: number;
  };

  fileOptions: SelectOption<PdfData>[];
} & HTMLAttributes<HTMLDivElement>;

const MOCK_CONFIRMATION_DATA: IndicatorConfirmationData = {
  date: new Date(),
  user: 'danisivayev',
};

export const Topic: FC<Props> = ({ groups, name, counter, fileOptions, className }) => {
  const {
    currentFile,
    setCurrentFile,
    highlightRefs,
    currentPage,
    setEditMode,
    setIndicatorIdToAppendTo,
    indicatorIdToAppendTo,
    enableConfirmationFlow,
    enableHighlightEditing,
  } = usePdfViewerContext();
  const { confirmations, setConfirmations, search } = useIndicatorsContext();

  return (
    <div className={cn(cls.topic, className)}>
      <h2>{name}</h2>
      {groups.map((g) => (
        <TopicAccordion
          key={`${g.code}-${g.name}`}
          name={g.subTopicName}
          search={search}
          counter={counter}
        >
          <IndicatorWithPages
            indicatorGroup={g}
            search={search}
            enableConfirmations={enableConfirmationFlow}
            confirmationData={confirmations[g.id]}
            onNewHighlightClick={
              enableHighlightEditing
                ? (indicatorId) => () => {
                    setIndicatorIdToAppendTo(indicatorId);
                    setEditMode(true);
                  }
                : undefined
            }
            setIndicatorBlockedState={(isConfirmed, groupId) => () => {
              if (isConfirmed) {
                setConfirmations((prev) => ({ ...prev, [groupId]: MOCK_CONFIRMATION_DATA }));
              } else {
                setConfirmations((prev) => ({ ...prev, [groupId]: undefined }));
              }
            }}
            currentDocId={currentFile?.value.id}
            activePage={currentPage}
            activeIndicatorId={indicatorIdToAppendTo}
            onPageClick={(docId, highlightId) => {
              if (currentFile && docId !== currentFile.value.id) {
                const f = fileOptions.find((o) => o.value.id === docId);
                if (f) {
                  setCurrentFile(f);
                  setTimeout(() => {
                    scrollToElement(highlightRefs?.current?.[highlightId], true);
                  }, 1000);
                }
              } else {
                scrollToElement(highlightRefs?.current?.[highlightId], true);
              }
            }}
          />
        </TopicAccordion>
      ))}
    </div>
  );
};
