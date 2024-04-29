interface IDocs {
  id: string;
  category: string;
  name: string;
  year: number;
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
    await: number;
  };
  createdAt: Date;
  updatedAt: Date;
}

interface IMovie {
  docs: IDocs[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export type { IMovie, IDocs };
