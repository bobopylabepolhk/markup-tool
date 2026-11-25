import React, { useEffect } from 'react';

import {
  CONTENT_VERIFICATION_IDX,
  INDEX_CHECK_IDX,
} from '#/features/Navigation/context/navigaitonContext';
import { useNavigationContext } from '#/features/Navigation/context/useNavigationContext';
import { useGtmEvent } from '#/gtm/gtm-provider';

import ContentVerificationStep from '../ContentVerificationStep';
import IndexCheckStep from '../IndexCheckStep';
import cls from './style.module.css';

export const Main = () => {
  const { currentStep } = useNavigationContext();
  const gtmEvent = useGtmEvent();
  useEffect(() => {
    gtmEvent({
      action_type: 'page_view',
    });
  }, []);

  return (
    <main className={cls.main}>
      {currentStep === INDEX_CHECK_IDX && <IndexCheckStep />}
      {currentStep === CONTENT_VERIFICATION_IDX && <ContentVerificationStep />}
    </main>
  );
};
