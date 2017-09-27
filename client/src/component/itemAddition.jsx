import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import * as actions from '../actions/itemActions.js'

class itemAddition extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div>
      <input id="name"
        type="text"
        value=""
        placeholder="input name here"
      ></input>
      <select id="type">
        <option selected> value="test" </option>
      </select>
      <input id="quantity"
        type="number"
        value=""
      ></input>
      <button
        type="submit"
        value="Submit"
        onClick={this.props.actions.addItem({
          name: document.getElementById("name").value,
          quantity: document.getElementById("quantity").value,
          type: document.getElementById("type").value
        })}
      ></button>
    </div>
  }
}

const dispatch = (dispatch) => {
  return {
    itemActions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null, dispatch)(itemAddition);