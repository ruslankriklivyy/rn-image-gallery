import {instance} from './index';
import {IFetchOnePhotoPayload, IFetchPhotosPayload} from 'store/actions/photo';

export const photosApi = {
  getAll({page, per_page}: IFetchPhotosPayload) {
    return instance.get(`/photos?page=${page}&per_page=${per_page}`);
  },

  getOne({id}: IFetchOnePhotoPayload) {
    return instance.get(`/photos/${id}`);
  },
};
