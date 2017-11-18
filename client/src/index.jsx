import React from 'react';
import DOMReact from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { Router } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import { createLogger as logger } from 'redux-logger';
import promise from 'redux-promise-middleware';

import FridgeApp from './reducers';
import App from './component/app.jsx';
import HomeView from './component/Home/homeView.jsx';
import LandingPage from './component/Landing_Page/landingPage.jsx';

const history = createHistory();
const middleware = applyMiddleware(promise(), thunk, logger(), routerMiddleware(history));

const store = createStore(FridgeApp, middleware);

DOMReact.render(
  <Provider store={store}>
    <Router history={history}>
      <App history={history} />
    </Router>
  </Provider>,
  document.getElementById('app')
);