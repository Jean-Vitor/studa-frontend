import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ec2-34-238-244-195.compute-1.amazonaws.com:8000/api',
});

export default api;