import { AxiosInstance, AxiosResponse } from 'axios';
import contentDisposition from 'content-disposition';

import {
  GenericData,
  HTTPMethod,
  HTTPResponseType,
  QueryParams,
  ToCaseFunction,
  toQueryString,
} from '../utilities';

export class APIProvider {
  _axios: AxiosInstance;

  constructor(_axios: AxiosInstance) {
    this._axios = _axios;
  }

  getAll<T>(
    resource: string,
    params: QueryParams,
    toRequestCase: ToCaseFunction,
    toResponseCase: ToCaseFunction,
  ) {
    const snakedParams = toRequestCase(params);
    const query = toQueryString(snakedParams as Record<string, GenericData>);

    return this._axios
      .get(`/${resource}${query.length ? '?' + query : ''}`)
      .then((resp) => toResponseCase(resp.data) as T[]);
  }

  get<T>(
    resource: string,
    id: number,
    params: QueryParams,
    toRequestCase: ToCaseFunction,
    toResponseCase: ToCaseFunction,
  ) {
    const snakedParams = toRequestCase(params);
    const query = toQueryString(snakedParams as Record<string, GenericData>);

    return this._axios
      .get(`/${resource}/${id}${query.length ? '?' + query : ''}`)
      .then((resp) => toResponseCase(resp.data) as T);
  }

  post<TCreate, T>(
    resource: string,
    data: TCreate,
    toRequestCase: ToCaseFunction,
    toResponseCase: ToCaseFunction,
  ) {
    return this._axios
      .post(`/${resource}`, toRequestCase(data))
      .then((resp) => toResponseCase(resp.data) as T);
  }

  put<TUpdate, T>(
    resource: string,
    id: number,
    data: TUpdate,
    toRequestCase: ToCaseFunction,
    toResponseCase: ToCaseFunction,
  ) {
    return this._axios
      .put(`/${resource}/${id}`, toRequestCase(data))
      .then((resp) => toResponseCase(resp.data) as T);
  }

  patch<TUpdate, T>(
    resource: string,
    id: number,
    data: TUpdate,
    toRequestCase: ToCaseFunction,
    toResponseCase: ToCaseFunction,
  ) {
    return this._axios
      .patch(`/${resource}/${id}`, toRequestCase(data))
      .then((resp) => toResponseCase(resp.data) as T);
  }

  remove(resource: string, id: number, toResponseCase: ToCaseFunction): Promise<null> {
    return this._axios
      .delete(`/${resource}/${id}`)
      .then((resp) => toResponseCase(resp.data) as null);
  }

  custom<TRequest, TResponse>(
    endpoint: string,
    method: HTTPMethod,
    data: TRequest | undefined = undefined,
    params: QueryParams = {},
    responseType: HTTPResponseType = 'json',
    toRequestCase: ToCaseFunction,
    toResponseCase: ToCaseFunction,
    signal: AbortSignal | undefined,
  ) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let args: any[];
    if (method === 'get') {
      args = [{ params: toRequestCase(params), responseType, signal }];
    } else {
      args = [toRequestCase(data), { params: toRequestCase(params), responseType, signal }];
    }

    return this._axios[method](`/${endpoint}`, ...args).then(
      (resp) => toResponseCase(resp.data) as TResponse,
    );
  }

  _processFileResponse(resp: AxiosResponse) {
    const contentDisposition = (resp.headers['content-disposition'] ?? '') as string;
    const match = contentDisposition.match(/filename="(.+?)"/);
    const alias = match ? match[1] : null;
    const mediaType = (resp.headers['content-type'] ?? '') as string;
    return {
      alias,
      mediaType,
    };
  }

  _processFileHeadResponse(resp: AxiosResponse) {
    let alias = '';
    if (resp.headers['content-disposition']) {
      const disposition = contentDisposition.parse(resp.headers['content-disposition'] ?? '');
      alias = disposition.parameters.filename || '';
    }

    let mediaType = '';
    if (resp.headers['content-type']) {
      mediaType = resp.headers['content-type'];
    }

    return {
      alias,
      mediaType,
    };
  }

  file(endpoint: string, params: QueryParams, toRequestCase: ToCaseFunction) {
    return this._axios
      .get(`/${endpoint}`, {
        responseType: 'blob',
        params: toRequestCase(params),
      })
      .then((resp) => ({
        blob: resp.data as Blob,
        ...this._processFileResponse(resp),
      }));
  }

  fileHead(endpoint: string) {
    return this._axios.head(`/${endpoint}`).then(this._processFileHeadResponse);
  }

  buf(endpoint: string, params: QueryParams, toRequestCase: ToCaseFunction) {
    return this._axios
      .get(`/${endpoint}`, {
        responseType: 'arraybuffer',
        params: toRequestCase(params),
        headers: {
          Accept: 'application/pdf',
        },
      })
      .then((resp) => ({
        arrayBuffer: resp.data as ArrayBuffer,
        ...this._processFileResponse(resp),
      }));
  }
}
