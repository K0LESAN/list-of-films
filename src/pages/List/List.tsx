import type { IDocs } from '@/types/movie.interface';
import { useParams } from 'react-router-dom';
import useFetch from '@/hooks/useFetch';
import kinopoiskService from '@/api/kinopoisk/kinopoist.service';
import Film from '@/components/Film/Film';
import styles from './List.module.scss';

const List = () => {
  const page: number = Number(useParams().page);
  const [movies] = useFetch(kinopoiskService.getMovie, {
    page,
    selectFields: ['id', 'name', 'year', 'poster', 'rating'],
    notNullFields: ['id', 'name', 'year', 'poster.url', 'rating.kp'],
    sortField: 'rating.kp',
    sortType: '-1'
  });

  return (
    <>
      <h1 className={styles.title}>Список фильмов</h1>
      <div className={styles.wrapper}>
        {movies?.docs?.map(
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
                id={id}
                name={name}
                poster={poster.previewUrl!}
                year={year}
                rating={rating.kp}
              />
            );
          }
        )}
      </div>
    </>
  );
};

export default List;
