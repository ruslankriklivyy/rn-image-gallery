import {IPhoto} from 'types/entity/Photo';
import {
  FETCH_PHOTOS,
  PhotoActions,
  SET_ONE_PHOTO,
  SET_PHOTOS,
  SET_PHOTOS_TOTAL,
} from '../actions/photo';

const initialState = {
  photos: [] as IPhoto[],
  onePhoto: null as IPhoto | null,
  photosTotal: 0 as number,
  isLoading: false as boolean,
};

export type InitialState = typeof initialState;

export const photoReducer = (
  state = initialState,
  action: PhotoActions,
): InitialState => {
  switch (action.type) {
    case FETCH_PHOTOS:
      return {
        ...state,
        isLoading: true,
      };

    case SET_PHOTOS:
      return {
        ...state,
        photos: [...state.photos, ...action.payload],
        isLoading: false,
      };

    case SET_PHOTOS_TOTAL:
      return {
        ...state,
        photosTotal: action.payload,
      };

    case SET_ONE_PHOTO:
      return {
        ...state,
        onePhoto: action.payload,
      };

    default:
      return state;
  }
};
