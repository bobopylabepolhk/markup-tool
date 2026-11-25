import { useContext } from 'react';

import navigationContext from './navigaitonContext';

export const useNavigationContext = () => useContext(navigationContext);
