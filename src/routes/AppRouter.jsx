import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import ListMoviePage from '../pages/ListMoviePage';
import ListGamePage from '../pages/ListGamePage';
import TableListGamePage from '../pages/TableListGamePage';
import TableListMoviePage from '../pages/TableListMoviePage'
import DetailMoviePage from '../pages/DetailMoviePage';
import DetailGamePage from '../pages/DetailGamePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ChangePasswordPage from '../pages/ChangePasswordPage';
import HomePage from '../pages/HomePage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/" element={<MainLayout>{<HomePage/>}</MainLayout>} />
        <Route path="/movies" element={<MainLayout>{<ListMoviePage/>}</MainLayout>} />
        <Route path="/movies/:id" element={<MainLayout>{<DetailMoviePage/>}</MainLayout>} />
        <Route path="/games" element={<MainLayout>{<ListGamePage/>}</MainLayout>} />
        <Route path="/games/:id" element={<MainLayout>{<DetailGamePage/>}</MainLayout>} />
        <Route path="/table-list-games" element={<MainLayout>{<TableListGamePage />}</MainLayout>} />
        <Route path="/table-list-movies" element={<MainLayout>{<TableListMoviePage/>}</MainLayout>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
