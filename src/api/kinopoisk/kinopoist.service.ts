import type { IKinopoiskService } from './kinopoisk.interface';
import type { IFetchOptions } from './kinopoisk.interface';
import type { IMovie, IDocs } from '@/types/movie.interface';
import { fetcherKinopoiskAPI } from './helpers';

const kinopoiskService: IKinopoiskService = {
  async getMovie(fetchOptions: IFetchOptions): Promise<IMovie> {
    return fetcherKinopoiskAPI<IMovie>('movie?', fetchOptions);
  },
  getMovieByID(id: number): (fetchOptions: IFetchOptions) => Promise<IDocs> {
    return async (fetchOptions: IFetchOptions = {}): Promise<IDocs> => {
      return fetcherKinopoiskAPI<IDocs>(`movie/${id}`, fetchOptions);
    };
  }
};

export default kinopoiskService;
