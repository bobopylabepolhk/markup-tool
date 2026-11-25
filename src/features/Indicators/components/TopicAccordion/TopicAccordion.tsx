import cn from 'classnames';
import React, { FC, HTMLAttributes, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Highlighter from 'react-highlight-words';

import { useAnchor } from '#/hooks/useAnchor';
import { useOpenTransition } from '#/hooks/useOpenTransition';
import { useOutsideClick } from '#/hooks/useOutsideClick';
import Arrow from '#/ui/Arrow';
import { Tooltip } from '#/ui/Tooltip/Tooltip';

import cls from './style.module.css';

type TitleProps = { name: string; search?: string; description?: string };

const Title: FC<TitleProps> = ({ name, description, search }) => {
  const { isOpen, open, status, close } = useOpenTransition();
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLParagraphElement | null>(null);

  useOutsideClick(tooltipRef, close);
  useAnchor({ anchorRef: titleRef, target: tooltipRef.current });

  return (
    <div onClick={open} ref={titleRef}>
      {description &&
        createPortal(
          <Tooltip open={isOpen} status={status} className={cls.tooltip} ref={tooltipRef}>
            {description}
          </Tooltip>,
          document.body,
        )}
      <Highlighter
        searchWords={[search ?? '']}
        textToHighlight={name}
        highlightClassName={cls.highlight}
        className={cn(cls.name, description ? cls.withDescription : undefined)}
      />
      {name}
    </div>
  );
};

type TopicAccordionProps = {
  counter?: {
    active: number;
    total: number;
  };
} & HTMLAttributes<HTMLDivElement> &
  PropsWithChildren &
  TitleProps;

export const TopicAccordion: FC<TopicAccordionProps> = ({
  name,
  children,
  description,
  search,
  className,
  counter,
  ...props
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  useEffect(() => {
    if (search) {
      setCollapsed(false);
    }
  }, [search]);

  return (
    <div className={cn(cls.topicAccordion, className)} {...props}>
      <div className={cls.title}>
        <Title name={name} search={search} description={description} />
        <div className={cls.arrowWithCounter}>
          {counter && (
            <div className={cls.counter}>
              {counter.active} / {counter.total}
            </div>
          )}
          <Arrow open={!collapsed} onClick={toggleCollapse} />
        </div>
      </div>
      <div className={cn(cls.content, collapsed ? cls.collapsed : undefined)}>
        <div className={cls.inner}>{children}</div>
      </div>
    </div>
  );
};
