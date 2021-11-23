import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { walletAction } from '../actions';
import WalletFormOptions from './WalletFormOptions';

class WalletForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
    this.handlerChanges = this.handlerChanges.bind(this);
  }

  handlerChanges({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { storeExpense } = this.props;
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
          onClick={ () => storeExpense(this.state) }
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
});

WalletForm.propTypes = {
  storeExpense: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(WalletForm);
