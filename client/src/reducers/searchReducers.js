export default function reducer(state={
  recipes: [],
  fetching: false,
  fetched: false,
  onRecipeListPage: false,
  error: null
}, action) {
  switch(action.type) {
    case "FETCH_RECIPE": {
      return {...state, fetching: true};
    }
    case "FETCH_RECIPE_REJECTED": {
      return {...state, fetching: false, error: action.payload};
    }
    case "FETCH_RECIPE_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        recipes: action.payload,
      }
    }
  }
}