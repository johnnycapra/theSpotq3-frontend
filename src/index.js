import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Signup from './components/Signup';
import CommentPage from './components/CommentPage';
import Dashboard from './components/Dashboard';
import Land from './components/Land';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import rootReducer from './reducers' // Or wherever you keep your reducers
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
// import promises from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import Signout from './components/Signout';
import renderfield from './components/Signout';
import Auth from './components/Auth';
import { AUTH_USER } from './actions/types';

const history = createHistory();
const middleware = routerMiddleware(history)

const store = createStore(
      rootReducer,
      applyMiddleware(middleware, thunk, logger)
    );

const token = localStorage.getItem('token');

if(token){
  store.dispatch({type: AUTH_USER});
}

ReactDOM.render(

  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={App}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/dashboard" component={Auth(Dashboard)}/>
        <Route exact path="/dashboard/:id" component={Auth(CommentPage)}/>
        <Route exact path="/signout" component={Signout}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')









);
