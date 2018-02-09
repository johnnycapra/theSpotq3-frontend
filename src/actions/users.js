import axios from 'axios';

export const getAllUsers = () => {
  return {
    type: 'GET_ALL_USERS',
    payload: axios.get(`https://afternoon-bastion-14906.herokuapp.com/users`)
  }
}

export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    payload: axios.post(`https://afternoon-bastion-14906.herokuapp.com/users`, user)

  }
}

export const userLogin = (user) => {

  return {
    type: "LOGIN_USER",
    payload: axios.post('https://afternoon-bastion-14906.herokuapp.com/users/login', user)
  }
}

export const logoutUser = (id) => {
  return {
    type:"LOGOUT_USER",
    payload: id
  }
}
