import type { IFetchOptions } from '@/types/api.interface';
import type { IDocs, IMovie } from '@/types/movie.interface';

interface IKinopoiskConfig {
  protocol: string;
  url: string;
  version: string;
  getURL(): string;
}

interface IKinopoiskService {
  getMovie(fetchOptions: IFetchOptions): Promise<IMovie>;
  getMovieByID(id: number): (fetchOptions: IFetchOptions) => Promise<IDocs>;
}

export type { IKinopoiskConfig, IKinopoiskService, IFetchOptions };
