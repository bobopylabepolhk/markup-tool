import { useCallback } from 'react';
import { useTransitionState } from 'react-transition-state';

type OpenTransitionState = {
  initialOpen?: boolean;
  timeout?: number;
};

export function useOpenTransition(state?: OpenTransitionState) {
  const [{ status, isMounted, isEnter }, toggle] = useTransitionState({
    timeout: state?.timeout ?? 314,
    preEnter: true,
    unmountOnExit: true,
    initialEntered: state?.initialOpen ?? false,
  });

  const open = useCallback(() => {
    if (!isEnter) {
      toggle();
    }
  }, [isMounted, toggle]);

  const close = useCallback(() => {
    if (isEnter) {
      toggle();
    }
  }, [isEnter, toggle]);

  return {
    status,
    isOpen: isMounted,
    open,
    close,
    toggle: () => {
      toggle();
    },
  };
}
