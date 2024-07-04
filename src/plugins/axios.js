import axios from 'axios';
//http://127.0.0.1:8000
//https://api.Julie-u.shop
const apiClient = axios.create({
  baseURL: 'https://api.Julie-u.shop',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default apiClient;
