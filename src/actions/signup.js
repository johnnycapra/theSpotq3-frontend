import axios from 'axios';
import { push } from 'react-router-redux';
import {
   AUTH_USER,
   AUTH_ERROR
} from './types';

export function signupUser({email, username, password, confirm}){
  return dispatch => {
    axios.post('http://localhost:8000/users/signup', {email, username, password, confirm})
    .then(response => {
      if (response.data.error){
        dispatch(authError(response.data.error))
      } else {
        console.log("rESPOSJSL", response);
        dispatch({type: AUTH_USER});
        localStorage.setItem('token', response.data.token);
        dispatch(push('/dashboard'));
      }
    })
  }
}


export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
