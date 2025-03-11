import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { UnauthenticatedRoute } from './context/UnauthenticatedRoute.jsx';

function App() {
  const location = useLocation();
  const hideHeaderRoutes = ['/register', '/login'];

  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gallery' element={<Gallery />} />

          <Route path='/home' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route
            path='/register'
            element={
              <UnauthenticatedRoute>
                <Register />
              </UnauthenticatedRoute>
            }
          />
          <Route
            path='/login'
            element={
              <UnauthenticatedRoute>
                <Login />
              </UnauthenticatedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
