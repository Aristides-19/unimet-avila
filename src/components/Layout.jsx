import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';

export default function Layout() {
  const location = useLocation();
  const hideHeaderRoutes = ['/register', '/login'];
  return (
    <>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
