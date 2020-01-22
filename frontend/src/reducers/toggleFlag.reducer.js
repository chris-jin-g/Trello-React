import * as types from '../constants/type-constant';

const initialState = {
  reserveFlag: true,
  compareKey: ''
}; 

export default function(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_FLAG:
      return {
        ...state,
        reserveFlag: action.payload.flag,
        compareKey: action.payload.compareKey
      }
    default:
      return state;
  }
}