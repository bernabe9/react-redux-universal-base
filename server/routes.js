import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../src/components/App';
import HomePage from '../src/containers/HomePage';
import LoginPage from '../src/containers/LoginPage'; // eslint-disable-line import/no-named-as-default
import SignUpPage from '../src/containers/SignUpPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="login" component={LoginPage} />
    <Route path="sign-up" component={SignUpPage} />
  </Route>
);
