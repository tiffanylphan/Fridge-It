const initialState = {
  items: [],
  fetching: false,
  fetched: false,
  posting: false,
  posted: false,
  deleting: false,
  deleted: false,
  error: null
}

const itemReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'FETCH_ITEMS_PENDING': {
      return {...state, fetching: true}
      break;
    }
    case 'FETCH_ITEMS_REJECTED': {
      state = {...state, fetching: false, error: action.payload};
      break;
    }
    case 'FETCH_ITEMS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        items: action.payload
      }
      break; 
    }
    case 'POST_ITEMS_PENDING': {
      return {...state, posting: true}
      break;
    }
    case 'POST_ITEMS_REJECTED': {
      state = {...state, posting: false, error: action.payload}
      break;
    }
    case 'POST_ITEMS_FULFILLED': {
      return {
        ...state,
        posting: false,
        posted: true,
        items: state.items.push(action.payload)
      }
      break;
    }
  }
  return state;
}

export default itemReducer; 