import React from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

const MessageListEntry = ({ message, deleteMessages, updateMessages }) => {
  return (
    <div id="entry">
      <Message compact>
        user: {message.messageText}
      </Message>
      {/* <div> */}
        <button className="ui icon button" onClick={
          () => {
            let newLikes = message.like + 1;
            const msg = {...message, like: newLikes};
            updateMessages(msg)}
        }> 
          <i className="thumbs outline up icon">
            {message.like}
          </i>
        </button>
        <button className="ui icon button" onClick={() => deleteMessages(message.id)}>              
          <i className="remove icon" />
        </button>
      {/* </div> */}
    </div>
  )
}

export default MessageListEntry;