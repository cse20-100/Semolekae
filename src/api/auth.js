// src/api/auth.js
import axios from "axios";

export const registerUser = async (formData) => {
  const res = await axios.post("/api/signup", formData);
  return res.data;
};

export const loginUser = async (formData) => {
  const res = await axios.post("/api/login", formData);
  return res.data;
};
