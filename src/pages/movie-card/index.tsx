import { useParams } from 'react-router-dom';
import { useFetch } from '@/hooks/use-fetch';
import { kinopoiskService } from '@/api/kinopoisk/kinopoist.service';
import ListSimiliarFilms from '@/components/list-similiar-films';
import Container from '@/components/container';
import Loader from '@/components/loader';
import styles from './index.module.scss';

const MovieCard = () => {
  const id = Number(useParams().id);
  const [movie, isLoading] = useFetch(
    kinopoiskService.getMovieByID(id),
    {},
    id
  );

  if (isLoading || !movie) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <Container>
      <h2 className={styles.title}>{movie.name}</h2>
      <div className={styles.wrapper}>
        <p className={styles.description}>
          {movie.description || 'Здесь должно быть описание фильма'}
        </p>
        <img
          src={movie.poster?.previewUrl || ''}
          alt={movie.name}
          className={styles.poster}
        />
      </div>
      <h2 className={styles['similiar-title']}>Похожие фильмы</h2>
      <ListSimiliarFilms similiarMovies={movie.similarMovies} />
    </Container>
  );
};

export default MovieCard;
