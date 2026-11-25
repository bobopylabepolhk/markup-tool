import { camelCase, isArray, isPlainObject, snakeCase } from 'lodash';

import { GenericData } from './request.types';

/** Converts keys of an object recursively to snake_case. */
export const toCamel = (obj: GenericData): GenericData => toCase(obj, camelCase);

/** Converts keys of an object recursively to snake_case. */
export const toSnake = (obj: GenericData): GenericData => toCase(obj, snakeCase);

/** Converts keys of an object recursively to snake_case or camelCase. */
function toCase(obj: GenericData, fn: (str: string) => string): GenericData {
  if (isPlainObject(obj)) {
    const n: Record<string, unknown> = {};
    Object.keys(obj as object).forEach(
      (k) => (n[fn(k)] = toCase((obj as Record<string, unknown>)[k], fn)),
    );
    return n;
  } else if (isArray(obj)) {
    return obj.map((i) => toCase(i, fn));
  }
  return obj;
}

function encodeParam(name: string, value: string) {
  return `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
}

export function toQueryString(
  params: Partial<Record<string, GenericData>>,
  indicateArrayParam = false,
): string {
  const keys = Object.keys(params);
  return keys
    .filter((key) =>
      Array.isArray(params[key]) ? !!(params[key] as unknown[])?.length : !!params[key],
    )
    .map((key) => {
      const paramName = encodeURIComponent(key);

      if (Array.isArray(params[key])) {
        return (
          (params[key] as unknown[])
            ?.map((v) => encodeParam(indicateArrayParam ? `${paramName}[]` : paramName, String(v)))
            .join('&') ?? ''
        );
      }

      return encodeParam(paramName, String(params[key]));
    })
    .join('&');
}
