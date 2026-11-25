import { AxiosError } from 'axios';

export type HTTPMethod = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'head';
export type HTTPResponseType = 'blob' | 'arraybuffer' | 'document' | 'json' | 'text' | 'stream';

export type GenericData = Record<string, unknown> | unknown[] | unknown;
export type ToCaseFunction = (obj: GenericData) => GenericData;

export enum Backend {
  BAU = 'bau',
  FILE = 'file',
}

export type APIConfiguration = {
  resource: string;
  toRequestCase?: ToCaseFunction;
  toResponseCase?: ToCaseFunction;
  backend?: Backend;
};

export type QueryParams = Record<string, string>;

export type ServerError = AxiosError<{
  detail: { title: string; message: string };
}>;
