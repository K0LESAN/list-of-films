import ListFilms from '@/components/ListFilms/ListFilms';
import Container from '@/components/Container/Container';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <Container>
      <h1 className={styles.title}>Список фильмов</h1>
      <ListFilms></ListFilms>
    </Container>
  );
};

export default Main;
