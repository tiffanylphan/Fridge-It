import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MessageListEntry from './messageListEntry';
import messageActions from '../actions/messageActions.js';

class MessageListView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchMessages(this.props.fridgeId);
  }

  render() {
    const { messageList, messageFetched, messageFetching } = this.props;

    if (messageList.length) {
      return (
        <div>
          {messageList.map(message => {
            <MessageListEntry {...this.props.actions} key={message.id} message={message} />
          })}
        </div>
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