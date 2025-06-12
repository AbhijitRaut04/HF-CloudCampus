import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // e.g., http://localhost:5000/api
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;


// const token = localStorage.getItem('token');
// if (token) {
//   axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }