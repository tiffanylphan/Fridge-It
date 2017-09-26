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

  filterItems(type) {
    this.props.items.filter(item => {
      if (item.type === type) {
        return item; 
      }
    })
  }

  render() {
    const types = []; 
    for (let i = 0; i < types.length; i++) {
      let filteredItems = filterItems(types[i]);
          return (
            <div className={types[i]}>
              <ItemListView type={types[i]} items={filteredItems}/> 
            </div>
          )
    
    }
  }
}

const fridgeState = (store) => {
  return {
    fridge: store.fridge.fridge,
    items: store.items.items
  }
}

const fridgeDispatch = (dispatch) => {
  return {
    fridgeActions: bindActionCreators(fridgeActions, dispatch),
    itemActions: bindActionCreators(itemActions, dispatch)
  }
};

export default connect(fridgeState, fridgeDispatch)(Fridge); 


