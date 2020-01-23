import * as types from '../constants/type-constant';

const initialState = {
  reserveFlag: true,
  compareKey: '',
  bk: '',
  bkId: ''
}; 

export default function(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_FLAG:
      return {
        ...state,
        reserveFlag: action.payload.flag,
        compareKey: action.payload.compareKey,
        bk: action.payload.bk,
        bkId: action.payload.bkId
      }
    default:
      return state;
  }
}