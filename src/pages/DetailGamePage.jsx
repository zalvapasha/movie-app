// src/pages/DetailGamePage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getGameById } from '../api/api';

const DetailGamePage = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const gameData = await getGameById(id);
        setGame(gameData);
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    };

    fetchGame();
  }, [id]);

  return (
    <div>
      <h1>Game Details</h1>
      {game ? (
        <div>
          <h2>{game.name}</h2>
          <p>Release: {game.release}</p>
          <p>Genre: {game.genre}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailGamePage;
