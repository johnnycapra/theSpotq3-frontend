import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router} from 'react-router-redux';
import authReducer from './auth';

const rootReducer = combineReducers({
  form,
  router,
  auth: authReducer

})

export default rootReducer;
