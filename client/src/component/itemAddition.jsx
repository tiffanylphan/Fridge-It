import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Input, Menu, Dropdown, Button } from 'semantic-ui-react'

import * as itemActions from '../actions/itemActions.js'

class itemAddition extends Component {
  constructor(props) {
    super(props);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const item = {};
    for (const field in this.refs) {
      item[field] = this.refs[field].value;
    }
    console.log('item being created', item);
    this.props.itemActions.addItem(item, 1); //change 1 to fridgeId
  }

  render() {
    const item = {}
    return (
      <Menu> 
      <Menu.Item>
        <Input placeholder='Item name'/>
      </Menu.Item>
      <Dropdown ref='type' item text='Browse categories'>
        <Dropdown.Menu>
          <Dropdown.Item data-value="test">Test</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item>
        <Input placeholder='Quantity' type='number'/>
      </Menu.Item>
      <Menu.Item>
        <Button content='Go' onClick={this.props.addItem(item, 1)}></Button>
      </Menu.Item>
    </Menu>
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