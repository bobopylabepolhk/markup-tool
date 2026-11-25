import { MARKUP_TOOL_PAGE_TYPE } from '.';
import type { ActionTypeProperty, EventTriggerDataLayer } from './types';

interface EventCodeParts {
  widget_type?: string;
  widget_item_type?: string;
  action_type_property?: ActionTypeProperty | '';
  widget_item_index?: string | number;
}

function segment(val: string | number | undefined): string {
  if (val === undefined || val === '') return '0';
  return String(val);
}

export function buildEventCode(parts: EventCodeParts): string {
  const { widget_type, widget_item_type, action_type_property, widget_item_index } = parts;
  return [
    MARKUP_TOOL_PAGE_TYPE,
    segment(widget_type),
    segment(widget_item_type),
    segment(action_type_property),
    segment(widget_item_index),
  ].join('.');
}

export function createEventTrigger(
  data: Omit<EventTriggerDataLayer, 'event' | 'event_code'> & {
    event_code?: string;
  },
): EventTriggerDataLayer {
  const event_code = data.event_code ?? buildEventCode(data);

  return {
    event: 'event_trigger',
    ...data,
    event_code,
  };
}
