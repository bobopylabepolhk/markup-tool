import { useEffect } from 'react';

/** Disable scrolling temporarily */
export function useHiddenScroll(hidden: boolean) {
  useEffect(() => {
    document.body.style.overflow = hidden ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [hidden]);
}
