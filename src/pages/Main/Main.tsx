import styles from './Main.module.scss';
import ListFilms from '@/components/ListFilms/ListFilms';

const Main = () => {
  return (
    <>
      <h1 className={styles.title}>Список фильмов</h1>
      <ListFilms height={600}></ListFilms>
    </>
  );
};

export default Main;
