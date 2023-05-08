import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_PHOTOS, setPhotos } from '../actions/photo'
import { photosApi } from '../../api/photos'

function* fetchPhotosWorker() {
   try {
      const { data } = yield call(photosApi.getAll)
      yield put(setPhotos(data))
   } catch (error) {
      throw error
   }
}

export function* photosWatcher() {
   yield takeEvery(FETCH_PHOTOS, fetchPhotosWorker)
}
