import axios from 'axios';
import { push } from 'react-router-redux';
import {
   AUTH_USER,
   AUTH_ERROR,
   FETCH_ANY
} from './types';

export function signUser({email, password}){
  return dispatch => {
    axios.post('http://localhost:8000/users/signin', {email, password})
    .then(response => {
      console.log(response);
      dispatch({type: AUTH_USER});
      localStorage.setItem("token", response.data.token);
      dispatch(push('/dashboard'));
    })
    .catch(() => {
      dispatch(authError('Invalid Credentials'))
    })
  }
}

export function fetchAny(){
  return function(dispatch){
    axios.get('http://localhost:8000/', {headers: {authorization: localStorage.getItem('token')}})
    .then(response => {
      console.log(response);
      dispatch({
        type: FETCH_ANY,
        payload: {email: response.data.email, id: response.data.id, username: response.data.username}
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
