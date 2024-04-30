import ListFilms from '@/components/ListFilms/ListFilms';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <>
      <h1 className={styles.title}>Список фильмов</h1>
      <ListFilms></ListFilms>
    </>
  );
};

export default Main;
