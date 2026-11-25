import React from 'react';

import StandardTabs from '#/features/Indicators/components/StandardTabs';
import TopicsWithFilters from '#/features/Indicators/components/TopicsWithFilters';
import DocsAndIndicatorsLayout from '#/features/Navigation/components/DocsAndIndicatorsLayout';
import Container from '#/features/PdfViewer/components/Container';
import socionext from '#/features/PdfViewer/test-pdfs/AD00-00006-1E.pdf';
import alphabet from '#/features/PdfViewer/test-pdfs/Alphabet Inc. (Google) Sustainability Report 2024-1.pdf';
import ameren from '#/features/PdfViewer/test-pdfs/Ameren Annual Report 2022.pdf';
import diageo from '#/features/PdfViewer/test-pdfs/Diageo Annual Report 2023.pdf';
import helenOfTroy from '#/features/PdfViewer/test-pdfs/Helen of Troy Ltd Sustainability Report 2023.pdf';
import msGroup from '#/features/PdfViewer/test-pdfs/Marks & Spencer Group PLC Sustainability Report 2024-1.pdf';
import pepsico from '#/features/PdfViewer/test-pdfs/PEPSICO Annual Report 2022.pdf';
import blueApron from '#/features/PdfViewer/test-pdfs/blue apron.pdf';
import ubs from '#/features/PdfViewer/test-pdfs/hidden text.pdf';
import indexFile from '#/features/PdfViewer/test-pdfs/index.pdf';
import useTabs from '#/hooks/useTabs';
import { TabData } from '#/hooks/useTabs/types';

import cls from './style.module.css';

const fileOptions = [
  { value: { file: indexFile, id: 10 }, label: 'index.pdf' },
  {
    value: { file: helenOfTroy, id: 1 },
    label: 'Helen of Troy Ltd Sustainability Report 2023.pdf',
  },
  { value: { file: socionext, id: 2 }, label: 'Socionext Inc. ESG Report 2023.pdf' },
  {
    value: { file: alphabet, id: 3 },
    label: 'Alphabet Inc. (Google) Sustainability Report 2024.pdf',
  },
  {
    value: { file: msGroup, id: 4 },
    label: 'Marks & Spencer Group PLC Sustainability Report 2024.pdf',
  },
  { value: { file: blueApron, id: 5 }, label: 'Blue Apron Annual Report 2022.pdf' },
  { value: { file: diageo, id: 6 }, label: 'Diageo Annual Report 2023.pdf' },
  { value: { file: pepsico, id: 7 }, label: 'PEPSICO Annual Report 2022.pdf' },
  { value: { file: ameren, id: 8 }, label: 'Ameren Annual Report 2022.pdf' },
  { value: { file: ubs, id: 9 }, label: 'UBS Sustainability Report 2023.pdf' },
];

const tabs: TabData[] = [
  {
    id: '1',
    name: 'SASB',
    content: <TopicsWithFilters fileOptions={fileOptions} />,
  },
  {
    id: '2',
    name: 'GRI',
    content: <TopicsWithFilters fileOptions={fileOptions} />,
  },
];

export const ContentVerificationStep = () => {
  const { activeTabId, onChange, render } = useTabs('1', tabs, 'name');

  return (
    <DocsAndIndicatorsLayout
      Docs={<Container fileOptions={fileOptions} enableContextMenu />}
      Indicators={
        <div className={cls.container}>
          <h2 className={cls.companyName}>company name</h2>
          <StandardTabs activeId={activeTabId} onChangeTab={onChange} tabs={tabs} />
          {render()}
        </div>
      }
    />
  );
};
