import React, { useEffect, useState } from 'react';
import styles from './Home.module.css';
import MovieCard from '../Components/MovieCard';
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const topRatedURL = `${moviesURL}top_rated?${apiKey}`;

    async function getTopRatedMovies(url) {
      const response = await fetch(url);
      const { results } = await response.json();
      setDados(results);
    }

    getTopRatedMovies(topRatedURL);
  }, []);

  return (
    <section className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies">
        {!dados && <p>Carregando...</p>}
        {dados &&
          dados.map((item) => <MovieCard key={item.title} movie={item} />)}
      </div>
    </section>
  );
};

export default Home;
