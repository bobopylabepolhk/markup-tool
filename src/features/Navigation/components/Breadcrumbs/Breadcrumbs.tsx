import cn from 'classnames';
import React, { FC, HTMLAttributes } from 'react';

import { CONTENT_VERIFICATION_IDX, INDEX_CHECK_IDX } from '../../context/navigaitonContext';
import Step from '../Step';
import cls from './style.module.css';

type Props = {
  currentIndex: number;
  completeIndexes: number[];
  showIndexCheck?: boolean;
  onIndexClick: (index: number) => void;
} & HTMLAttributes<HTMLDivElement>;

export const Breadcrumbs: FC<Props> = ({
  completeIndexes,
  currentIndex,
  className,
  showIndexCheck,
  onIndexClick,
  ...props
}) => {
  return (
    <div className={cn(cls.breadcrumbs, className)} {...props}>
      {showIndexCheck && (
        <>
          <Step
            isActive={currentIndex === INDEX_CHECK_IDX}
            index={INDEX_CHECK_IDX}
            isComplete={completeIndexes.includes(INDEX_CHECK_IDX)}
            name={'Index check'}
            onClick={() => onIndexClick(INDEX_CHECK_IDX)}
          />
          <div className={cls.bar} />
        </>
      )}
      <Step
        isActive={currentIndex === CONTENT_VERIFICATION_IDX}
        index={CONTENT_VERIFICATION_IDX}
        isComplete={completeIndexes.includes(CONTENT_VERIFICATION_IDX)}
        name={'Content verification'}
        onClick={() => onIndexClick(CONTENT_VERIFICATION_IDX)}
      />
    </div>
  );
};
