// src/pages/RegisterPage.js
import React, { useState } from 'react';
import { registerUser } from '../api/api';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const userData = { name, email, password };
      // Call the registerUser API function with user data
      const response = await registerUser(userData);
      console.log('Registration successful:', response);
      // Add logic to handle successful registration (e.g., redirect to login)
    } catch (error) {
      console.error('Registration failed:', error);
      // Add logic to handle registration failure (e.g., display error message)
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
