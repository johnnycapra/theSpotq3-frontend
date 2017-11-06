import axios from 'axios';
import { push } from 'react-router-redux';
import {
   AUTH_USER,
   AUTH_ERROR
} from './types';

export function signupUser({email, username, password, confirm}){
  return dispatch => {
    axios.post('http://localhost:8000/users/signup', {email, username, password, confirm})
    .then(response =>{
      dispatch({type: AUTH_USER});
      localStorage.setItem('token', response.data.token);
      dispatch(push('/dashboard'));
    })
    .catch(() => {

      dispatch(authError("Email exists, try again."));
    })
  }
}
export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
