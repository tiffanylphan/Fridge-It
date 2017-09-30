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
import { autoRehydrate } from 'redux-persist';

import FridgeApp from './reducers';
import App from './component/app.jsx';
import HomeView from './component/homeView.jsx';
import LandingPage from './component/landingPage.jsx';

const history = createHistory();
const middleware = applyMiddleware(promise(), thunk, logger(), routerMiddleware(history));
const enhancers = compose(
    middleware,
    autoRehydrate()
);
const store = createStore(FridgeApp, enhancers);

DOMReact.render(
  <Provider store={store}>
    <Router history={history}>
      <App history={history} />
    </Router>
  </Provider>,
  document.getElementById('app')
);