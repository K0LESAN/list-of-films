import type { IDocs } from '@/types/movie.interface';
import Film from '@/components/Film/Film';
import { useParams } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';
import kinopoiskService from '@/api/kinopoisk/kinopoist.service';
import Paginator from '../Paginator/Paginator';
import styles from './ListFilms.module.scss';

const ListFilms = () => {
  const page: number = Number(useParams().page);
  const [movies] = useFetch(
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

  if (!movies) {
    return (
      <>
        <p>No data! Reload Browser go to home page</p>
      </>
    );
  }

  return (
    <>
      <Paginator totalPages={movies.pages} />
      <div className={`${styles.wrapper} ${styles.height}`}>
        {movies.docs?.map(
          ({
            id,
            name,
            year,
            poster,
            rating
          }: Pick<IDocs, 'id' | 'name' | 'year' | 'poster' | 'rating'>) => {
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
        ) || <p>No data!</p>}
      </div>
    </>
  );
};

export default ListFilms;
