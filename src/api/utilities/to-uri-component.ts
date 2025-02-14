import type { QueryParams } from '@/types/api.interface';

export function toURIComponent<T extends QueryParams>(params: T): string {
  const uri: string[] = [];

  for (const query in params) {
    if (Array.isArray(params[query])) {
      for (const param of params[query] as string[] | number[] | boolean[]) {
        uri.push(`${query}=${encodeURIComponent(param)}`);
      }
    } else {
      uri.push(
        `${query}=${encodeURIComponent(params[query] as string | number | boolean)}`
      );
    }
  }

  return uri.join('&');
}
