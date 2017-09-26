import { combinedReducers, createStore } from 'redux';

const initialState = {
  fetching: false,
  fetched: false,
  messages: [],
  error: null,
}

const messageReducer = (state=initialState, action) => {
  switch(action.type) {
    case "FETCH_MESSAGES_PENDING": {
      return {...state, fetching: true}
      break;
    }
    case "FETCH_MESSAGES_REJECTED": {
      state = {...state, fetching: false, error: action.payload};
      break;
    }
    case "FETCH_MESSAGES_FULFILLED": {
      return {
        ...state, 
        fetching: false,
        fetched: true,
        messages: action.payload,
      }
      break;
    }
  }
  
  return state;
}


export default messageReducer;