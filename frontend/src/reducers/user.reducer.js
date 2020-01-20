import * as types from '../constants/type-constant';

const isEmpty = require("is-empty");

const initialState = {
  loginStatus: false,
  user: {},
  boardCollection: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
    console.log(action.data)
      return {
        ...state,
        loginStatus: !isEmpty(action.data),
        user: action.data.boarddata,
        boardCollection: action.data.boardCollection
      };
    case types.ADD_LIST:
    console.log("userreducer")
    console.log(action.payload)
    const newContent = {
      title: action.payload.title,
      parts: []
    };
    state.boardCollection.boards[action.payload.boardid].push(newContent)
    console.log(state)
      return {
        ...state 
      }
    default:
      return state;
  }
}