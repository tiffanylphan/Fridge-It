import { combineReducers } from 'redux';
import message from './messageReducers';
// import your reducer pages here
import search from './searchReducers';

const FridgeApp = combineReducers({
  // call your reducer pages here
  message,
  search,
});

export default FridgeApp;