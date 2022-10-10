import axios from 'axios';

export default axios.create({
  baseURL: 'https://world.openfoodfacts.org/api/v2',
  headers: {
    'Content-type': 'application/json',
  },
});
