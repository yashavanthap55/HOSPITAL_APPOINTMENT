import React, { useState } from 'react';
import axios from 'axios';

// LoginForm Component
const LoginForm = ({ isSignUp, toggleForm }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const url = isSignUp ? 'http://localhost:5173/signup' : 'http://localhost:5173/login';

    try {
      const response = await axios.post(url, formData);

      if (response?.data?.message) {
        alert(response.data.message);
        if (!isSignUp && response.data.token) {
          localStorage.setItem('token', response.data.token);
        }
      } else {
        throw new Error('Unexpected response structure');
      }
    } catch (error) {
      alert(error.response?.data?.error || error.message || 'An error occurred');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'var(--background--)',
      }}
    >
      <div
        style={{
          width: '300px',
          padding: '20px',
          borderRadius: '8px',
          backgroundColor: '#e0f8e0',
          boxShadow: '0 0 10px rgba(0, 128, 0, 0.2)',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#2e8b57' }}>
          {isSignUp ? 'Sign Up' : 'Login'}
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: '#2e8b57' }}>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '8px',
                marginTop: '5px',
                borderRadius: '4px',
                border: '1px solid #2e8b57',
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ color: '#2e8b57' }}>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '8px',
                marginTop: '5px',
                borderRadius: '4px',
                border: '1px solid #2e8b57',
              }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              color: '#ffffff',
              backgroundColor: '#2e8b57',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <p
          style={{
            marginTop: '10px',
            textAlign: 'center',
            color: '#2e8b57',
            cursor: 'pointer',
          }}
          onClick={toggleForm}
        >
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

// Parent Component
const AuthContainer = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  return <LoginForm isSignUp={isSignUp} toggleForm={toggleForm} />;
};

export default AuthContainer;
