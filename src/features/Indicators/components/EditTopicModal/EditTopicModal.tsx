import React, { FC, useEffect, useMemo, useState } from 'react';

import Autocomplete from '#/ui/Autocomplete';
import Button from '#/ui/Button';
import Input from '#/ui/Input';
import Modal from '#/ui/Modal';
import { SelectOption } from '#/ui/Select/Select';

import { GenericIndicatorData, TopicData } from '../../models/indicators';
import RemovableIndicatorCard from '../RemovableIndicatorCard';
import cls from './style.module.css';

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
  topic: TopicData;
  selectedIndicators: GenericIndicatorData[];
  onSave: (topic: TopicData) => Promise<void>;
};

export const EditTopicModal: FC<Props> = ({ open, setOpen, topic, selectedIndicators, onSave }) => {
  const [topicName, setTopicName] = useState('');
  const [indicators, setIndicators] = useState<GenericIndicatorData[]>([]);
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTopicName(topic.name);
  }, [topic.id]);

  useEffect(() => {
    setIndicators(selectedIndicators);
  }, [selectedIndicators]);

  const indicatorOptions: SelectOption<GenericIndicatorData>[] = useMemo(
    () => topic.indicators.map((i) => ({ value: i, label: `${i.code} ${i.name}` })),
    [topic.indicators],
  );

  return (
    <Modal open={open} onClose={onClose} contentHeight={380} contentWidth={584}>
      <div className={cls.container}>
        <div>
          <Input
            labelText={'Material topic name'}
            onChange={(v) => setTopicName(v)}
            className={cls.mtName}
            value={topicName}
          />

          <p className={cls.indicatorsLabel}>Indicators</p>
          <Autocomplete
            options={indicatorOptions}
            onChange={(o) => {
              setIndicators((prev) => [...prev, o.value]);
            }}
            withButton="Add"
            onSearch={(s) =>
              Promise.resolve(
                indicatorOptions.filter((o) => o.label.toLowerCase().includes(s.toLowerCase())),
              )
            }
          />

          {indicators.length ? (
            <div className={cls.indicatorsList}>
              {indicators.map((i) => (
                <RemovableIndicatorCard
                  key={i.id}
                  indicator={i}
                  onRemove={() => {
                    setIndicators((prev) => prev.filter(({ id }) => id !== i.id));
                  }}
                />
              ))}
            </div>
          ) : (
            <p className={cls.noIndicators}>No added indicators yet</p>
          )}
        </div>
        <Button
          variant="contrast"
          mechanic="awaited"
          onClick={() => onSave(topic)}
          className={cls.save}
        >
          Save
        </Button>
      </div>
    </Modal>
  );
};
