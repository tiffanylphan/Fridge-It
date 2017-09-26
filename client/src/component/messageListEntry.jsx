import React from 'react';
import { connect } from 'react-redux';

const MessageListEntry = ({ message }) => {
  return (
    <div id="entry">
      {message.message}
    </div>
  )
}

export default connect(null, null)(MessageListEntry);