import {all} from 'redux-saga/effects';
import {onePhotoWatcher, photosWatcher} from './photo';

export function* rootWatcher() {
  yield all([photosWatcher(), onePhotoWatcher()]);
}
