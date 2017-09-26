import React, { Component } from 'react';

import Messages from './messagesListView';
import Search from './searchListView';
import Fridge from './fridgeListView';

class Home extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
    
    <div>
      <div>
        <Messages />
      </div>
      <div>
        <Search />
      </div>
      <div> 
        <Fridge />
      </div>
    </div>

    )
  }

}



