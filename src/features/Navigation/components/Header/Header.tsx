import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '#/assets/logo.svg';
import { useRedirectToAuth } from '#/hooks/useRedirectToAuth';

import { authAPI } from '../../api/authApi';
import { CONTENT_VERIFICATION_IDX, INDEX_CHECK_IDX } from '../../context/navigaitonContext';
import { useNavigationContext } from '../../context/useNavigationContext';
import { Avatar } from '../Avatar/Avatar';
import Back from '../Back';
import Breadcrumbs from '../Breadcrumbs';
import cls from './style.module.css';

type Props = {
  showBack?: boolean;
};

export const Header: FC<Props> = ({ showBack }) => {
  const {
    avatarBase64Src,
    completedSteps,
    currentStep,
    user,
    showStepper,
    setCompletedSteps,
    setCurrentStep,
  } = useNavigationContext();
  const navigate = useNavigate();
  const redirect = useRedirectToAuth();

  const onIndexClick = (index: number) => {
    if (index === CONTENT_VERIFICATION_IDX && !completedSteps.length) {
      setCompletedSteps([INDEX_CHECK_IDX]);
    }
    setCurrentStep(index);
  };

  const onBack = () => {
    navigate(-1);
  };

  const onLogOut = () => {
    authAPI.logout().then(() => redirect());
  };

  return (
    <header className={cls.header}>
      <div className={cls.leftBlock}>
        <img className={cls.logo} src={logo} />
        {showBack && <Back onBack={onBack} />}
      </div>
      {showStepper && (
        <Breadcrumbs
          completeIndexes={completedSteps}
          currentIndex={currentStep}
          onIndexClick={onIndexClick}
        />
      )}
      <Avatar
        avatarBase64={avatarBase64Src}
        userName={user?.fullName ?? ''}
        userRole={user?.businessRole.name ?? ''}
        onLogOut={onLogOut}
      />
    </header>
  );
};
