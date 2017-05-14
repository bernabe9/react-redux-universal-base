/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { browserHistory, applyRouterMiddleware } from 'react-router';
import configureStore from '../src/store/configureStore';
require('../src/favicon.ico'); // Tell webpack to load favicon.ico
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import { sessionService } from 'redux-react-session';
import { AppContainer } from 'react-hot-loader';
import Root from '../src/containers/Root';
import routes from '../src/routes';
import '../src/styles/styles.scss';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const appRoutes = routes;

sessionService.initClientSession(store);

const renderApp = appRoutes => {
  render(
    <AppContainer>
      <Root store={store} history={history} routes={appRoutes} render={applyRouterMiddleware(useScroll())}/>
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApp(appRoutes);
