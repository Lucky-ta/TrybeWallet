import PropTypes from 'prop-types';
import React from 'react';

class CurrencyForm extends React.Component {
  render() {
    const { handlerChanges, currency, currencies } = this.props;

    return (
      <div>
        <label htmlFor="currency-options">
          moeda
          <select
            id="currency-options"
            name="currency"
            onChange={ handlerChanges }
            value={ currency }
            data-testid="currency-input"
          >
            {currencies.filter((curr) => curr !== 'USDT').map((code) => (
              <option data-testid={ code } key={ code }>{ code }</option>
            ))}
          </select>
        </label>
      </div>
    );
  }
}

CurrencyForm.propTypes = {
  currencies: PropTypes.shape({
    filter: PropTypes.func,
  }).isRequired,
  currency: PropTypes.arrayOf(PropTypes.object).isRequired,
  handlerChanges: PropTypes.func.isRequired,
};

export default CurrencyForm;
