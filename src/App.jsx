import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';
import Header from './Components/Header';
import Footer from './pages/Footer';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <main className='appBody'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="search" element={<Search />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
