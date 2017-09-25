import React from 'react';
import DOMReact from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import FridgeApp from './reducers';

import App from './component/app';

let store = createStore(FridgeApp);

DOMReact.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);