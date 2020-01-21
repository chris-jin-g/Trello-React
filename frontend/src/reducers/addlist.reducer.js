import * as types from '../constants/type-constant';

const isEmpty = require("is-empty");

const initialState = {
  listTitle: '',
  showFlag: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_LIST:
      return {
        ...state,
        listTitle: action.payload.title,
        showFlag: action.payload.showStatus
      };
    case types.CLOSE_LIST:
    return {
      ...state,
      showFlag: action.payload

    }
    default:
      return state;
  }
}