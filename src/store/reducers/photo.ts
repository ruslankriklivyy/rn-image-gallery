import {IPhoto} from '../../types/entity/Photo';
import {PhotoActions, SET_PHOTOS} from '../actions/photo';

const initialState = {
  photos: null as IPhoto[] | null,
};

export type InitialState = typeof initialState;

export const photoReducer = (
  state = initialState,
  action: PhotoActions,
): InitialState => {
  switch (action.type) {
    case SET_PHOTOS:
      console.log(action);
      return {
        ...state,
        photos: action.payload,
      };

    default:
      return state;
  }
};
