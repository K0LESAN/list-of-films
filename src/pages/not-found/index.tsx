import styles from './index.module.scss';
import error404 from '@/assets/404.webp';

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Page is not found!</p>
      <img
        className={styles.image}
        src={error404}
        alt='error 404 (not found)'
      />
    </div>
  );
};

export default NotFound;
