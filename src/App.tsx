import { Routes, Route, Navigate } from 'react-router-dom';
import MovieCard from './pages/MovieCard/MovieCard';
import Main from './pages/Main/Main';
import NotFound from './pages/NorFound/NotFound';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Navigate
              to='/pages/1'
              replace
            />
          }
        />
        <Route
          path='/movie/:id'
          element={<MovieCard />}
        />
        <Route
          path='/pages/:page'
          element={<Main />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </>
  );
};

export default App;
