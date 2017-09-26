import { combinedReducers, createStore } from 'redux';

const initialState = {
  fetching: false,
  fetched: false,
  posting: false,
  posted: false,
  messages: [],
  error: null,

}

const messageReducer = (state=initialState, action) => {
  switch(action.type) {
    case "FETCH_MESSAGES_PENDING": {
      return {...state, fetching: true}
    }
    case "FETCH_MESSAGES_REJECTED": {
      return {...state, fetching: false, error: action.payload};
    }
    case "FETCH_MESSAGES_FULFILLED": {
      return {
        ...state, 
        fetching: false,
        fetched: true,
        messages: action.payload,
      }
    }
    case "POST_MESSAGES_PENDING": {
      return {...state, posting: true}
    }
    case "POST_MESSAGES_REJECTED": {
      return {...state, posting: false, error: action.payload};
    }
    case "POST_MESSAGES_FULFILLED": {
      return {
        ...state, 
        posting: false,
        posted: true,
        messages: action.payload,
      }
    }
  }
  
  return state;
}


export default messageReducer;