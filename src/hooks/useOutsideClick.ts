import React, { useEffect } from 'react';

/** Call callback when clicking outside of ref but not on the exceptions. */
function useOutsideClick(
  ref: React.RefObject<HTMLElement | null>,
  callback: () => void,
  exceptedIds: string[] = [],
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOnRef = ref.current?.contains(event.target as Node);
      const clickedOnSomeExcepted = exceptedIds.some((id) =>
        document.getElementById(id)?.contains(event.target as Node),
      );
      if (!clickedOnRef && !clickedOnSomeExcepted) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback, exceptedIds]);
}

export { useOutsideClick };
