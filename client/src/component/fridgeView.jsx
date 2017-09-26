import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ItemListView from './itemListView.jsx';
import * as fridgeActions from '../actions/fridgeActions.js';
import * as itemActions from '../actions/itemActions.js';

class Fridge extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    this.props.fridgeActions.getFridge(1); // DONT FORGET TO EDIT OUT THE 1
    this.props.itemActions.getItems(1); // DONT FORGET TO EDIT OUT THE 1
  }

  render() {
    return (
      <div>
        Hi this is fridge
        <ItemListView />
      </div>
    );
  }
}

const fridgeState = (store) => {
  return {
    fridge: store.fridge.fridge
  }
}

const fridgeDispatch = (dispatch) => {
  return {
    fridgeActions: bindActionCreators(fridgeActions, dispatch),
    itemActions: bindActionCreators(itemActions, dispatch)
  }
};

export default connect(fridgeState, fridgeDispatch)(Fridge); 


