import type { Docs } from '@/types/movie.interface';
import Film from '@/components/film';
import { useParams } from 'react-router-dom';
import { useFetch } from '@/hooks/use-fetch';
import { kinopoiskService } from '@/api/kinopoisk/kinopoist.service';
import Paginator from '@/components/paginator';
import Loader from '@/components/loader';
import styles from './index.module.scss';

const ListFilms = () => {
  const page: number = Number(useParams().page);
  const [movies, isLoading] = useFetch(
    kinopoiskService.getMovie,
    {
      page,
      selectFields: ['id', 'name', 'year', 'poster', 'rating'],
      notNullFields: ['id', 'name', 'year', 'poster.url', 'rating.kp'],
      sortField: 'rating.kp',
      sortType: '-1'
    },
    page
  );

  if (isLoading || !movies) {
    return <Loader />;
  }

  return (
    <>
      <Paginator
        totalPages={movies.pages}
        page={page}
      />
      <div className={`${styles.wrapper} ${styles.height}`}>
        {movies.docs?.length > 0 ? (
          movies.docs?.map(
            ({
              id,
              name,
              year,
              poster,
              rating
            }: Pick<Docs, 'id' | 'name' | 'year' | 'poster' | 'rating'>) => {
              return (
                <Film
                  key={id}
                  id={Number(id)}
                  name={name}
                  poster={poster.previewUrl!}
                  year={year}
                  rating={rating.kp}
                />
              );
            }
          )
        ) : (
          <p>No data!</p>
        )}
      </div>
    </>
  );
};

export default ListFilms;
