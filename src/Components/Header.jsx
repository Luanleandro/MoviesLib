import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { BiSearchAlt2, BiCameraMovie } from 'react-icons/bi';

const Header = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!search) return null;
    navigate(`/search?q=${search}`);
    setSearch('');
  }

  return (
    <header>
      <nav className={`${styles.nav} container`}>
        <h2>
          <Link to="/">
            <BiCameraMovie /> MoviesLib
          </Link>
        </h2>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Busque um filme"
            id="search"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            className={styles.input}
          />
          <button className={styles.button}>
            <BiSearchAlt2 />
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
