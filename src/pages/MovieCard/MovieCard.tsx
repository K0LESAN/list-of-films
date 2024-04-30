import { useParams } from 'react-router-dom';
import styles from './MovieCard.module.scss';
import useFetch from '@/hooks/useFetch';
import kinopoiskService from '@/api/kinopoisk/kinopoist.service';
import ListSimiliarFilms from '@/components/ListSimiliarFilms/ListSimiliarFilms';

const MovieCard = () => {
  const id = Number(useParams().id);
  const [movie] = useFetch(kinopoiskService.getMovieByID(id), {}, id);

  if (!movie) {
    return (
      <>
        <h1>No data! Refresh browser or navigate to main page</h1>
      </>
    );
  }

  return (
    <>
      <h2 className={styles.title}>{movie.name}</h2>
      <div className={styles.wrapper}>
        <p
          className={styles.description || 'Здесь должно быть описание фильма'}
        >
          {movie.description}
        </p>
        <img
          src={movie.poster.previewUrl}
          alt={movie.name}
          className={styles.poster}
        />
      </div>
      <h2 className={styles['similiar-title']}>Похожие фильмы</h2>
      <ListSimiliarFilms similiarMovies={movie.similarMovies} />
    </>
  );
};

export default MovieCard;
