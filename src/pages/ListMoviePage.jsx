// src/pages/ListMoviePage.js
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { getMovies } from '../api/api';

const { Meta } = Card;

const ListMoviePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>List of Movies</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <Card
              hoverable
              style={{ width: 200, margin: '16px' }}
              cover={<img alt={movie.title} src={movie.image_url} />}
            >
              <Meta title={movie.title} description={`Year: ${movie.year}`} />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListMoviePage;
