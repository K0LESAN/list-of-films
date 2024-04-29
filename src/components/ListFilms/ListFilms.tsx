import type { IDocs } from '@/types/movie.interface';
import Film from '@/components/Film/Film';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import useFetch from '@/hooks/useFetch';
import kinopoiskService from '@/api/kinopoisk/kinopoist.service';
import styles from './ListFilms.module.scss';

const ListFilms = ({ height }: { height: number }) => {
  const page: number = Number(useParams().page);
  const [movies] = useFetch(kinopoiskService.getMovie, {
    page,
    selectFields: ['id', 'name', 'year', 'poster', 'rating'],
    notNullFields: ['id', 'name', 'year', 'poster.url', 'rating.kp'],
    sortField: 'rating.kp',
    sortType: '-1'
  });
  const ref = useRef<HTMLDivElement>(null);

  if (ref && ref.current && ref.current.style) {
    ref.current.style.height = `${height}px`;
  }

  return (
    <>
      <div
        ref={ref}
        className={`${styles.wrapper} ${styles.height}`}
      >
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
                id={Number(id)}
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

export default ListFilms;
