import { useLocation } from 'react-router-dom';

import { LOGIN_PAGE_URL } from '#/api/core/paths';

export function useRedirectToAuth() {
  const { pathname, search } = useLocation();

  return function () {
    window.location.replace(
      `${LOGIN_PAGE_URL}?to=${import.meta.env.BASE_URL}${pathname}${search.length ? search : ''}`,
    );
  };
}
