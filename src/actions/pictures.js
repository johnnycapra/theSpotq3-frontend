import axios from 'axios';

export const getAllPics = () => {
  return {
    type: 'GET_PICS',
    payload: axios.get(`https://afternoon-bastion-14906.herokuapp.com/pics`)
  }
}

export const singlePic = (id) => {
  return {
    type: 'SINGLE_PIC',
    payload: axios.get(`https://afternoon-bastion-14906.herokuapp.com/pics/${id}`)
  }
}
