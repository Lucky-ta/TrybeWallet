import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
    this.handlerEmailChange = this.handlerEmailChange.bind(this);
    this.handlerPasswordChange = this.handlerPasswordChange.bind(this);
    this.validateLogin = this.validateLogin.bind(this);
  }

  handlerEmailChange({ target }) {
    this.setState({ email: target.value });
  }

  handlerPasswordChange({ target }) {
    this.setState({ password: target.value });
  }

  validateLogin(email) {
    const re = /\S+@\S+\.\S+/;
    const minPassCharact = 6;
    const { password } = this.state;

    const emailRegex = re.test(email);

    if (emailRegex && password.length >= minPassCharact) {
      return false;
    } return true;
  }

  render() {
    const { email } = this.state;
    const { getEmail } = this.props;
    return (
      <fieldset>
        E-mail:
        <input
          type="text"
          data-testid="email-input"
          onChange={ this.handlerEmailChange }
        />
        Senha:
        <input
          type="password"
          data-testid="password-input"
          onChange={ this.handlerPasswordChange }
        />
        <Link to="/carteira">
          <button
            type="button"
            disabled={ this.validateLogin(email) }
            onClick={ () => getEmail(email) }
          >
            Entrar
          </button>
        </Link>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getEmail: (email) => dispatch(userAction(email)),
});

Login.propTypes = {
  getEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
