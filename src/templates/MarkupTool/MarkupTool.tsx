import React, { FC } from 'react';

import { IndicatorsContextProvider } from '#/features/Indicators/context/Provider';
import Header from '#/features/Navigation/components/Header';
import { NavigationProvider } from '#/features/Navigation/context/Provider';
import { PdfViewerContextProvider } from '#/features/PdfViewer/context/Provider';
import { GtmProvider } from '#/gtm/gtm-provider';
import { setupPdfJs } from '#/pdfjs';

import Main from '../Main';

setupPdfJs();

type MarkupToolFeatures = {
  enableHighlightEditing: boolean;
  hasIndexCheckStep: boolean;
  enableConfirmationFlow: boolean;
};

const defaultFeatures: MarkupToolFeatures = {
  enableHighlightEditing: false,
  enableConfirmationFlow: false,
  hasIndexCheckStep: false,
};

type MarkupToolConfig = {
  features?: MarkupToolFeatures;
};

export const MarkupTool: FC<MarkupToolConfig> = ({ features = defaultFeatures }) => {
  return (
    <>
      <GtmProvider>
        <PdfViewerContextProvider
          enableHighlightEditing={features.enableHighlightEditing}
          enableConfirmationFlow={features.enableConfirmationFlow}
        >
          <IndicatorsContextProvider>
            <NavigationProvider showIndexCheckStep={features.hasIndexCheckStep}>
              <Header showBack />
              <Main />
            </NavigationProvider>
          </IndicatorsContextProvider>
        </PdfViewerContextProvider>
      </GtmProvider>
    </>
  );
};
