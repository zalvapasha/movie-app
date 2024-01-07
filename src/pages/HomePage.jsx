import React from 'react';
import ListMoviePage from './ListMoviePage';
import ListGamePage from './ListGamePage';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div>
        <ListMoviePage />
      </div>
      <div>
        <ListGamePage />
      </div>
    </div>
  );
};

export default HomePage;
