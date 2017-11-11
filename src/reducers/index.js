import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router} from 'react-router-redux';
import authReducer from './auth';
import picReducer from './pictures';
import postReducer from './posts';

const rootReducer = combineReducers({
  form,
  router,
  auth: authReducer,
  allPics: picReducer,
  allPosts: postReducer

})

export default rootReducer;
