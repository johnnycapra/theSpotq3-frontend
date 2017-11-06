export default(state = [], action) => {
  switch(action.type){
    case 'GET_POSTS_FULFILLED':
      return [...action.payload.data]
    default:
      return state;
    }
}
