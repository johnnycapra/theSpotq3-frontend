import axios from 'axios';
import { push } from 'react-router-redux';
import {
   AUTH_USER,
   AUTH_ERROR,
   FETCH_MESSAGE
} from './types';

export function signUser({email, password}){
  return dispatch => {
    axios.post('http://localhost:8000/users/signin', {email, password})
    .then(response => {
      dispatch({type: AUTH_USER});
      localStorage.setItem("token", response.data.token);
      dispatch(push('/dashboard'));
    })
    .catch(() => {
      dispatch(authError('Invalid Credentials'))
    })
  }
}

export function fetchMessage(){
  return function(dispatch){
    axios.get('http://localhost:8000/users/auth', {headers: {authorization: localStorage.getItem('token')}})
    .then(response => {
      console.log(response);
      dispatch({
        type: FETCH_MESSAGE,
        payload: response.data.message
      })
    })
  }
}

export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
