import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Form, Button, Input, Select } from 'semantic-ui-react'

import * as itemActions from '../actions/itemActions.js'


class itemAddition extends Component {
  constructor(props) {
    super(props);
  }
  
  // handleSubmit() {
  //   const item = {};
    
  //   let name = document.getElementById('inputItm');
  //   item.name = name.value;
  //   let qty = document.getElementById('InputQty');
  //   item.quantity = qty.value;

  //   console.log('item being created', item);
  //   this.props.itemActions.addItem(item, 1); //change 1 to fridgeId
  // }

  render() {
    const options = [{
      key: 1, 
      text: "test",
      value: "test"
    }]; 

    const item = {}; 

    return (
      <Form>
        <Form.Group>
          <Form.Field 
            control={Input}
            width={4} 
            placeholder='Type name here' 
            onChange={(e) => (item.name = e.target.value)}
          />
          <Form.Field 
            control={Input} 
            width={3}
            type='number'
            onChange={(e) => (item.quantity = e.target.value)}
          />
          <Form.Select 
            width={2}
            options={options} 
            placeholder='Browse categories' 
            onChange={(e) => (item.type = e.target.value)}
          />
        <Form.Button content='Go' onClick={ (e) => {
            e.preventDefault();
            this.props.itemActions.addItem(item, 1);
            }}/>
        </Form.Group>
      </Form>
    )
  }
}

const fridgeState = (store) => {
  fridge: store.fridge.fridge
}

const dispatch = (dispatch) => {
  return {
    itemActions: bindActionCreators(itemActions, dispatch)
  }
}

export default connect(null, dispatch)(itemAddition);