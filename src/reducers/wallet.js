// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const WALLET_INITIAL_STATE = {
  currencies: [],
  expenses: [],

};

function wallet(state = WALLET_INITIAL_STATE, action) {
  switch (action.type) {
  default:
    return state;
  }
}

export default wallet;
