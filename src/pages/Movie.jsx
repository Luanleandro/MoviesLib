import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  BsWallet2,
  BsGraphUp,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from 'react-icons/bs';

import useFetch from '../Hooks/useFetch';
import MovieCard from '../Components/MovieCard';
import styles from './Movie.module.css';

const apiURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const { data, request, error, loading } = useFetch();

  const formatCurrent = (current) => {
    return current.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  useEffect(() => {
    async function movieFetch() {
      const movieUrl = `${apiURL}${id}?${apiKey}`;
      console.log(movieUrl);

      const { response } = await request(movieUrl);
      if (!response.ok) return error;
    }

    movieFetch();
  }, []);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <section className={styles.moviePage}>
        <div className={styles.movie}>
          <MovieCard movie={data} showLink={false} />
          <p>{data.tagline}</p>
        </div>

        <div className={styles.containerDetails}>
          <div className={styles.movieInfo}>
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrent(data.budget)}</p>
          </div>
          <div className={styles.movieInfo}>
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrent(data.revenue)}</p>
          </div>
          <div className={styles.movieInfo}>
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{data.runtime} Minutes</p>
          </div>
          <div className={styles.movieInfo}>
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{data.overview}</p>
          </div>
        </div>
      </section>
    );
};

export default Movie;
