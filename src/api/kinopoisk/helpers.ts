import type { IFetchOptions } from './kinopoisk.interface';
import toURIComponent from '../utilities/toURIComponent';
import kinopoiskConfig from './kinopoisk.config';

async function fetcherKinopoiskAPI<T>(
  endpoint: string,
  { signal = null, queryParams = {} }: IFetchOptions
): Promise<T> {
  const uriComponent: string = toURIComponent(queryParams);
  const input: string = `${kinopoiskConfig.getURL()}${endpoint}${uriComponent}`;
  let jsonData: T = {} as T;

  try {
    const response: Response = await fetch(input, {
      method: 'GET',
      headers: {
        'X-API-KEY': import.meta.env.VITE_API_KEY,
        accept: 'application/json'
      },
      signal
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

export { fetcherKinopoiskAPI };
