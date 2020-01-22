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
      return {
        ...state,
        loginStatus: !isEmpty(action.data),
        user: action.data.boarddata,
        boardCollection: action.data.boardCollection
      };
    case types.ADD_LIST:
      const newContent = {
        title: action.payload.title,
        parts: []
      };
      state.boardCollection.boards[action.payload.boardid].push(newContent);
      return {
        ...state 
      }
    case types.ADD_CARD:
      state.boardCollection.boards.map((board, key) => {
        if (key == action.payload.boardid) {
          board.map((data, key) => {
            if (key == action.payload.boardAreaId) {
              data.parts.push(action.payload.title)
            }
          })
        }
      })
      return {...state}
    case types.RECENTED_UPDATE:
      state.user.boards.map((data, key) => {
        if (key == action.payload.boardid) {
          if (data.recented == 1) {
            return true;
          } else {
            let currentRecented = data.recented;
            state.user.boards.filter((el, i) => i !== action.payload).map(newdata => {
              if (newdata.recented > currentRecented ) {
                return false;
              } else {
                newdata.recented += 1;
              }
            });
            data.recented = 1;
          }
        }
      });
      return {
        ...state
      }
    default:
      return state;
  }
}