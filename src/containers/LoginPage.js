import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { Helmet } from "react-helmet";
import * as sessionActions from '../actions/sessionActions';
import LoginForm from '../components/session/LoginForm';
require('../styles/login.scss');

export const LoginPage = ({ actions: { login } }) => (
  <div>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <p>LOGIN</p>
    <LoginForm onSubmit={login}/>
    <Link to="/sign-up"> Sign up </Link>
  </div>
);

const { object } = PropTypes;

LoginPage.propTypes = {
  actions: object.isRequired
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
};

export default connect(null, mapDispatch)(LoginPage);
