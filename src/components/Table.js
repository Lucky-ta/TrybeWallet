import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
            </tr>
          </thead>
          <tbody>
            { expenses.map((exp) => {
              const { description, tag, method, value, currency, exchangeRates } = exp;
              const { ask } = exchangeRates[currency];
              const convertedValue = ask * value;

              return (
                <tr key={ value }>
                  <td>{description}</td>
                  <td>{tag}</td>
                  <td>{method}</td>
                  <td>{value}</td>
                  <td>
                    {
                      currency === 'USD' ? 'Dólar Comercial'
                        : exchangeRates[currency].name
                    }
                  </td>
                  <td>{ parseFloat(exchangeRates[currency].ask).toFixed(2) }</td>
                  <td>
                    {convertedValue.toFixed(2)}
                  </td>
                  <td>Real</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);
