/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { browserHistory, applyRouterMiddleware } from 'react-router';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import { sessionService } from 'redux-react-session';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import routes from './routes';
import './styles/styles.scss';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const appRoutes = routes;

sessionService.initSessionService(store);

const renderApp = appRoutes => {
  render(
    <AppContainer>
      <Root store={store} history={history} routes={appRoutes} render={applyRouterMiddleware(useScroll())}/>
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApp(appRoutes);

if (module.hot) {
  module.hot.accept('./routes', () => {
    renderApp(appRoutes);
  });
}
