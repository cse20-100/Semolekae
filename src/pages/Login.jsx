import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:5000/api/auth/login',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setMessage('Login successful!');
      console.log('Login response:', res.data);

      // Optionally store token
      // localStorage.setItem('token', res.data.token);
    } catch (err) {
      console.error('Login error:', err.response || err.message || err);
      setMessage(err.response?.data?.error || 'Login failed.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 border rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="p-2 border rounded"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Login
        </button>
      </form>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default Login;
