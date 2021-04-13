import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.kesley.dev/ton',
});

export default api;