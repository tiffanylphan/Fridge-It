import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Button } from 'semantic-ui-react';

import Messages from './messagesListView.jsx';
import Search from './searchListView.jsx';
import Fridge from './fridgeView.jsx';
import * as fridgeActions from '../actions/fridgeActions.js';

class Home extends Component {
  constructor (props) {
    super(props);
  }

  componentWillMount() {
    let items = document.getElementsByClassName("item nav-item");
    for (let i = 0; i < items.length; i++) {
      if (items[i].text === "Home") items[i].className = "item nav-item active";
    };

    this.props.actions.getFridge(localStorage.getItem('name'));
  }

  render() {

    if (this.props.fetched || this.props.posted) {
      return (
      <Grid divided="vertically">
        <Grid.Row columns={2} centered>
          <Grid.Column> 
            <Grid.Row>
              <Fridge />
            </Grid.Row>
            <br/>
            <Grid.Row textAlign={'center'}>
              <Search />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <Messages />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      )
    } else {
      let username = localStorage.getItem('name');

      return (
        <div>
          <Button content={'Create a Fridge'} color={'blue'}
          onClick={(e) => {
            e.preventDefault();

            const userArray = [];
            userArray.push(username);

            const fridgeObj = {
              users: userArray,
              name: username,
            }

            this.props.actions.addFridge(fridgeObj);
          }}
          />
        </div>
      )
    }
  }
}

const homeState = (store) => {
  return {
    fetched: store.fridge.fetched,
    posted: store.fridge.posted,
  }
}

const homeDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(fridgeActions, dispatch),
  }
}

export default connect(homeState, homeDispatch)(Home);
