import axios from 'axios';

const api = axios.create({
  baseURL: 'https://happy-deploy.herokuapp.com'
});

export default api;
