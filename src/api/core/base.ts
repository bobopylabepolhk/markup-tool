import axios, { AxiosError } from 'axios';

import {
  APIConfiguration,
  Backend,
  HTTPMethod,
  HTTPResponseType,
  QueryParams,
  toCamel,
  toSnake,
} from '../utilities';
import { LOGIN_PAGE_URL, apiURL } from './paths';
import { APIProvider } from './provider';

export const backendURLs: Record<Backend, string> = {
  [Backend.BAU]: apiURL.bau,
  [Backend.FILE]: apiURL.file,
};

type BasicFile = {
  alias: string | null;
  mediaType: string;
};

type BlobResponse = BasicFile & {
  blob: Blob;
};

type ArrayBufferResponse = BasicFile & {
  arrayBuffer: ArrayBuffer;
};

const axiosResponseErrorInterceptor = (error: AxiosError<{ detail: string }>) => {
  if (error.status === 401) {
    const redirectUrl = `${LOGIN_PAGE_URL}?to=${import.meta.env.BASE_URL}`;
    window.location.href = redirectUrl;
  }

  return Promise.reject(error);
};

export class APICore<T, TCreate = T, TUpdate = T> {
  apiProvider: APIProvider;

  getAll: (params?: QueryParams) => Promise<T[]>;

  get: (id: number, params?: QueryParams) => Promise<T>;

  post: (data: TCreate) => Promise<T>;

  put: (id: number, data: TUpdate) => Promise<T>;

  patch: (id: number, data: TUpdate) => Promise<T>;

  remove: (id: number) => Promise<null>;

  custom: <TRequest = object, TResponse = object>(
    endpoint: string,
    method: HTTPMethod,
    data?: TRequest,
    params?: QueryParams,
    responseType?: HTTPResponseType,
    signal?: AbortSignal,
  ) => Promise<TResponse>;

  file: (endpoint: string, params?: QueryParams) => Promise<BlobResponse>;

  fileHead: (endpoint: string) => Promise<{ alias: string; mediaType: string }>;

  buf: (endpoint: string, params?: QueryParams) => Promise<ArrayBufferResponse>;

  constructor({
    resource,
    toRequestCase = toSnake,
    toResponseCase = toCamel,
    backend = Backend.BAU,
  }: APIConfiguration) {
    const _axios = axios.create({ baseURL: backendURLs[backend], withCredentials: true });
    _axios.interceptors.response.use(null, axiosResponseErrorInterceptor);

    this.apiProvider = new APIProvider(_axios);

    this.getAll = (params: QueryParams = {}) => {
      return this.apiProvider.getAll<T>(resource, params, toRequestCase, toResponseCase);
    };

    this.get = (id: number, params: QueryParams = {}) => {
      return this.apiProvider.get<T>(resource, id, params, toRequestCase, toResponseCase);
    };

    this.post = (data: TCreate) => {
      return this.apiProvider.post<TCreate, T>(resource, data, toRequestCase, toResponseCase);
    };

    this.put = (id: number, data: TUpdate) => {
      return this.apiProvider.put<TUpdate, T>(resource, id, data, toRequestCase, toResponseCase);
    };

    this.patch = (id: number, data: TUpdate) => {
      return this.apiProvider.patch<TUpdate, T>(resource, id, data, toRequestCase, toResponseCase);
    };

    this.remove = (id: number) => {
      return this.apiProvider.remove(resource, id, toResponseCase);
    };

    this.custom = <TRequest, TResponse>(
      endpoint: string,
      method: HTTPMethod,
      data?: TRequest,
      params?: QueryParams,
      responseType?: HTTPResponseType,
      signal?: AbortSignal,
    ) => {
      return this.apiProvider.custom<TRequest, TResponse>(
        `${resource}${endpoint}`,
        method,
        data,
        params,
        responseType,
        toRequestCase,
        toResponseCase,
        signal,
      );
    };

    this.file = (endpoint: string, params: QueryParams = {}) => {
      return this.apiProvider.file(`${resource}${endpoint}`, params, toRequestCase);
    };

    this.fileHead = (endpoint: string) => {
      return this.apiProvider.fileHead(`${resource}${endpoint}`);
    };

    this.buf = (endpoint: string, params: QueryParams = {}) => {
      return this.apiProvider.buf(`${resource}${endpoint}`, params, toRequestCase);
    };
  }
}
