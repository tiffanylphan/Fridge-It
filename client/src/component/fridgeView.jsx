import React, { Component } from 'React'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ItemListView from './itemListView'
import fridgeActions from '../actions/fridgeActions.js'
import itemActions from '../actions/itemActions.js'

class Fridge extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    this.props.dispatch(getFridge());
    this.props.dispatch(getItems());
  }

  render() {
    <div>
      {this.props.fridge}
      <ItemListView />
    </div>
  }
}

const fridgeState = (store) => {
  return {
    fridge: store.fridge
  }
}

const dispatch = (dispatch) => {
  return {
    fridgeActions: bindActionCreators(fridgeActions, dispatch),
    itemActions: bindActionCreators(itemActions, dispatch)
  }
};

export default connect(fridgeState, dispatch)(fridgeView); 


