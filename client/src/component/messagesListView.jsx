import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MessageListEntry from './messageListEntry.jsx';
import * as messageActions from '../actions/messageActions.js';

class MessageListView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.fetchMessages(1); // DONT FORGET TO EDIT OUT THE 1
  }

  handleSubmit(event) {
    event.preventDefault();
    let entry = document.getElementById('entry');
    if (entry.value !== '') {
      this.props.actions.postMessages();
    } else {
      alert('Please enter a message');
    }
  }

  render() {
    const { messageList, messageFetched, messageFetching, actions } = this.props;

    if (messageFetched) {
      return (
        <div>
          {messageList.map(message => (
            <MessageListEntry {...actions} key={message.id} message={message} />
          ))}

          <form>
            <label>
              Message:
              <input type="text" id="entry" />
            </label>
            <button onClick={this.handleSubmit.bind(this)}>Submit Message</button>
          </form>
        </div>
      )
    } else {
      return (
        <div>Messages empty</div>
      )
    }

  }
};

const mapState = (store) => {
  return {
    fridgeId: store.fridgeId, // TODO: update with correct prop name
    messageList: store.message.messages,
    messageFetched: store.message.fetched,
    messageFetching: store.message.fetching,
    messageError: store.message.error,
  }
};

const mapDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(messageActions, dispatch),
  }
};

export default connect(mapState, mapDispatch)(MessageListView);