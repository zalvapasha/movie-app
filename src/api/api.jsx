// src/api/api.js
import axios from 'axios';
import { authToken } from '../context/AuthContext';

const baseURL = 'https://backendexample.sanbersy.com/api';

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Movies API Functions

export const getMovies = async () => {
  try {
    const response = await api.get('/data-movie');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getMovieById = async (id) => {
  try {
    const response = await api.get(`/data-movie/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMovie = async (id, authToken) => {
  try {
    const response = await api.delete(`/data-movie/${id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

// Games API Functions

export const getGames = async () => {
  try {
    const response = await api.get('/data-game');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getGameById = async (id) => {
  try {
    const response = await api.get(`/data-game/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteGame = async (id) => {
  try {
    const response = await api.delete(`/data-game/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// User API Functions

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/user-login', credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (passwordData) => {
  try {
    const response = await api.post('/change-password', passwordData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
