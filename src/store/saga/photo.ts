import {put, takeEvery, call} from 'redux-saga/effects';

import {
  FETCH_ONE_PHOTO,
  FETCH_PHOTOS,
  IFetchOnePhoto,
  IFetchPhotos,
  setOnePhoto,
  setPhotos,
  setPhotosTotal,
} from '../actions/photo';
import {photosApi} from 'api/photos';

function* fetchPhotosWorker({payload}: IFetchPhotos) {
  try {
    const {data, headers} = yield call(photosApi.getAll, payload);
    yield put(setPhotosTotal(headers['x-total']));
    yield put(setPhotos(data));
  } catch (error) {
    throw error;
  }
}

function* fetchOnePhotoWorker({payload}: IFetchOnePhoto) {
  try {
    const {data} = yield call(photosApi.getOne, payload);
    yield put(setOnePhoto(data));
  } catch (error) {
    throw error;
  }
}

export function* photosWatcher() {
  yield takeEvery(FETCH_PHOTOS, fetchPhotosWorker);
}

export function* onePhotoWatcher() {
  yield takeEvery(FETCH_ONE_PHOTO, fetchOnePhotoWorker);
}
