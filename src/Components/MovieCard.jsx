import React from 'react';
import styles from './MovieCard.module.css';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const imgURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className={styles.movieCard}>
      <img src={`${imgURL}${movie.poster_path}`} alt={movie.id} />
      <h2>{movie.title}</h2>
      <p>
        <AiFillStar style={{ fill: '#fb1' }} /> {movie.vote_average.toFixed(1)}
      </p>
      {showLink && (
        <Link to={`/movie/${movie.id}`} className={styles.button}>
          Detalhes
        </Link>
      )}
    </div>
  );
};

export default MovieCard;
