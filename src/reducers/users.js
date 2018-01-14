export default(state = [], action) => {
  switch(action.type){
    case 'GET_ALL_USERS':
      return state;
    case 'GET_ALL_USERS_FULFILLED':
      return [...action.payload.data];
    default:
      return state;
    }
}
