import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../api/api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const credentials = { email, password };
      // Call the loginUser API function with credentials
      const response = await loginUser(credentials);

      // Extract user data and token from the response (adjust based on your API)
      const { username, email: userEmail, authToken } = response;

      // Update authentication context with user data and token
      login({ username, email: userEmail }, authToken);

      // Redirect to the homepage or another page after successful login
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
      // Add logic to handle login failure (e.g., display error message)
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
