import React from 'react';
import DOMReact from 'react-dom';
import { Provider } from 'react-redux';
<<<<<<< HEAD
import { createStore } from 'redux';
import FridgeApp from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
=======
import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise';
>>>>>>> [Update] Initialize Redux and middlewares

import FridgeApp from './reducers';
import App from './component/app';

<<<<<<< HEAD
const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(FridgeApp);
=======
const middleWare = applyMiddleware(promise(), thunk, logger());
const store = createStore(FridgeApp, middleWare);
>>>>>>> [Update] Initialize Redux and middlewares

DOMReact.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);