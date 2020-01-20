import * as types from '../constants/type-constant';

const isEmpty = require("is-empty");

const initialState = {
  themeData: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.GET_THEME_SUCCESS:
      return {
        ...state,
        themeData: action.payload.theme
      };
    default:
      return state;
  }
}