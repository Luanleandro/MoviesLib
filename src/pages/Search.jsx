import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Search.module.css';
import MovieCard from '../Components/MovieCard';
import useFetch from '../Hooks/useFetch';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [URLSearchParams] = useSearchParams();
  const query = URLSearchParams.get('q');
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const searchMovie = `${searchURL}?${apiKey}&query=${query}`;

    request(searchMovie);
  }, [query, request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data && data.total_results === 0)
    return <p className={styles.nenhum}>Nenhum resultado encontrado.</p>;
  if (data)
    return (
      <section className="container">
        <h2 className="title">
          Resultados para: <span className={styles.query}>{query}</span>{' '}
        </h2>
        <div className="movies">
          {data &&
            data.results.map((item) => <MovieCard key={item.id} movie={item} />)}
        </div>
      </section>
    );
};

export default Search;
