import axios from 'axios';

export const getAllUsers = () => {
  return {
    type: 'GET_ALL_USERS',
    payload: axios.get(`http://localhost:8000/users`)
  }
}

export const addUser = (user) => {
  return {
    type: 'ADD_USER',
    payload: axios.post(`http://localhost:8000/users`, user)

  }
}

export const userLogin = (user) => {

  return {
    type: "LOGIN_USER",
    payload: axios.post('http://localhost:8000/users/login', user)
  }
}

export const logoutUser = (id) => {
  return {
    type:"LOGOUT_USER",
    payload: id
  }
}
