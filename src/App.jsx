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
import Home from './pages/Home';
import Gallery from './pages/Gallery/Gallery';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

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
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/login' element={<Login />} />
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
