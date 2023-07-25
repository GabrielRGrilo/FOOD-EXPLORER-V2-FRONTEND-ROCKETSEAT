import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://backend-foodexplorer-v2.onrender.com',
  //baseURL "http://localhost:3333"
});
