
//IF USING REACTREDUXROUTER DO NOT MAKE SEPARATE STORE FILE!!!

import { applyMiddleware, createStore } from 'redux';
import rootReducer from  './reducers';
import logger from 'redux-logger';
import promises from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createHistory } from 'history/createBrowserHistory';
const history = createHistory();
const middleware = routerMiddleware(history)

export default(initialState) => {
    return createStore(
      rootReducer,
      applyMiddleware(middleware, thunk, promises(),logger)
    );
}
