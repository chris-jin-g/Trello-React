import * as types from '../constants/type-constant';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_ERRORS:
      return action.data;
    default:
      return state;
  }
}