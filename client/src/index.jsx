import React from 'react';
import DOMReact from 'react-dom';
import { Provider } from 'react-redux';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import FridgeApp from './reducers';
import App from './component/app';

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(FridgeApp, middleWare);

DOMReact.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);