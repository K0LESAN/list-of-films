import { Routes, Route, Navigate } from 'react-router-dom';
import List from './pages/List/List';
import Container from './components/Container/Container';

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
            path='/:id'
            element={<List />}
          />
        </Routes>
      </Container>
    </>
  );
};

export default App;
