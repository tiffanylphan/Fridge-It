import React from 'react';
import { connect } from 'react-redux';

const MessageListEntry = ({ message, deleteMessages }) => {
  return (
    <div id="entry">
      {message.messageText}
      <button onClick={() => deleteMessages(message.id)}>x</button>
    </div>
  )
}

export default MessageListEntry;