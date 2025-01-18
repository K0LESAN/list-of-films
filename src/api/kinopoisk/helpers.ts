import type { FetchOptions } from './kinopoisk.interface';
import { toURIComponent } from '../utilities/to-uri-component';
import { kinopoiskConfig } from './kinopoisk.config';

export async function fetcherKinopoiskAPI<T>(
  endpoint: string,
  { signal, queryParams }: FetchOptions = {}
): Promise<T> {
  const uriComponent: string = toURIComponent(queryParams || {});
  const input: string = `${kinopoiskConfig.getURL()}${endpoint}${uriComponent}`;
  let jsonData: T = {} as T;

  try {
    const response: Response = await fetch(input, {
      method: 'GET',
      headers: {
        'X-API-KEY': import.meta.env.VITE_API_KEY,
        accept: 'application/json'
      },
      signal: signal || null
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    jsonData = await response.json();
  } catch (error: unknown) {
    console.error(error);
  }

  return jsonData;
}
