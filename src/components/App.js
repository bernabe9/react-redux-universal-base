// This component handles the App template used on every page.
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";

const App = ({ children }) => (
  <div>
    <Helmet>
      <title>React Redux Universal Base</title>
      <meta name="og:url" content=" https://react-redux-universal-base.herokuapp.com/" />
      <meta name="og:title" content="test" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://avatars1.githubusercontent.com/u/18464392?v=3&s=460" />
    </Helmet>
    {children}
  </div>
);

const { object } = PropTypes;

App.propTypes = {
  children: object.isRequired
};

export default App;
