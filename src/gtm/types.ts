export type ActionType = 'page_view' | 'click' | 'impression';

export type ActionTypeProperty =
  | 'apply'
  | 'open'
  | 'download'
  | 'expand'
  | 'delete'
  | 'select'
  | 'share'
  | 'translate'
  | 'submit_feedback'
  | 'send_feedback'
  | 'show_sources'
  | 'remove'
  | 'copy'
  | 'request'
  | 'add'
  | 'close'
  | 'flip_page'
  | 'open_markup_tool';

export interface EventTriggerDataLayer {
  event: 'event_trigger';
  action_type: ActionType;
  action_type_property?: ActionTypeProperty | '';
  widget_type?: string;
  widget_item_type?: string;
  widget_item_name?: string;
  widget_item_index?: string | number;
  block_id?: string;
  canvas_id?: string | number;
  widget_prop?: string;
  event_code: string;
  parent_event_code?: string;
  etoso_id?: string;
  page_type?: string;
}

export type GtmProps = Partial<EventTriggerDataLayer>;

export interface GaInitDataLayer {
  event: 'ga_init';
  ga_user_id?: string;
  ga_session_id?: string;
  etoso_id?: string;
  user_lang?: string;
  page_type?: string;
}

export type DataLayer = EventTriggerDataLayer | GaInitDataLayer;
