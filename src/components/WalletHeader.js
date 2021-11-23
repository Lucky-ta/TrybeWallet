import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
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
          <p data-testid="total-field">{0}</p>
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
});

WalletHeader.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(WalletHeader);
