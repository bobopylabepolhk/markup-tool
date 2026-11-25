import moment from 'moment';

import cn from 'classnames';
import React, { FC, HTMLAttributes, useRef } from 'react';
import Highlighter from 'react-highlight-words';
import { useSearchParams } from 'react-router-dom';

import Check from '#/assets/check-confirmed-indicator.svg?react';
import type {
  GenericIndicatorData,
  IndicatorConfirmationData,
  IndicatorGroup,
} from '#/features/Indicators/models/indicators';
import { useGtmEvent } from '#/gtm/gtm-provider';
import { useOpenTransition } from '#/hooks/useOpenTransition';
import { useOutsideClick } from '#/hooks/useOutsideClick';
import { TAB_PARAM } from '#/hooks/useTabs/useTabs';
import Button from '#/ui/Button';
import { Tooltip } from '#/ui/Tooltip/Tooltip';

import NotFoundLabel from '../NotFoundLabel';
import cls from './style.module.css';

type GroupTitleProps = {
  hasCheck: boolean;
  confirmation?: IndicatorConfirmationData;
} & Omit<GenericIndicatorData, 'id'>;

const GroupTitle: FC<GroupTitleProps> = ({ code, name, description, hasCheck, confirmation }) => {
  const {
    isOpen: isDescriptionTooltipOpen,
    open: openDescriptionTooltip,
    status: descriptionStatus,
    close: closeDescriptionTooltip,
  } = useOpenTransition();

  const tooltipRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(tooltipRef, closeDescriptionTooltip);

  const {
    isOpen: isConfirmationTooltipOpen,
    open: openConfirmationTooltip,
    status: confirmationTooltipStatus,
    close: closeConfirmationTooltip,
  } = useOpenTransition();

  return (
    <div className={cls.groupTitle}>
      <span className={cls.code}>{code}</span>{' '}
      <span className={cls.tooltipContainer}>
        {description && (
          <Tooltip
            open={isDescriptionTooltipOpen}
            status={descriptionStatus}
            className={cls.descriptionTooltip}
            ref={tooltipRef}
          >
            {description}
          </Tooltip>
        )}
        <span
          className={cn(cls.name, description ? cls.withDescription : undefined)}
          onClick={openDescriptionTooltip}
        >
          {name}
          {hasCheck && (
            <span
              className={cn(cls.tooltipContainer, cls.check)}
              onMouseOver={openConfirmationTooltip}
              onMouseLeave={closeConfirmationTooltip}
            >
              <Check />
              {confirmation && (
                <Tooltip
                  className={cls.confirmationTooltip}
                  open={isConfirmationTooltipOpen}
                  status={confirmationTooltipStatus}
                >
                  Confirmed by <b>{confirmation.user}</b> on{' '}
                  {moment(confirmation.date).format('D MMMM')}
                </Tooltip>
              )}
            </span>
          )}
        </span>
      </span>
    </div>
  );
};

type IndicatorWithPagesProps = {
  indicatorGroup: IndicatorGroup;
  onPageClick: (docId: number, highlightId: number) => void;
  activePage?: number;
  onNewHighlightClick?: (indicatorId: number) => () => void;
  currentDocId?: number;
  setIndicatorBlockedState: (isConfirmed: boolean, groupId: number) => () => void;
  confirmationData?: IndicatorConfirmationData;
  enableConfirmations: boolean;
  activeIndicatorId?: number | null;
  search: string;
} & HTMLAttributes<HTMLDivElement>;

export const IndicatorWithPages: FC<IndicatorWithPagesProps> = ({
  indicatorGroup,
  search,
  onPageClick,
  activePage,
  onNewHighlightClick,
  currentDocId,
  confirmationData,
  setIndicatorBlockedState,
  activeIndicatorId,
  enableConfirmations,
  className,
  ...props
}) => {
  const gtmEvent = useGtmEvent();
  const [params] = useSearchParams();

  return (
    <div
      className={cn(
        cls.indicator,
        className,
        enableConfirmations ? (confirmationData ? cls.completed : undefined) : undefined,
      )}
      {...props}
    >
      <div className={cls.titleWithButton}>
        <GroupTitle
          hasCheck={enableConfirmations ? !!confirmationData : false}
          {...indicatorGroup}
        />
        {enableConfirmations ? (
          confirmationData ? (
            <button
              className={cls.editBtn}
              onClick={setIndicatorBlockedState(false, indicatorGroup.id)}
            >
              Edit
            </button>
          ) : (
            <Button
              className={cls.confirmBtn}
              variant={'contrast'}
              onClick={setIndicatorBlockedState(true, indicatorGroup.id)}
            >
              Confirm
            </Button>
          )
        ) : null}
      </div>
      <ul className={cls.subIndicators}>
        {indicatorGroup.indicators.map((i) => {
          const isActiveIndicator = activeIndicatorId === i.id;
          const showNotFoundLabel = i.notFound && !i.linkedPages.length;

          return (
            <li key={i.name}>
              <div className={cls.itemContent}>
                <Highlighter
                  className={cls.highlightedText}
                  highlightClassName={cls.highlight}
                  searchWords={[search]}
                  textToHighlight={`${i.code} ${i.name}`}
                />

                <span className={cls.pageNums}>
                  {showNotFoundLabel && (
                    <NotFoundLabel
                      isActiveSelection={isActiveIndicator}
                      // onFindAndHighlight={
                      //   onNewHighlightClick ? onNewHighlightClick(i.id) : undefined
                      // }
                    />
                  )}
                  {i.linkedPages.map((p) => (
                    <span
                      key={p.highlightId}
                      onClick={() => {
                        onPageClick(p.docId, p.highlightId);
                        gtmEvent({
                          action_type: 'click',
                          action_type_property: 'select',
                          widget_type: 'builder_reference_icon',
                          widget_prop: params.get(TAB_PARAM) ?? undefined,
                        });
                      }}
                      className={cn(
                        cls.page,
                        currentDocId && activePage === p.pageNumber && p.docId === currentDocId
                          ? cls.active
                          : undefined,
                      )}
                    >
                      {p.pageNumber}
                    </span>
                  ))}
                  {onNewHighlightClick && !confirmationData && !i.notFound && (
                    <span
                      className={cn(
                        cls.page,
                        cls.newHighlight,
                        isActiveIndicator ? cls.active : undefined,
                      )}
                      onClick={onNewHighlightClick(i.id)}
                    >
                      +
                    </span>
                  )}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
