// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [settingsDropdownVisible, setSettingsDropdownVisible] = useState(false);
  const [userDropdownVisible, setUserDropdownVisible] = useState(false);

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleMovieListClick = () => {
    navigate('/movies');
  };

  const handleGameListClick = () => {
    navigate('/games');
  };

  const handleTableListGamesClick = () => {
    navigate('/table-list-games');
    setSettingsDropdownVisible(false);
  };

  const handleTableListMoviesClick = () => {
    navigate('/table-list-movies');
    setSettingsDropdownVisible(false);
  };

  const toggleSettingsDropdown = () => {
    setSettingsDropdownVisible(!settingsDropdownVisible);
    setUserDropdownVisible(false);
  };

  const toggleUserDropdown = () => {
    setUserDropdownVisible(!userDropdownVisible);
    setSettingsDropdownVisible(false);
  };

  const handleLogout = () => {
    logout();
    setUserDropdownVisible(false);
    setSettingsDropdownVisible(false);
  };

  return (
    <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
      <nav className="nav font-semibold text-lg">
        <div className="flex items-center">
          <button onClick={handleHomeClick} className="p-4 border-b-2 border-zinc-900 border-opacity-0 hover:border-opacity-100 hover:text-zinc-900 duration-200 cursor-pointer active">Home</button>
          <button onClick={handleMovieListClick} className="p-4 border-b-2 border-zinc-900 border-opacity-0 hover:border-opacity-100 hover:text-zinc-900 duration-200 cursor-pointer active">Movie List</button>
          <button onClick={handleGameListClick} className="p-4 border-b-2 border-zinc-900 border-opacity-0 hover:border-opacity-100 hover:text-zinc-900 duration-200 cursor-pointer active">Game List</button>
        </div>
      </nav>

      <div className="flex justify-end font-semibold text-lg">
        <div className="relative">
          <button onClick={toggleSettingsDropdown} className="p-4 border-b-2 border-zinc-900 border-opacity-0 hover:border-opacity-100 hover:text-zinc-900 duration-200 cursor-pointer active">
            Settings
          </button>
          {settingsDropdownVisible && (
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md">
              <button onClick={handleTableListGamesClick} className="block w-full py-1 px-2 text-left hover:text-zinc-900 duration-200 cursor-pointer active">
                Game List
              </button>
              <button onClick={handleTableListMoviesClick} className="block w-full py-2 px-4 text-left hover:text-zinc-900 duration-200 cursor-pointer active">
                Movie List
              </button>
            </div>
          )}
        </div>
        
        {/* Add User Dropdown */}
        {user ? (
          <div className="relative">
            <button onClick={toggleUserDropdown} className="p-4 border-b-2 border-zinc-900 border-opacity-0 hover:border-opacity-100 hover:text-zinc-900 duration-200 cursor-pointer active">
              Welcome, {user.name}!
            </button>
            {userDropdownVisible && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 shadow-md rounded-md">
                <button onClick={handleLogout} className="block w-full py-2 px-4 text-left hover:text-zinc-900 duration-200 cursor-pointer active">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="p-4 border-b-2 border-zinc-900 border-opacity-0 hover:border-opacity-100 hover:text-zinc-900 duration-200 cursor-pointer active">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
