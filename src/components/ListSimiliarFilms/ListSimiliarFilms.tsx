import { Link } from 'react-router-dom';
import type { Props } from './ListSimiliarFilms.interface';
import styles from './ListSimiliarFilms.module.scss';

const ListSimiliarFilms = ({ similiarMovies }: Props) => {
  if (!similiarMovies?.length) {
    return (
      <>
        <p>No data!</p>
      </>
    );
  }

  return (
    <div className={styles.wrapper}>
      {similiarMovies.map(({ id, name, poster }) => {
        return (
          <Link
            key={id}
            className={styles.item}
            to={`/movie/${String(id)}`}
          >
            <img
              src={poster.previewUrl}
              alt={name}
              className={styles.poster}
            />
            <p className={styles.name}>{name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default ListSimiliarFilms;
