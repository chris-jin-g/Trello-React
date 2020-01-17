import * as types from '../constants/type-constant';

const initialState = {
	email: ''
}

export default function(state = initialState, action) {
	switch (action.type) {
		case types.EMAIL_SAVE:
			return {
				...state,
				email: action.data
			};
		default:
			return state;
	}
}