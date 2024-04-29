import type { IFetchOptions } from '@/types/api.interface';
import type { IMovie } from '@/types/movie.interface';

interface IKinopoiskConfig {
  protocol: string;
  url: string;
  version: string;
  getURL(): string;
}

interface IKinopoiskService {
  getMovie(fetchOptions: IFetchOptions): Promise<IMovie>;
}

export type { IKinopoiskConfig, IKinopoiskService, IFetchOptions };
