import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout.jsx';
import { adminRoutes } from './routes/adminRoutes.jsx';
import { privateRoutes } from './routes/privateRoutes.jsx';
import { publicRoutes } from './routes/publicRoutes.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes */}
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {/* Auth Routes */}
        {privateRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {/* Admin Routes */}
        {adminRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {/* 404 Route */}
        <Route path='*' element={<NotFound />} />
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
