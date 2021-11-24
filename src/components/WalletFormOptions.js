import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrenciesKeys } from '../actions';
import CurrencyForm from './CurrencyForm';

const METHOD_LIST = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const TAG_LIST = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class WalletFormOptions extends React.Component {
  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  render() {
    const { tag, method, currency, handlerChanges, currencies } = this.props;

    return (
      <div>
        <CurrencyForm
          handlerChanges={ handlerChanges }
          currency={ currency }
          currencies={ currencies }
        />
        Method:
        <select
          onChange={ handlerChanges }
          value={ method }
          name="method"
          data-testid="method-input"
        >
          {METHOD_LIST.map((meth) => <option key={ meth }>{meth}</option>)}
        </select>
        Tag:
        <select
          onChange={ handlerChanges }
          value={ tag }
          name="tag"
          data-testid="tag-input"
        >
          {TAG_LIST.map((option) => <option key={ option }>{option}</option>)}
        </select>
      </div>
    );
  }
}

WalletFormOptions.propTypes = {
  tag: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  handlerChanges: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(fetchCurrenciesKeys()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletFormOptions);
