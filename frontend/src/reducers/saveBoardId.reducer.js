import * as types from '../constants/type-constant';

const initialState = {
	compareId: ''
}; 

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_ID:
      return {
      	...state,
      	compareId: action.payload.boardid
      };
    case types.SAVE_CREATED_ID:
      return {
        ...state,
        compareId: action.payload
      }
    case types.SAVE_TOP_ID:
      return {
        ...state,
        compareId: action.payload
      }
    default:
      return state;
  }
}