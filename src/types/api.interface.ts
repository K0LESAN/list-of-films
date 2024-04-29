interface IQueryParams {
  [key: string]: string | number | boolean | string[] | number[] | boolean[];
}

interface IQueryRequestMovie extends IQueryParams {
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

interface IFetchOptions {
  signal?: AbortSignal | null;
  queryParams?: IQueryParams;
}

export type { IQueryParams, IFetchOptions, IQueryRequestMovie };
