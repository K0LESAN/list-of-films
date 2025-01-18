import { Link } from 'react-router-dom';
import type { Props } from './index.interface';
import styles from './index.module.scss';

const Film = ({ id, name, poster, year, rating }: Props) => {
  return (
    <Link
      className={styles.wrapper}
      to={`/movie/${String(id)}`}
    >
      <img
        className={styles.image}
        src={poster}
        alt={name}
      />
      <div className={styles['under-section']}>
        <p className={styles.rate}>{rating.toFixed(1)}</p>
        <div className={styles.info}>
          <p
            className={styles.name}
            title={name}
          >
            {name}
          </p>
          <p className={styles.year}>{year} год</p>
        </div>
      </div>
    </Link>
  );
};

export default Film;
