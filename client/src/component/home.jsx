import React, { Component } from 'react';

<<<<<<< HEAD
import Messages from './messagesListView.jsx';
import Search from './searchListView.jsx';
import Fridge from './fridgeView.jsx';
=======
import Messages from './messagesListView';
import Search from './searchListView';
import Fridge from './fridgeView';
>>>>>>> [update] correct path for fridge

class Home extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
    
    <div>
      Hello this is HOME
      <div>
        <div> 
          <Fridge />
        </div>
        <div>
          <Messages />
        </div>
      </div>
      <div>
        <Search />
      </div>
    </div>

    )
  }

}


export default Home;
