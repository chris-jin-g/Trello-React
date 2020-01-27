import * as types from '../constants/type-constant';

const initialState = {
	templateType: '',
  templateData: {}
}; 

export default function(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_TEMPLATE_TYPE:
      return {
      	...state,
      	templateType: action.payload
      };
    case types.SAVE_TEMPLATE_AUTH:
     return {
      ...state,
      templateData: action.payload
     }
    default:
      return state;
  }
}