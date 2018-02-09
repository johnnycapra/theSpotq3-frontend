import axios from 'axios';
export const getAllPosts = (id) => {
  return {
    type: 'GET_POSTS',
    payload: axios.get(`https://afternoon-bastion-14906.herokuapp.com/posts/${id}`)
  }
}

export const addedPost = ({content, user_id, picture_id}) => {
  console.log("ADDED POST: ", content, user_id, picture_id);
  return {
    type: 'ADD_POST',
    payload: axios.post(`https://afternoon-bastion-14906.herokuapp.com/posts/new`, ({content, user_id, picture_id}))
  }
}
