import fetchAPI from '../helper/fetchAPI';

// Coloque aqui suas actions
export const USER_ACTION = 'USER_ACTION';
export const WALLET_ACTION = 'WALLET_ACTION';
export const CURRENCIES_RESPONSE = 'CURRENCIES_RESPONSE';

export const userAction = (email) => ({
  type: USER_ACTION,
  payload: email,
});

export const walletAction = (expenses) => ({
  type: WALLET_ACTION,
  payload: expenses,
});

export const currenciesResponse = (currencies) => ({
  type: CURRENCIES_RESPONSE,
  payload: currencies,
});

export const fetchCurrenciesKeys = () => async (dispatch) => {
  const response = await fetchAPI();
  const currencies = Object.values(response);
  currencies.filter((curr) => curr.codein !== 'BRLT');

  dispatch(currenciesResponse(currencies));
};
