import { Routes, Route, Navigate } from 'react-router-dom';
import Container from './components/Container/Container';
import MovieCard from './pages/MovieCard/MovieCard';
import Main from './pages/Main/Main';

const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route
            path='/'
            element={
              <Navigate
                to='/1'
                replace
              />
            }
          />
          <Route
            path='/:page/:id'
            element={<MovieCard />}
          />
          <Route
            path='/:page'
            element={<Main />}
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
