import React from 'react';
import { connect } from 'react-redux';

class WalletHeader extends React.Component {
  render() {
    const { email } = this.props;
    return (
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
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(WalletHeader);
