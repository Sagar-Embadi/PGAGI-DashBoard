import axios from 'axios';

const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY;
const BYPASS_CORS = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (category = 'technology', page = 1) => {
  const response = await axios.get(`${BYPASS_CORS}${BASE_URL}/top-headlines`, {
    params: {
      category,
      pageSize: 10,
      page,
      country: 'us',
      apiKey: NEWS_API_KEY,
    },
  });
  return response.data;
};
