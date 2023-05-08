import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043',
  },
});
