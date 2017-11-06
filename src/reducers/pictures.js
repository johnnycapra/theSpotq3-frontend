export default(state = [], action) => {
  switch(action.type){
    case 'GET_PICS':
      return state;
    case 'GET_PICS_FULFILLED':
      return [...action.payload.data]
    case 'GET_SINGLE_PIC':
      return state;
    case 'GET_SINGLE_PIC_FULFILLED':
      return [...action.payload.data]
    default:
      return state;
  }
}
