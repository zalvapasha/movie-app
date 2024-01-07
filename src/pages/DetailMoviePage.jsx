// src/pages/DetailMoviePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../api/api';
import { Image } from 'antd';

const DetailMoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await getMovieById(id);
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div>
      <h1>Movie Details</h1>
      {movie ? (
        <div className='max-w-screen mx-auto xl:px-48 md:px-20 sm:px-20'>
          <div className='-mx-4 flex flex-row'>
            <div>
              
            </div>
            <Image
              width={200}
              src={movie.image_url}
              alt={`Poster for ${movie.title}`}
            />
            <h2>{movie.title}</h2>
            <p>Year: {movie.year}</p>
            <p>Genre: {movie.genre}</p>
            <p>Description: {movie.description}</p>
            <p>Duration: {movie.duration} minutes</p>
            <p>Rating: {movie.rating}</p>
            <p>Review: {movie.review}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailMoviePage;
