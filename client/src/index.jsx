import React from 'react';
import DOMReact from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FridgeApp from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import App from './component/app';

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(FridgeApp);

DOMReact.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);