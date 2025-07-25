// src/api/auth.js
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;// Replace with your Render backend URL

export const registerUser = async (formData) => {
  const res = await axios.post(`${API_BASE_URL}/api/signup`, formData);
  return res.data;
};

export const loginUser = async (formData) => {
  const res = await axios.post(`${API_BASE_URL}/api/login`, formData);
  return res.data;
};
