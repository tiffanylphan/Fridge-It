import axios from 'axios';

// store.dispatch({
//   type: 'FETCH_MESSAGES',
//   payload: axios.get('/api/allMessages'),
// });

export function getMessages() {
  return function(dispatch) {
    axios.get('/api/allMessages')
  }
}


// store.dispatch({type: POST_MESSAGE,});
// store.dispatch({type: DELETE_MESSAGE,});
// store.dispatch({type: UPDATE_MESSAGE});


// export default 