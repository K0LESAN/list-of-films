import type { IKinopoiskService } from './kinopoisk.interface';
import type { IFetchOptions } from './kinopoisk.interface';
import type { IMovie } from '@/types/movie.interface';
import { fetcherKinopoiskAPI } from './helpers';

const kinopoiskService: IKinopoiskService = {
  async getMovie(fetchOptions: IFetchOptions): Promise<IMovie> {
    return fetcherKinopoiskAPI<IMovie>('movie?', fetchOptions);
  }
};

export default kinopoiskService;
