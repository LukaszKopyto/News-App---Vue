import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://content.guardianapis.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const params = new URLSearchParams([
  ['api-key', process.env.VUE_APP_API_KEY],
  ['show-fields', 'thumbnail,trailText'],
]);

export default {
  getArticles() {
    return apiClient.get('/search', { params });
  },
};
