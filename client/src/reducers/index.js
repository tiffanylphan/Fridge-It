import { combineReducers } from 'redux';
import messageReducers from './messageReducers';
// import your reducer pages here
import search from './searchReducers';

const FridgeApp = combineReducers({
  // call your reducer pages here
  message: messageReducers,
  search,
});

export default FridgeApp;