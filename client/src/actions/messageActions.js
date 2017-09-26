import axios from 'axios';

export const fetchMessages = (fridgeId) => {
  return function(dispatch) {
    axios.get('/api/allMessages', {
      data: {
        messageText: messages
      }
    })
    .then((response) => {
      dispatch({type: 'FETCH_MESSAGES_FULFILLED', payload: response.data});
    })
    .catch((err) => {
      dispatch({type: 'FETCH_MESSAGES_REJECTED', payload: err});
    });
  };
};
 
export const postMessages = () => {
  return function(dispatch) {
    axios.post('/api/allMessages', {
      data: {
        messages: messages
      }
    })
    .then((response) => {
      dispatch({type: 'POST_MESSAGES_FULFILLED', payload: response.data});
    })
    .catch((err) => {
      dispatch({type: 'POST_MESSAGES_REJECTED', payload: err});
    });
  };
};

// store.dispatch({type: POST_MESSAGE,});
// store.dispatch({type: DELETE_MESSAGE,});
// store.dispatch({type: UPDATE_MESSAGE});


// export default 