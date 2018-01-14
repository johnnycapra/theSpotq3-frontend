export default(state = [], action) => {
  switch(action.type){
    case 'ADD_USER_FULFILLED':
      return [...action.payload.data]
    case 'LOGIN_USER_FULFILLED':
      return action.payload.data;
    case 'LOGOUT_USER_FULFILLED':
      return [...action.payload.data];
    default:
      return state;
  }
}
