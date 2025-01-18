import ListFilms from '@/components/list-films';
import Container from '@/components/container';
import styles from './index.module.scss';

const Main = () => {
  return (
    <Container>
      <h1 className={styles.title}>Список фильмов</h1>
      <ListFilms></ListFilms>
    </Container>
  );
};

export default Main;
