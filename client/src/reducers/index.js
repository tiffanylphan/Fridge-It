import { combineReducers } from 'redux';

import message from './messageReducers';
import search from './searchReducers';
import fridge from './fridgeReducers';
import item from './itemReducers';

const FridgeApp = combineReducers({
  message,
  search,
  fridge,
  item,
});

export default FridgeApp;