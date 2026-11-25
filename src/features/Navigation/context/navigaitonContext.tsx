import { createContext } from 'react';

import { User } from '../api/models';

export const INDEX_CHECK_IDX = 1;
export const CONTENT_VERIFICATION_IDX = 2;

export type NavigationContext = {
  currentStep: number;
  showStepper: boolean;
  completedSteps: number[];
  setShowStepper: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setCompletedSteps: React.Dispatch<React.SetStateAction<number[]>>;
  avatarBase64Src?: string;
  user?: User;
};

export default createContext<NavigationContext>({
  completedSteps: [],
  currentStep: 1,
  showStepper: true,
  setShowStepper: function () {
    throw new Error('Function not implemented.');
  },
  setCompletedSteps: function () {
    throw new Error('Function not implemented.');
  },
  setCurrentStep: function () {
    throw new Error('Function not implemented.');
  },
});
