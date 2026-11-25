import { parse as parseCookie } from 'cookie';
import TagManager from 'react-gtm-module';

import type { DataLayer, EventTriggerDataLayer } from './types';
import { buildEventCode, createEventTrigger } from './utils';

export interface InitializeArgs {
  gtmId: string;
  etosoId?: string;
  debug?: boolean;
}

export interface InitializeEventArgs {
  etosoId?: string;
}

export const MARKUP_TOOL_PAGE_TYPE = 'markup';
let debugEnabled = false;
let initialized = false;

export function initGtm(args: InitializeArgs, initEventArgs: InitializeEventArgs) {
  if (typeof window === 'undefined' || initialized) return;
  const { debug, ...tagManagerArgs } = args;
  debugEnabled = Boolean(debug);

  TagManager.initialize(tagManagerArgs);

  const cookies = parseCookie(document.cookie);

  const gaUserId = cookies._ga;
  const gaSessionCookieKey = Object.keys(cookies).find((k) => k.startsWith('_ga_'));
  const gaSessionId = gaSessionCookieKey ? (cookies[gaSessionCookieKey] as string) : undefined;

  TagManager.dataLayer({
    dataLayer: {
      event: 'ga_init',
      ga_user_id: gaUserId,
      ga_session_id: gaSessionId,
      etoso_id: initEventArgs.etosoId,
      page_type: MARKUP_TOOL_PAGE_TYPE,
      user_lang: navigator.language,
    },
  });
  initialized = true;
}

export type EventPayload = DataLayer;
type InputPayload =
  | EventPayload
  | (Omit<EventTriggerDataLayer, 'event' | 'event_code'> & {
      event?: 'event_trigger';
      event_code?: string;
    });

export function pushEvent(payload: InputPayload) {
  if (typeof window === 'undefined' || !initialized) return;

  // If event field missing, assume event_trigger
  let normalized: EventPayload;

  if ('event' in payload) {
    normalized = payload as EventPayload;
  } else {
    // Treat as EventTrigger without event and possibly without event_code
    const partial = payload as Omit<EventTriggerDataLayer, 'event'>;
    normalized = {
      event: 'event_trigger',
      ...partial,
    } as EventTriggerDataLayer;
  }

  // Auto-generate event_code if needed
  if (normalized.event === 'event_trigger') {
    const evt = normalized as EventTriggerDataLayer;
    if (!evt.event_code || evt.event_code === '') {
      normalized = {
        ...evt,
        event_code: buildEventCode(evt),
      };
    }
  }

  normalized = { ...normalized, page_type: MARKUP_TOOL_PAGE_TYPE };

  if (debugEnabled || localStorage.getItem('gtm-debug') === 'true') {
    const orderedKeys = [
      'page_type',
      'action_type',
      'action_type_property',
      'widget_type',
      'widget_item_type',
      'block_id',
      'widget_item_name',
      'widget_item_index',
      'widget_prop',
      'event_code',
      'canvas_id',
    ] as const;

    const orderedEntry: Map<string, unknown> = new Map();
    const normalizedRecord = normalized as unknown as Record<string, unknown>;

    for (const key of orderedKeys) {
      if (key in normalizedRecord) {
        orderedEntry.set(key, normalizedRecord[key]);
      }
    }

    for (const key in normalizedRecord) {
      if (!orderedKeys.includes(key as (typeof orderedKeys)[number])) {
        orderedEntry.set(key, normalizedRecord[key]);
      }
    }

    const tableData = Object.fromEntries(orderedEntry);

    console.log('GTM event');
    console.table(tableData);
  }

  TagManager.dataLayer({ dataLayer: normalized });
}

export function setGtmDebug(enabled: boolean) {
  debugEnabled = enabled;
}

export { buildEventCode, createEventTrigger };
export type { InputPayload };
