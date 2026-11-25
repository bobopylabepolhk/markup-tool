import React, { createContext, use, useCallback, useEffect } from 'react';

import { useNavigationContext } from '#/features/Navigation/context/useNavigationContext';

import type { InputPayload } from './index';
import { initGtm, pushEvent } from './index';

const GtmContext = createContext<(payload: InputPayload) => void>(() => {});

export function GtmProvider({ children }: { children: React.ReactNode }) {
  const { user } = useNavigationContext();
  const gtmId = import.meta.env.VITE_GTM_ID ?? '';
  const debug = import.meta.env.VITE_GTM_DEBUG === 'true';

  const etosoId = user?.id?.toString();

  useEffect(() => {
    initGtm({ gtmId, debug }, { etosoId });
  }, [debug, etosoId, gtmId]);

  const sendEvent = useCallback((payload: InputPayload) => {
    Promise.resolve().then(() => {
      pushEvent(payload);
    });
  }, []);

  return <GtmContext value={sendEvent}>{children}</GtmContext>;
}

export function useGtmEvent() {
  return use(GtmContext);
}
