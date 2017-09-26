import { combineReducers } from 'redux';
import messageReducers from './messageReducers';
// import your reducer pages here

const FridgeApp = combineReducers({
  // call your reducer pages here
  message: messageReducers,
});

export default FridgeApp;