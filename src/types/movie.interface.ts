interface Docs {
  id: string;
  category: string;
  name: string;
  year: number;
  description?: string;
  poster: {
    url: string;
    previewUrl: string;
  };
  rating: {
    kp: number;
    imdb: number;
    tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await?: number;
  };
  similarMovies: Pick<Docs, 'id' | 'name' | 'poster' | 'rating'>[];
  createdAt: Date;
  updatedAt: Date;
}

interface Movie {
  docs: Docs[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export type { Movie, Docs };
