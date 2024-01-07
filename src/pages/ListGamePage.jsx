// src/pages/ListGamePage.js
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { getGames } from '../api/api';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const ListGamePage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await getGames();
        setGames(gamesData);
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div>
      <h1>List of Games</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {games.map((game) => (
          <Link to={`/games/${game.id}`} key={game.id}>
            <Card
              hoverable
              style={{ width: 200, margin: '16px' }}
              cover={<img alt={game.name} src={game.image_url} />}
            >
              <Meta title={game.name} description={`Release Date: ${game.release}`} />
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListGamePage;
