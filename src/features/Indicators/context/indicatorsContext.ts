import { createContext } from 'react';

import { IndicatorConfirmationData } from '../models/indicators';

export type IndicatorContext = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  notFound: boolean;
  setNotFound: React.Dispatch<React.SetStateAction<boolean>>;
  confirmations: Record<number, IndicatorConfirmationData | undefined>;
  setConfirmations: React.Dispatch<
    React.SetStateAction<Record<number, IndicatorConfirmationData | undefined>>
  >;
};

export default createContext<IndicatorContext>({
  search: '',
  setSearch: function () {
    throw new Error('Function not implemented.');
  },
  notFound: false,
  setNotFound: function () {
    throw new Error('Function not implemented.');
  },
  confirmations: {},
  setConfirmations: function () {
    throw new Error('Function not implemented.');
  },
});
