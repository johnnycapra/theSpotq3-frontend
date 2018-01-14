import axios from 'axios';
export const getAllPosts = (id) => {
  return {
    type: 'GET_POSTS',
    payload: axios.get(`http://localhost:8000/posts/${id}`)
  }
}

export const addedPost = ({content, user_id, picture_id}) => {
  console.log("ADDED POST: ", content, user_id, picture_id);
  return {
    type: 'ADD_POST',
    payload: axios.post(`http://localhost:8000/posts/new`, ({content, user_id, picture_id}))
  }
}
