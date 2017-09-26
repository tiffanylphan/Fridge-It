import axios from 'axios';

export function getItems(id) {
  return function(dispatch) {
    axios.get('/api/items/' + id)
      .then(({ data }) => {
        dispatch({type: 'FETCH_ITEMS_FULFILLED', payload: data})
      })
      .catch(err => { 
        dispatch({type: 'FETCH_ITEMS_REJECTED', payload: err})
      })
  }
}

export function addItem(item) {
  return function(dispatch) {
    axios.post('/api/items/:fridgeId', {
      name: item.name,
      quantity: item.quantity,
      type: req.body.type
    })
      .then(({ data }) => {
        dispatch({type: 'POST_ITEMS_FULFILLED', payload: data})
      })
      .catch(err => { 
        dispatch({type: 'POST_ITEMS_REJECTED', payload: err})
      })
  }
}
