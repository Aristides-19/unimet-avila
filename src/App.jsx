import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </>
    </Router>
  );
}

export default App;
