import { useEffect } from 'react';

export function useClick(
  ref: React.RefObject<HTMLDivElement | null>,
  callback: () => void,
  disable = false,
) {
  useEffect(() => {
    if (disable) {
      return;
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current?.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, disable]);
}
