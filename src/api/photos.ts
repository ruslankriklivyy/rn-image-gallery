import {instance} from './index';

export const photosApi = {
  getAll() {
    return instance.get('/photos');
  },
};
