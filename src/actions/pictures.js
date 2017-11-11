import axios from 'axios';

export const getAllPics = () => {
  return {
    type: 'GET_PICS',
    payload: axios.get(`http://localhost:8000/pics`)
  }
}

export const singlePic = (id) => {
  return {
    type: 'SINGLE_PIC',
    payload: axios.get(`http://localhost:8000/pics/${id}`)
  }
}
