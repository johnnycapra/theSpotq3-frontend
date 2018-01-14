import { ADD_POST } from '../actions/types';

const INITIAL_STATE = { allPost: [], content: null};

export default(state = INITIAL_STATE, action) => {
  switch(action.type){
    case 'GET_POSTS':
      return state;
    case 'GET_POSTS_FULFILLED':
      return {...state, allPost: action.payload.data};
    case 'ADD_POST_FULFILLED':
      return {...state, content: action.payload.data};
    default:
      return state;
  }
}
