import * as CONSTANT from './constant';

const initialState = {
  [CONSTANT.LOADING]: false,
  [CONSTANT.IS_LOADED]: false,
  [CONSTANT.USERS]: [],
  [CONSTANT.USER]: {},
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
    case CONSTANT.LOADING:
    case CONSTANT.IS_LOADED:
    case CONSTANT.USERS:
    case CONSTANT.USER: {
      return {
        ...state,
        [action.type]: action.payload,
      };
    }

    default:
      return state;
    }
}
