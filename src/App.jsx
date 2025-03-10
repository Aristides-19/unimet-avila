import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home';
import Gallery from './pages/Gallery/Gallery';
import Excursions from './pages/Excursions/ExcursionsPage';

function App() {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/excursions' element={<Excursions />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
