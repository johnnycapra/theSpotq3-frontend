import axios from 'axios';

export const getAllPosts = () => {
  return {
    type: 'GET_POSTS',
    payload: axios.get(`http://localhost:8000/posts`)
  }
}
