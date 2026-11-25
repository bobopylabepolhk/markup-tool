import React, { FC, PropsWithChildren, useState } from 'react';

import { IndicatorConfirmationData } from '../models/indicators';
import Context, { IndicatorContext } from './indicatorsContext';

export const IndicatorsContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [confirmations, setConfirmations] = useState<
    Record<number, IndicatorConfirmationData | undefined>
  >({});

  const value: IndicatorContext = {
    search,
    setSearch,
    notFound,
    setNotFound,
    confirmations,
    setConfirmations,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
