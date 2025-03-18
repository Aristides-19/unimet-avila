import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Excursions from './pages/Excursions/ExcursionsPage';
import Excursion from './pages/Excursions/Excursion/Excursion';
import Reserve from './pages/Excursions/Reserve/Reserve';
import Blog from './pages/Blog/Blog';
import { UnauthenticatedRoute } from './context/UnauthenticatedRoute.jsx';
import Layout from './components/Layout.jsx';
import { AuthenticatedRoute } from './context/AuthenticatedRoute.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<Home />} />
        <Route path='/excursions' element={<Excursions />} />
        <Route path='/excursions/:excursionId' element={<Excursion />} />
        <Route
          path='/excursions/:excursionId/reserve'
          element={
            <AuthenticatedRoute scope='Estudiante'>
              <Reserve />
            </AuthenticatedRoute>
          }
        />
        <Route path='/blog' element={<Blog />} />
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
      </Route>
    </Routes>
  );
}

const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;
