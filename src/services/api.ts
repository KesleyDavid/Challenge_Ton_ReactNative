import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/KesleyDavid/challenge-ton-react-native',
});

export default api;