import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;
console.log(apiKey);

const apiClient = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  config.params = {
    // add your default ones
    apikey: apiKey,
    // spread the request's params
    ...config.params,
  };
  return config;
});

export default apiClient;
