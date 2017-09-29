import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Popup, Card, Button, Input, Form } from 'semantic-ui-react';

import ItemListView from './itemListView.jsx';
import ItemAddition from './itemAddition.jsx';

import * as fridgeActions from '../actions/fridgeActions.js';
import * as itemActions from '../actions/itemActions.js';

import styles from '../../public/fridge.css'

class Fridge extends Component {
  constructor(props) {
    super(props);
    this.filterItems = this.filterItems.bind(this);
  }
  
  componentDidMount() {
    this.props.fridgeActions.getFridge(localStorage.getItem('visitorId') || localStorage.getItem('name'));
    let state = this;
    setTimeout(() => {
      state.props.itemActions.getItems(localStorage.getItem('fId'));
    }, 500);
  }

  filterItems(type) {
    return this.props.items.filter(item => {
      if (item.type === type) {
        return item; 
      }
    })
  }

  render() {
    const types = [
      {
        name: "produce", 
        position: "top center"
      }, 
      {
        name: "dairy", 
        position: "top left"
      },
      {
        name: "protein",
        position: "left center"
      },
      {
        name: "grains",
        position: "top right"
      }, 
      {
        name: "frozen",
        position: "right center"
      }, 
      {
        name: "misc",
        position: "top left"
      }
    ]; 
    return (
      <div>
        <h3 className='ui dividing header'>{fridge.name && fridge.name.split('@')[0]}'s Fridge</h3>
        <div>
          <ItemAddition />
          <Form.Group inline>
            <Form.Input 
              id="inputFid"
              placeholder='Fridge ID'
            />
            <Form.Button content={'Switch Fridge'} color={'blue'}
              onClick={(e) => {
                e.preventDefault();
                this.props.fridgeActions.getFridge(document.getElementById('inputFid').value);
                localStorage.setItem('visitorId', document.getElementById('inputFid').value);
                location.reload();
                document.getElementById('inputFid').value = '';
              }}
            />
          </Form.Group>
        </div>
        <div className={styles.container}>
          {types.map(type => {
              let filteredItems = this.filterItems(type.name);
                return (
                    <Popup
                      trigger={<div className={styles[type.name]}>{type.name}</div>}
                      flowing
                      hoverable
                      position={type.position}
                    >
                      <ItemListView actions={itemActions} type={type} items={filteredItems}/> 
                    </Popup>
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
    posted: store.fridge.posted,
    fetched: store.fridge.fetched
  }
}

const fridgeDispatch = (dispatch) => {
  return {
    fridgeActions: bindActionCreators(fridgeActions, dispatch),
    itemActions: bindActionCreators(itemActions, dispatch)
  }
};

export default connect(fridgeState, fridgeDispatch)(Fridge); 