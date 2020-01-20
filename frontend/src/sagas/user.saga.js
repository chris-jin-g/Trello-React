import { takeLatest, call, put, all, takeEvery } from 'redux-saga/effects';
import * as types from '../constants/type-constant';
import * as api from '../connectivily/api.user';
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import * as userAction from "../actions/user.action";


export function* doLoginUser(action) {
	try {

		const userdata = action.payload.data;
		// login backend
		const responsebody = yield call(api.login, userdata);
		console.log(responsebody)

		if (responsebody.data.token === "undefined") {
			throw new Error('Unable to find JWT in response body');
		}

		// Set token to localStorage
		const token = responsebody.data.token;
		localStorage.setItem('trelloToken', token);
		// Set token to Auth header
		setAuthToken(token);
		// Decode token to get user data
		const decoded = jwt_decode(token);
		
		yield put(userAction.setCurrentUser(decoded));

		// Return dashboard or checkpage
		if (decoded.boarddata.certification == "1") {
			action.payload.history.push('/board');
		} else {
			action.payload.history.push('/checkTrelloPage');
		}
		

	} catch (err) {
		yield put(userAction.errors(err.response.data));
	}
}

export function* watchLogin() {
	yield takeLatest(types.LOG_IN_REQUEST, doLoginUser)
}

export function* doSignUpUser(action) {
	try {
		const signUpData = action.payload.data;
		
		// singup backend
		const responsebody = yield call(api.signup, signUpData);

		if (responsebody.data == "Add success!") {
			action.payload.history.push('/checkTrelloPage')
		}

	} catch (err) {
		yield put(userAction.errors(err.response.data));
	}
}

export function* watchSignup() {
	yield takeLatest(types.SIGN_UP_REQUEST, doSignUpUser)
}

export function* doLogOut() {
	// Remove token from local storage
	localStorage.removeItem("trelloToken");
	// Remove auth header for future requests
	setAuthToken(false);
	// Set current user to empty object {} which will set isAuthenticated to false
	yield put(userAction.setCurrentUser({}));
}

export function* watchLogout() {
	yield takeLatest(types.LOG_OUT, doLogOut)
}

export function* doGetThemeRequest() {
	try {
		// getTheme backend
		const responsebody = yield call(api.getTheme);

		if (responsebody.data.token === "undefined") {
			throw new Error('Unable to find JWT in response body');
		}

		const token = responsebody.data.token;
		
		// Decode token to get user data
		const decoded = jwt_decode(token);
		yield put(userAction.getThemeSuccess(decoded));

	} catch (err) {
		yield put(userAction.getThemeSuccess({}));
	}
}

export function* watchGetThemeRequest() {
	yield takeEvery(types.GET_THEME_REQUEST, doGetThemeRequest)
}

export default function* rootSaga() {
	yield all([
		watchLogin(),
		watchSignup(),
		watchLogout(),
		watchGetThemeRequest(),
	]);
}