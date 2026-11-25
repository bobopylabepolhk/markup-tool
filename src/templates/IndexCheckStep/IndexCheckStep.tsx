import React from 'react';

import SelectableIndicator from '#/features/Indicators/components/SelectableIndicator';
import StandardTabs from '#/features/Indicators/components/StandardTabs';
import TopicAccordion from '#/features/Indicators/components/TopicAccordion';
import DocsAndIndicatorsLayout from '#/features/Navigation/components/DocsAndIndicatorsLayout';
import {
  CONTENT_VERIFICATION_IDX,
  INDEX_CHECK_IDX,
} from '#/features/Navigation/context/navigaitonContext';
import { useNavigationContext } from '#/features/Navigation/context/useNavigationContext';
import Container from '#/features/PdfViewer/components/Container';
import indexFile from '#/features/PdfViewer/test-pdfs/index.pdf';
import useTabs from '#/hooks/useTabs';
import { TabData } from '#/hooks/useTabs/types';
import Button from '#/ui/Button';
import FilterButton from '#/ui/FilterButton';

import cls from './style.module.css';

const tabs: TabData[] = [
  {
    id: '1',
    name: 'GRI',
    content: (
      <>
        <FilterButton text="Not found" metric="12 (43%)" />
        <h2 className={cls.h2}>topic name</h2>
        <TopicAccordion
          name={'greenhouse gas emissions'}
          description={'topic description'}
          counter={{ active: 7, total: 10 }}
        >
          <SelectableIndicator
            code={'123-1'}
            name={'indicator name'}
            description={'indicator description'}
            isSelected={true}
            onChange={() => undefined}
          />
          <SelectableIndicator
            code={'123-2'}
            name={'indicator name 2'}
            description={'indicator description'}
            isSelected={true}
            onChange={() => undefined}
          />

          <SelectableIndicator
            code={'123-3'}
            name={'indicator name'}
            description={'indicator description'}
            isSelected={false}
            onChange={() => undefined}
          />
        </TopicAccordion>
      </>
    ),
  },

  {
    id: '2',
    name: 'SASB',
    content: (
      <>
        <FilterButton text="Not found" metric="12 (43%)" />
        <h2 className={cls.h2}>topic name</h2>
        <TopicAccordion
          name={'greenhouse gas emissions'}
          description={'topic description'}
          counter={{ active: 7, total: 10 }}
        >
          <SelectableIndicator
            code={'sasb123-1'}
            name={'indicator name'}
            description={'indicator description'}
            isSelected={true}
            onChange={() => undefined}
          />
          <SelectableIndicator
            code={'sasb123-2'}
            name={'indicator name 2'}
            description={'indicator description'}
            isSelected={true}
            onChange={() => undefined}
          />

          <SelectableIndicator
            code={'sasb123-3'}
            name={'indicator name'}
            description={'indicator description'}
            isSelected={false}
            onChange={() => undefined}
          />
        </TopicAccordion>
      </>
    ),
  },
];

const fileOptions = [{ value: { file: indexFile, id: 10 }, label: 'index.pdf' }];

export const IndexCheckStep = () => {
  const { activeTabId, onChange, render } = useTabs('1', tabs);
  const { setCurrentStep, setCompletedSteps } = useNavigationContext();
  const onContinue = () => {
    setCurrentStep(CONTENT_VERIFICATION_IDX);
    setCompletedSteps([INDEX_CHECK_IDX]);
  };

  return (
    <DocsAndIndicatorsLayout
      Docs={<Container fileOptions={fileOptions} />}
      Indicators={
        <div className={cls.container}>
          <h1 className={cls.h1}>template test</h1>
          <StandardTabs activeId={activeTabId} onChangeTab={onChange} tabs={tabs} />
          {render()}
          <Button
            variant="contrast"
            mechanic="non-awaited"
            onClick={onContinue}
            className={cls.continueBtn}
          >
            Continue
          </Button>
        </div>
      }
    />
  );
};
