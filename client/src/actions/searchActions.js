import axios from 'axios';

export function fetchRecipes(ingredients) {
  return function(dispatch) {
    axios.put('/api/search', {
      data: {
        ingredients: ingredients,
      }
    })
      .then(response => {
        dispatch({type: "FETCH_RECIPES_FULFILLED", payload: response.data});
      })
      .catch(err => {
        dispatch({type: "FETCH_RECIPES_REJECTED", payload: err});
      });
  };
};