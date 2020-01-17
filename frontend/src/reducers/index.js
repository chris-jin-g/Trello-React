import { combineReducers } from 'redux';
import user from './user.reducer';
import errors from './error.reducer';
import email from './email.reducer';
import starred from './starred.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'starred']
}


const rootReducer = combineReducers({
	user,
	errors,
	email,
	starred
});

export default persistReducer(persistConfig, rootReducer);