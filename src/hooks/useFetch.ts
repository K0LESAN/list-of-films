import { FetchOptions, QueryParams } from '@/types/api.interface';
import { useEffect, useState } from 'react';

function useFetch<T>(
  fetcher: ((fetchOptions: FetchOptions) => Promise<T>) | string,
  queryParams: QueryParams = {},
  ...depedencies: unknown[]
): [T | undefined, boolean] {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller: AbortController = new AbortController();
    const request: () => Promise<void> = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const data: T | Response =
          typeof fetcher === 'function'
            ? await fetcher({
                signal: controller.signal,
                queryParams
              })
            : await fetch(fetcher, {
                method: 'GET',
                signal: controller.signal,
                headers: {
                  accept: 'application/json'
                }
              });

        setData(data instanceof Response ? await data.json() : data);
      } catch (error: unknown) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    request();

    return (): void => {
      controller.abort('Clear useFetch!');
    };
  }, depedencies);

  return [data, isLoading];
}

export default useFetch;
