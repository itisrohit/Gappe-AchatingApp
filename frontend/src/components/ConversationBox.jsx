import React from 'react'
import './stylesheets/ConversationBox.css'
import Messages from './Messages'

const ConversationBox = () => {
  return (
    <div className="conversation-box">
      <Messages />
    </div>
  )
}

export default ConversationBox
