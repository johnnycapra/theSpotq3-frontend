import axios from 'axios';
export const getAllPosts = (id) => {
  return {
    type: 'GET_POSTS',
    payload: axios.get(`http://localhost:8000/posts/${id}`)
  }
}

export const addedPost = (content) => {
  console.log("ADDED POST: ", content)
  return {
    type: 'ADD_POST',
    payload: axios.post(`http://localhost:8000/posts/new`, {content: content})
  }
}
