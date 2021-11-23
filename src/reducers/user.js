// Esse reducer será responsável por tratar as informações da pessoa usuária
import { USER_ACTION } from '../actions';

const USER_INITIAL_STATE = {
  email: '',
};

function user(state = USER_INITIAL_STATE, action) {
  switch (action.type) {
  case USER_ACTION:
    return {
      ...state,
      email: action.payload,
    };
  default:
    return state;
  }
}

export default user;
