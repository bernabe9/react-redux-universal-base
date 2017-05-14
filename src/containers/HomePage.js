import React from 'react';
import { connect } from 'react-redux';
import LogoutButton from '../components/session/LogoutButton';

const HomePage = ({ authenticated, user }) => (
  <div>
    { authenticated &&
      <p>{user.email}, welcome to React Redux Universal</p>   
    }
    <LogoutButton />
  </div>
);

const mapState = ({ session }) => ({
  authenticated: session.authenticated,
  user: session.user
});

export default connect(mapState)(HomePage);
