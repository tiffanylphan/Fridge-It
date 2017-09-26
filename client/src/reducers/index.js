import { combineReducers } from 'redux';
import message from './messageReducers';
// import your reducer pages here
import search from './searchReducers';
import fridge from './fridgeReducers';
import item from './itemReducers';

const FridgeApp = combineReducers({
  // call your reducer pages here
  message,
  search,
  fridge,
  item,
});

export default FridgeApp;