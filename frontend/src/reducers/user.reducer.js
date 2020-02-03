import * as types from '../constants/type-constant';

const isEmpty = require("is-empty");

const initialState = {
  loginStatus: false,
  user: {},
  boardCollection: {}
};

export default function(state = initialState, action) {
  const { user, boardCollection } = state;

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
    case types.CREATE_NEW_BOARD:
      const regex = /^http/;
      let newBoardId = '';
      let newThemeTitle = '';
      let newBoardArea = [];
      
      // Make newBoardId
        newBoardId += user.boards.length;

      // Make newThemeTitle
      if (regex.test(action.payload.bk)) {
        newThemeTitle += 'bk' + action.payload.createBkId;
      } else {
        newThemeTitle += 'bc' + action.payload.createBkId;
      }

      // Make newBoard
      const newBoard= {
        boardid: newBoardId,
        recented: 1,
        starred: false,
        themeTitle: newThemeTitle,
        title: action.payload.title
      }

      // Insert newBoard
      user.boards.push(newBoard);

      // Insert newBoardArea
      boardCollection.boards.push(newBoardArea);
      
      // Update user board's recented
      user.boards.filter((el, i) => i !== parseInt(newBoardId))
        .map(data => {
          console.log(data)
          data.recented += 1;
        })
      return {...state}
    default:
      return state;
  }
}