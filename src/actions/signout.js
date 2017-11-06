import {
  UNAUTH
} from './types';
import { push } from 'react-router-redux';

export function signoutUser() {
  localStorage.removeItem('token');
  return {type: UNAUTH}

}
