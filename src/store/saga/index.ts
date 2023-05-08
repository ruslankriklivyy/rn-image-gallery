import {all} from 'redux-saga/effects';
import {photosWatcher} from './photo';

export function* rootWatcher() {
  yield all([photosWatcher()]);
}
