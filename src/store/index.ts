import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {rootWatcher} from './saga';
import {photoReducer} from './reducers/photo';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  photoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);

export {store};
