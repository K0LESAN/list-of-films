interface QueryParams {
  [key: string]: string | number | boolean | string[] | number[] | boolean[];
}

interface QueryRequestMovie extends QueryParams {
  id: string[] | string;
  limit: number;
  page: number;
  selectFields: string;
  notNullFields: string;
  sortField: string;
  sortType: 1 | -1;
  'rating.kp': string[];
  year: number;
}

interface FetchOptions {
  signal?: AbortSignal | null;
  queryParams?: QueryParams;
}

export type { QueryParams, FetchOptions, QueryRequestMovie };
