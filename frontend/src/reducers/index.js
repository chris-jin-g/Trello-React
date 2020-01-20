import { combineReducers } from 'redux';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Import reducers for combine
import user from './user.reducer';
import errors from './error.reducer';
import email from './email.reducer';
import starred from './starred.reducer';
import theme from './theme.reducer';


const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'theme']
}


const rootReducer = combineReducers({
	user,
	errors,
	email,
	starred,
	theme
});

export default persistReducer(persistConfig, rootReducer);