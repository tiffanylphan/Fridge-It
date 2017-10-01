import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Form, Button, Input, Select } from 'semantic-ui-react'

import * as itemActions from '../actions/itemActions.js'


class itemAddition extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { itemActions, fridge } = this.props;
    let type = '';
    let username = localStorage.getItem('name');
    
    const handleSubmit = () => {
      const item = {};
      
      let name = document.getElementById('inputItm');
      item.name = name.value;
      let qty = document.getElementById('inputQty');
      item.quantity = qty.value;
      item.type = type;
      item.user = username;
      console.log('item being created', item);
      itemActions.addItem(item, fridge.id);
      name.value = '';
      qty.value = '';
      type = '';
    }
    const options = [
      {
        key: 1, 
        text: "produce",
        value: "Produce"
      },
      {
        key: 2, 
        text: "dairy",
        value: "Dairy"
      },
      {
        key: 3, 
        text: "protein",
        value: "Protein"
      },
      {
        key: 4, 
        text: "grains and starches",
        value: "Grains and starches"
      },
      {
        key: 5, 
        text: "frozen",
        value: "Frozen"
      },
      {
        key: 6, 
        text: "miscellaneous",
        value: "Misc"
      }
    ]; 

    const item = {};

    return (
      <Form 
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <Form.Group inline>
          <Form.Input 
            //width={4} 
            placeholder='Type name here'
            id="inputItm"
          />
          <Form.Input 
            width={2}
            type='number'
            id="inputQty"
          />
          <Form.Select 
            //width={2}
            placeholder='Browse categories' 
            options={options} 
            id="inputType"
            onChange={(e, {value}) => {
              type = value;
            }}
          />

          <Form.Button 
           //width={1} 
            content='Go'/>
        </Form.Group>
      </Form>
    )
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
    itemActions: bindActionCreators(itemActions, dispatch)
  }
}

export default connect(fridgeState, fridgeDispatch)(itemAddition);