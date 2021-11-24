import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrencies, walletAction } from '../actions';
import WalletFormOptions from './WalletFormOptions';
import fetchAPI from '../helper/fetchAPI';

const INITIAL_STATE = {
  value: 0,
  description: '',
  currency: '',
  method: '',
  tag: '',
  exchangeRates: {},
};

class WalletForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {},
    };
    this.handlerChanges = this.handlerChanges.bind(this);
    this.saveExpenses = this.saveExpenses.bind(this);
    this.saveCurrencies = this.saveCurrencies.bind(this);
  }

  componentDidMount() {
    this.saveCurrencies();
  }

  handlerChanges({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async saveExpenses() {
    const { storeExpense } = this.props;
    const response = await fetchAPI();

    this.setState({ exchangeRates: response });
    storeExpense(this.state);
    this.setState((prevIDState) => ({
      id: prevIDState.id + 1,
      ...INITIAL_STATE,
    }));
  }

  async saveCurrencies() {
    const { storeCurrencies } = this.props;
    const response = await fetchAPI();

    const currencies = Object.keys(response);
    storeCurrencies(currencies);
  }

  render() {
    const { value, description, currency, method, tag } = this.state;

    return (
      <fieldset>
        expense:
        <input
          name="value"
          value={ value }
          type="number"
          data-testid="value-input"
          onChange={ this.handlerChanges }
        />
        Description:
        <textarea
          value={ description }
          name="description"
          data-testid="description-input"
          onChange={ this.handlerChanges }
        />
        <WalletFormOptions
          tag={ tag }
          method={ method }
          currency={ currency }
          handlerChanges={ this.handlerChanges }
        />
        <button
          onClick={ () => this.saveExpenses() }
          type="button"
        >
          Adicionar despesa
        </button>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  storeExpense: (expenses) => dispatch(walletAction(expenses)),
  storeCurrencies: (currencies) => dispatch(getCurrencies(currencies)),
});

WalletForm.propTypes = {
  storeExpense: PropTypes.func.isRequired,
  storeCurrencies: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(WalletForm);
