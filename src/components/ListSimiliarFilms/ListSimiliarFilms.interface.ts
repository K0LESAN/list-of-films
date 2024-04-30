import { IDocs } from '@/types/movie.interface';

interface IProps {
  similiarMovies: IDocs['similarMovies'] | null | undefined;
}

export type { IProps };
