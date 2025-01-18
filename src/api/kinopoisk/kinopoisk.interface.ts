import type { FetchOptions } from '@/types/api.interface';
import type { Docs, Movie } from '@/types/movie.interface';

interface KinopoiskConfig {
  protocol: string;
  url: string;
  version: string;
  getURL(): string;
}

interface KinopoiskService {
  getMovie(fetchOptions: FetchOptions): Promise<Movie>;
  getMovieByID(id: number): (fetchOptions: FetchOptions) => Promise<Docs>;
}

export type { KinopoiskConfig, KinopoiskService, FetchOptions };
