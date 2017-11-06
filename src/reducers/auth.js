import {
  AUTH_USER,
  UNAUTH,
  AUTH_ERROR,
  FETCH_MESSAGE
 } from '../actions/types';


export default function(state = {}, action){
  switch(action.type){
    case AUTH_USER:
      return {...state, authenticated: true};
    case UNAUTH:
      return {...state, authenticated: false};
    case AUTH_ERROR:
      return {...state, error: action.payload};
    case FETCH_MESSAGE:
      return {...state, message: action.payload};
    default:
      return state;
  }
}
