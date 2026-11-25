import cn from 'classnames';
import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  HTMLAttributes,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import cls from './style.module.css';

type Props = {
  currentPage: number;
  onChangePage: (page: number) => void;
  totalPages: number;
} & HTMLAttributes<HTMLDivElement>;

export const PageCounter: FC<Props> = ({
  currentPage,
  totalPages,
  onChangePage,
  className,
  ...props
}) => {
  const hiddenSpanRef = useRef<HTMLSpanElement | null>(null);

  const getWidth = () => hiddenSpanRef.current?.clientWidth ?? 0;
  const [width, setWidth] = useState<number>(getWidth());
  const [pageNumberToUpdate, setPageNumberToUpdate] = useState<string>(String(currentPage));

  useEffect(() => {
    setPageNumberToUpdate(String(currentPage));
  }, [currentPage]);

  useEffect(() => {
    setWidth(getWidth());
  }, [pageNumberToUpdate]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.length || !Number.isNaN(Number(e.target.value))) {
      setPageNumberToUpdate(e.target.value);
    }
  };

  const catchEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  };

  const onBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      const val = Number(e.target.value);
      if (e.target.value.length && !Number.isNaN(val) && val <= totalPages) {
        onChangePage(val);
      } else {
        setPageNumberToUpdate(String(currentPage));
      }
    },
    [totalPages, currentPage],
  );

  return (
    <div className={cn(cls.pageCounter, className)} {...props}>
      <span className={cls.hiddenSpan} ref={hiddenSpanRef}>
        {pageNumberToUpdate}
      </span>
      <input
        className={cls.pageInput}
        value={pageNumberToUpdate}
        onChange={onChange}
        onBlur={onBlur}
        onKeyUp={catchEnterPress}
        role={'textbox'}
        style={{
          width: `${width}px`,
        }}
      />{' '}
      <span>/ {totalPages}</span>
    </div>
  );
};
