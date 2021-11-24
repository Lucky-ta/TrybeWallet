import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const METHOD_LIST = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const TAG_LIST = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

class WalletFormOptions extends React.Component {
  render() {
    const { tag, method, currency, handlerChanges } = this.props;
    return (
      <div>
        currency:
        <select
          onChange={ handlerChanges }
          value={ currency }
          name="currency"
          data-testid="currency-input"
        >
          <option>USD</option>
          <option>EUR</option>
        </select>
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
  // currencies: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletFormOptions);
