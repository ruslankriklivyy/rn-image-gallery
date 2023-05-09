import axios from 'axios';
import {API_URL, UNSPLASH_CLIENT_ID} from '@env';

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Client-ID ${UNSPLASH_CLIENT_ID}`,
  },
});
