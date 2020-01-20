import * as types from '../constants/type-constant';

const isEmpty = require("is-empty");

const initialState = {
  listTitle: '',
  showFlag: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_LIST:
    console.log("addlist")
    console.log(action.payload)
      return {
        ...state,
        listTitle: action.payload.title,
        showFlag: action.payload.showStatus
      };
    case types.CLOSE_LIST:
    return {
      ...state,
      showFlag: action.payload.showStatus

    }
    default:
      return state;
  }
}