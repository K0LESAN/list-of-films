import type { Docs } from '@/types/movie.interface';

interface Props {
  similiarMovies: Docs['similarMovies'] | null | undefined;
}

export type { Props };
