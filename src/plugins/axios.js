import axios from 'axios';
//http://127.0.0.1:8000
//https://api.Julie-u.shop
//const token = localStorage.getItem('token');
const apiClient = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    //'Authorization': `Bearer ${localStorage.getItem('token')}`,
  }
});
//put -r /media/ludivin/DATA1/Projects/Julie-u.shop/dist/

export default apiClient;

