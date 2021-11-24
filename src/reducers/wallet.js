// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES_ACTION, WALLET_ACTION } from '../actions';

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
  case CURRENCIES_ACTION:
    return {
      ...state, currencies: [action.payload],
    };
  default:
    return state;
  }
}

export default wallet;
