import axios from 'axios';

export const getAllPics = () => {
  return {
    type: 'GET_PICS',
    payload: axios.get(`http://localhost:8000/pics`)
  }
}
export const getPic = (id) => {
  return {
    type: 'GET_SINGLE_PIC',
    payload: axios.get(`http://localhost:8000/pics/${id}`)
  }
}
