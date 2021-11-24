import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  constructor() {
    super();
    this.totalExpensesValue = this.totalExpensesValue.bind(this);
  }

  // Créditos a função de Bruno Bartolomeu: https://github.com/tryber/sd-015-b-project-trybewallet/pull/67/files
  totalExpensesValue() {
    const { expense } = this.props;

    if (expense.length === 0) return 0;
    const total = expense.reduce((acc, expenses) => {
      const { value, currency, exchangeRates } = expenses;
      const { ask } = exchangeRates[currency];
      acc += value * ask;
      return acc;
    }, 0);
    return Math.round(total * 100) / 100;
  }

  render() {
    const { email } = this.props;

    return (
      <fieldset>
        <header>
          E-mail:
          {' '}
          <p data-testid="email-field">{email}</p>
          Despesa total:
          {' '}
          <p data-testid="total-field">{this.totalExpensesValue()}</p>
          Câmbio:
          {' '}
          <p data-testid="header-currency-field">BRL</p>
        </header>
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expense: state.wallet.expenses,
});

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
  expense: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(WalletHeader);
