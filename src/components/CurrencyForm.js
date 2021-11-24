import React from 'react';

class CurrencyForm extends React.Component {
  render() {
    const { handlerChanges, currency, currencies } = this.props;

    return (
      <div>
        moeda:
        <select
          name="currency"
          onChange={ handlerChanges }
          value={ currency }
          data-testid="currency-input"
        >
          {currencies.map(({ code }) => (
            <option data-testid={ code } key={ code }>{ code }</option>
          ))}
        </select>
      </div>
    );
  }
}

export default CurrencyForm;
