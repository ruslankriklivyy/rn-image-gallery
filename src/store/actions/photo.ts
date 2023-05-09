import {IPhoto} from 'types/entity/Photo';

export const SET_PHOTOS = 'SET_PHOTOS';
export const SET_ONE_PHOTO = 'SET_ONE_PHOTO';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const FETCH_ONE_PHOTO = 'FETCH_ONE_PHOTO';
export const SET_PHOTOS_TOTAL = 'SET_PHOTOS_TOTAL';

export interface ISetPhotos {
  type: typeof SET_PHOTOS;
  payload: IPhoto[];
}
export const setPhotos = (photos: IPhoto[]) => ({
  type: SET_PHOTOS,
  payload: photos,
});

interface ISetOnePhoto {
  type: typeof SET_ONE_PHOTO;
  payload: IPhoto;
}
export const setOnePhoto = (photo: IPhoto) => ({
  type: SET_ONE_PHOTO,
  payload: photo,
});

export interface ISetPhotosTotal {
  type: typeof SET_PHOTOS_TOTAL;
  payload: number;
}
export const setPhotosTotal = (total: number) => ({
  type: SET_PHOTOS_TOTAL,
  payload: total,
});

export interface IFetchPhotosPayload {
  page: number;
  per_page: number;
}
export interface IFetchPhotos {
  type: typeof FETCH_PHOTOS;
  payload: IFetchPhotosPayload;
}
export const fetchPhotos = (payload: IFetchPhotosPayload) => ({
  type: FETCH_PHOTOS,
  payload,
});

export interface IFetchOnePhotoPayload {
  id: string;
}
export interface IFetchOnePhoto {
  type: typeof FETCH_ONE_PHOTO;
  payload: IFetchOnePhotoPayload;
}
export const fetchOnePhoto = (payload: IFetchOnePhotoPayload) => ({
  type: FETCH_ONE_PHOTO,
  payload,
});

export type PhotoActions =
  | ISetPhotos
  | IFetchPhotos
  | ISetPhotosTotal
  | ISetOnePhoto
  | IFetchOnePhoto;
