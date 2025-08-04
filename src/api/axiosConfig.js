// src/api/axiosConfig.js
import axios from 'axios';

// Create an instance of axios
const api = axios.create({
  baseURL: 'https://d-pravah-backend.vercel.app/', // Your backend URL
  withCredentials: true, // This is crucial for sending cookies
});

export default api;