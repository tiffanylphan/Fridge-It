import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Popup, Card, Button } from 'semantic-ui-react';

import ItemListView from './itemListView.jsx';
import ItemAddition from './itemAddition.jsx';

import * as fridgeActions from '../actions/fridgeActions.js';
import * as itemActions from '../actions/itemActions.js';

class Fridge extends Component {
  constructor(props) {
    super(props);
    this.filterItems = this.filterItems.bind(this);
  }
  
  componentWillMount() {
    this.props.fridgeActions.getFridge(localStorage.getItem('name'));
    localStorage.getItem('fId') ? this.props.itemActions.getItems(localStorage.getItem('fId')) : null;
  }

  filterItems(type) {
    return this.props.items.filter(item => {
      if (item.type === type) {
        return item; 
      }
    })
  }

  render() {
    const types = ["produce", "dairy", "protein", "grains", "frozen", "misc"];
    const { fridge, fridgeActions, itemActions, fetched, posted } = this.props;
    let username = localStorage.getItem('name');

    return (
      <div>
        <h3 className='ui dividing header'>Fridge</h3>
        <div>
          {(posted || fridge.id) ? <ItemAddition /> : 
            <Button content={'Create a Fridge'} color={'blue'}
            onClick={(e) => {
              e.preventDefault();

              const userArray = [];
              userArray.push(username);

              const fridgeObj = {
                users: userArray,
                name: username,
              }

              this.props.fridgeActions.addFridge(fridgeObj);
            }}
            />}
        </div>
        <div className='wrapper'>
          {types.map(type => {
              let filteredItems = this.filterItems(type);
                return (
                  <div className={type}>
                    <Popup
                      trigger={<Card>{type}</Card>}
                      flowing
                      hoverable
                    >
                      <ItemListView actions={itemActions} type={type} items={filteredItems}/> 
                    </Popup>
                  </div>
                )
          })}
        </div>
      </div>
    )
  }
}

const fridgeState = (store) => {
  return {
    username: store.auth.username,
    fridge: store.fridge.fridge,
    items: store.items.items,
    posted: store.fridge.posted
  }
}

const fridgeDispatch = (dispatch) => {
  return {
    fridgeActions: bindActionCreators(fridgeActions, dispatch),
    itemActions: bindActionCreators(itemActions, dispatch)
  }
};

export default connect(fridgeState, fridgeDispatch)(Fridge); 


