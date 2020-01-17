import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from '../reducers';
import rootSaga from '../sagas/user.saga';
import { persistStore } from 'redux-persist';



const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

/** Create middlewares for redux */
let middlewares = applyMiddleware(sagaMiddleware, logger);

/** Create redux store */
export const store = createStore(
  reducers,
  composeWithDevTools(middlewares)
);

export const persistor = persistStore(store);

/** run saga watchers */
sagaMiddleware.run(rootSaga);

export default {store, persistor};