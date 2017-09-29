import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Popup, Card } from 'semantic-ui-react';

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
    this.props.fridge.id ? this.props.fridgeActions.getFridge(this.props.fridge.id) : null;
    this.props.fridge.id ? this.props.itemActions.getItems(this.props.fridge.id) : null;
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
    
    return (
      <div>
        <h3 className='ui dividing header'>Fridge</h3>
        <div>
          {this.props.fridge.id ? <ItemAddition /> : <button>Create a Fridge</button>}
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
                      <ItemListView actions={this.props.itemActions} type={type} items={filteredItems}/> 
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
    fridge: store.fridge.fridge,
    items: store.items.items,
  }
}

const fridgeDispatch = (dispatch) => {
  return {
    fridgeActions: bindActionCreators(fridgeActions, dispatch),
    itemActions: bindActionCreators(itemActions, dispatch)
  }
};

export default connect(fridgeState, fridgeDispatch)(Fridge); 


