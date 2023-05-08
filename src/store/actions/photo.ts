import {IPhoto} from '../../types/entity/Photo';

export const SET_PHOTOS = 'SET_PHOTOS';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';

export interface ISetPhotos {
  type: typeof SET_PHOTOS;
  payload: IPhoto[];
}
export const setPhotos = (photos: IPhoto[]) => ({
  type: SET_PHOTOS,
  payload: photos,
});

export interface IFetchPhotos {
  type: typeof FETCH_PHOTOS;
}
export const fetchPhotos = () => ({
  type: FETCH_PHOTOS,
});

export type PhotoActions = ISetPhotos | IFetchPhotos;
