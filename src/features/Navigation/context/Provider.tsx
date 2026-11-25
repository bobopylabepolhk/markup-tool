import React, { FC, PropsWithChildren, useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { useRedirectToAuth } from '#/hooks/useRedirectToAuth';
import { getBase64Image } from '#/utils/getbase64Image';

import { fileAPI } from '../api/fileApi';
import { userAPI } from '../api/userApi';
import Context, {
  CONTENT_VERIFICATION_IDX,
  INDEX_CHECK_IDX,
  NavigationContext,
} from './navigaitonContext';

type Props = {
  showIndexCheckStep: boolean;
} & PropsWithChildren;

export const NavigationProvider: FC<Props> = ({ children, showIndexCheckStep }) => {
  const redirect = useRedirectToAuth();
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      userAPI.me().catch(() => {
        redirect();
        return undefined;
      }),
  });
  const [avatarBase64Src, setAvatarBase64Src] = useState<string | undefined>();
  useEffect(() => {
    if (!user?.avatarUuid) return;
    fileAPI
      .download(user.avatarUuid)
      .then(({ blob }) => getBase64Image(blob))
      .then((url) => setAvatarBase64Src(url));
  }, [user]);

  const [currentStep, setCurrentStep] = useState<number>(
    showIndexCheckStep ? INDEX_CHECK_IDX : CONTENT_VERIFICATION_IDX,
  );
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showStepper, setShowStepper] = useState(false);

  const value: NavigationContext = {
    completedSteps,
    currentStep,
    setCompletedSteps,
    setCurrentStep,
    avatarBase64Src,
    user,
    showStepper,
    setShowStepper,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
