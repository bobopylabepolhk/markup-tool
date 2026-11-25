import _ from 'lodash';

import cn from 'classnames';
import React, {
  ChangeEvent,
  FC,
  HTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { GenericIndicatorData } from '#/features/Indicators/models/indicators';
import { useOutsideClick } from '#/hooks/useOutsideClick';

import Button from '../Button';
import Loading from '../Loading';
import { SelectOption } from '../Select/Select';
import SelectOptionsMenu from '../SelectOptionsMenu';
import cls from './style.module.css';

type Props = {
  options: SelectOption[];
  onChange: (o: SelectOption) => void;
  onSearch: (s: string) => Promise<SelectOption<GenericIndicatorData>[]>;
  isDisabled?: boolean;
  menuPosition?: 'left' | 'right';
  placeholder?: string;
  withButton?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

export const Autocomplete: FC<Props> = ({
  onChange,
  onSearch,
  options,
  menuPosition,
  className,
  isDisabled,
  placeholder,
  withButton,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [loading, setLoading] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [selectedOption, setSelectedOption] = useState<SelectOption<GenericIndicatorData> | null>(
    null,
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const debouncedOnSearch = useCallback(_.throttle(onSearch, 200), [onSearch]);
  const onTextChange = async (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoading(true);
    setTextValue(e.target.value);

    const result = await debouncedOnSearch(e.target.value);
    if (result) {
      setFilteredOptions(result);
    }
    setLoading(false);
  };

  const focusSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  useEffect(() => {
    if (open) {
      focusSearch();
    } else {
      setFilteredOptions(options);
    }
  }, [open, options]);

  useOutsideClick(containerRef, () => {
    setOpen(false);
  });

  const openMenu = () => {
    if (!isDisabled) {
      setOpen(true);
    }
  };

  return (
    <div className={cn(cls.wrapper, className)} {...props}>
      <div className={cls.autocomplete} ref={containerRef} onClick={openMenu}>
        <input
          className={cls.input}
          type={'text'}
          value={textValue}
          onChange={onTextChange}
          onFocus={openMenu}
          placeholder={placeholder}
        />
        {loading && <Loading size={16} color={'#51B0B8'} className={cls.loading} />}
        <SelectOptionsMenu
          menuPosition={menuPosition}
          onChange={
            withButton
              ? (o) => {
                  setTextValue(o.label);
                  setSelectedOption(o);
                }
              : onChange
          }
          open={open && !!filteredOptions.length}
          setOpen={setOpen}
          options={filteredOptions}
        />
      </div>
      {withButton && (
        <Button
          variant="default"
          mechanic="non-awaited"
          disabled={!selectedOption}
          className={cls.withButton}
          onClick={() => {
            if (selectedOption) {
              onChange(selectedOption);
              setSelectedOption(null);
              setTextValue('');
            }
          }}
        >
          {withButton}
        </Button>
      )}
    </div>
  );
};
