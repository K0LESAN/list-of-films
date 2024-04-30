import { useParams } from 'react-router-dom';
import styles from './MovieCard.module.scss';
import useFetch from '@/hooks/useFetch';
import kinopoiskService from '@/api/kinopoisk/kinopoist.service';
import ListSimiliarFilms from '@/components/ListSimiliarFilms/ListSimiliarFilms';
import Container from '@/components/Container/Container';
import Loader from '@/components/Loader/Loader';

const MovieCard = () => {
  const id = Number(useParams().id);
  const [movie, isLoading] = useFetch(
    kinopoiskService.getMovieByID(id),
    {},
    id
  );

  return (
    <>
      {isLoading || !movie ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : (
        <Container>
          <h2 className={styles.title}>{movie.name}</h2>
          <div className={styles.wrapper}>
            <p className={styles.description}>
              {movie.description || 'Здесь должно быть описание фильма'}
            </p>
            <img
              src={movie.poster.previewUrl}
              alt={movie.name}
              className={styles.poster}
            />
          </div>
          <h2 className={styles['similiar-title']}>Похожие фильмы</h2>
          <ListSimiliarFilms similiarMovies={movie.similarMovies} />
        </Container>
      )}
    </>
  );
};

export default MovieCard;
