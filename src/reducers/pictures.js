const INITIAL_STATE = { all: [], solopic: null};

export default(state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'GET_PICS':
      return state;
    case 'GET_PICS_FULFILLED':
      return {...state, all: action.payload.data};
    case 'SINGLE_PIC_FULFILLED':
      return {...state, solopic: action.payload.data }
    default:
      return state;
  }
}
