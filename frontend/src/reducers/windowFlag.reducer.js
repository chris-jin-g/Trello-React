import * as types from '../constants/type-constant';

const initialState = {
	windowFlag: true
}; 

export default function(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_WINDOW_FLAG:
      return {
      	...state,
      	windowFlag: action.payload
      };
    default:
      return state;
  }
}