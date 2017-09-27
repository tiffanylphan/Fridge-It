import React from 'react';
import { connect } from 'react-redux';

const MessageListEntry = ({ message, deleteMessages, updateMessages }) => {
  return (
    <div id="entry">
      user: {message.messageText} - {message.like}
      <div>
        <button className="ui icon button" onClick={
          () => {
            let newLikes = message.like + 1;
            const msg = {...message, like: newLikes};
            updateMessages(msg)}
        }> 
          <i className="thumbs outline up icon" />
        </button>
        <button className="ui icon button" onClick={() => deleteMessages(message.id)}>              
          <i className="remove icon" />
        </button>
      </div>
    </div>
  )
}

export default MessageListEntry;