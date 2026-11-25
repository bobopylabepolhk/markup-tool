// all models are subject to change

export type LinkedPage = {
  highlightId: number;
  pageNumber: number;
  docId: number;
};

export type GenericIndicatorData = {
  id: number;
  name: string;
  code: string;
  description?: string;
};

export type IndicatorConfirmationData = {
  user: string;
  date: Date;
};

export type TopicData = {
  id: number;
  name: string;
  indicators: GenericIndicatorData[];
};

export type IndicatorWithPages = {
  id: number;
  linkedPages: LinkedPage[];
  notFound: boolean;
  name: string;
  code: string;
};

export type IndicatorGroup = {
  id: number;
  confirmation?: IndicatorConfirmationData;
  indicators: IndicatorWithPages[];
  subTopicName: string;
} & GenericIndicatorData;

export type IndicatorToInclude = {
  notFound: boolean;
} & GenericIndicatorData;
