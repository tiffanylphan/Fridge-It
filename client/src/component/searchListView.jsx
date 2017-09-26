import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchListEntry from './searchListEntry';
import searchActions from '../actions/searchActions.js';

class SearchListView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchRecipes(this.props.ingredients);
  }

  render() {
    const { recipeList, recipeFetched, recipeFetching } = this.props;

    if (!recipeList.length) {
      return (
        <div>
          {recipeList.map(recipe => {
            <SearchListEntry {...this.props.actions} key={recipe.id} recipe={recipe} />
          })}
        </div>
      )
    }
  }
};

const mapState = (store) => {
  return {
    ingredients: store.fridgeItems, // TODO: update with correct prop name
    recipeList: store.search.recipes,
    recipeFetched: store.search.fetched,
    recipeFetching: store.search.fetching,
    recipeError: store.search.error,
  }
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(searchActions, dispatch),
  }
};

export default connect(mapState, mapDispatch)(SearchListView);