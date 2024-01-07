import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = (userData, authToken) => {
    // Simulate a login by setting the user data and token
    setUser(userData);
    setToken(authToken);
  };

  const logout = () => {
    // Simulate a logout by clearing the user data and token
    setUser(null);
    setToken(null);
  };

  const getAuthToken = () => {
    return token;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, getAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
