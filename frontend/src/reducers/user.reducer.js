import * as types from '../constants/type-constant';

const isEmpty = require("is-empty");

const initialState = {
  loginStatus: false,
  user: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        loginStatus: !isEmpty(action.payload),
        user: action.data
      };
      case types.LOG_OUT:
    default:
      return state;
  }
}