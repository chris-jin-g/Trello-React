import * as types from '../constants/type-constant';
import setAuthToken from "../utils/setAuthToken";

export function loginRequest(userdata, history) {
	return {
		type:types.LOG_IN_REQUEST,
		payload: {
			data: userdata,
			history: history
		}
	}
} 

export function setCurrentUser(data) {
	return {
		type: types.LOG_IN_SUCCESS,
		data: data
	}
}

export function logoutUser() {
	return {
		type: types.LOG_OUT
	}
}

export function errors(data) {
	return {
		type: types.GET_ERRORS,
		data: data
	}
}

export function saveEmailUrl(email) {
	return {
		type: types.EMAIL_SAVE,
		data: email
	}
}

export function signUpRequest(userdata, history) {
	return {
		type: types.SIGN_UP_REQUEST,
		payload: {
			data: userdata,
			history: history
		}
	}
}

export function changeStarred(starred) {
	return {
		type: types.CHANGE_STARRED,
		payload: starred
	}
}

export function getThemeRequest() {
	return {
		type: types.GET_THEME_REQUEST
	}
}

export function getThemeSuccess(data) {
	return {
		type: types.GET_THEME_SUCCESS,
		payload: data
	}
}

export function addList(data) {
	return {
		type: types.ADD_LIST,
		payload: data
	}
}

export function closeList(showFlag) {
	return {
		type: types.CLOSE_LIST,
		payload: showFlag
	}
}

export function saveCompareId(id) {
	return {
		type: types.SAVE_ID,
		payload: id
	}
}

export function addCard(data) {
	return {
		type: types.ADD_CARD,
		payload: data
	}
}