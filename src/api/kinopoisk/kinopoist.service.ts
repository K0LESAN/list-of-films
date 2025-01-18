import type { KinopoiskService } from './kinopoisk.interface';
import type { FetchOptions } from './kinopoisk.interface';
import type { Movie, Docs } from '@/types/movie.interface';
import { fetcherKinopoiskAPI } from './helpers';

const kinopoiskService: KinopoiskService = {
  async getMovie(fetchOptions: FetchOptions): Promise<Movie> {
    return fetcherKinopoiskAPI<Movie>('movie?', fetchOptions);
  },
  getMovieByID(id: number): (fetchOptions: FetchOptions) => Promise<Docs> {
    return async (fetchOptions: FetchOptions = {}): Promise<Docs> => {
      return fetcherKinopoiskAPI<Docs>(`movie/${id}`, fetchOptions);
    };
  }
};

export default kinopoiskService;
