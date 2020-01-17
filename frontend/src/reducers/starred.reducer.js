import * as types from '../constants/type-constant';

const initialState = {
	boardid: '',
	starStatus: false
}; 

export default function(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_STARRED:
      return {
      	...state,
      	boardid: action.payload.boardid,
      	starStatus: action.payload.starred
      };
    default:
      return state;
  }
}