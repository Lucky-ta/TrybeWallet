// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_ACTION } from '../actions';

const WALLET_INITIAL_STATE = {
  currencies: [],
  expenses: [],

};

function wallet(state = WALLET_INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET_ACTION:
    return {
      ...state, expenses: [...state.expenses, { ...action.payload }],
    };
  default:
    return state;
  }
}

export default wallet;
