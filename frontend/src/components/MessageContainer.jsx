import React from 'react'
import './stylesheets/MessageContainer.css'
import ConversationBox from './ConversationBox'
import SendMessageInput from './SendMessageInput'
import { useSelector } from 'react-redux'

const MessageContainer = () => {
  const {selectedUser} = useSelector(store => store.user)
  return (
    <div className="message-container">
        <nav id='navbar-message-containe'>
        <div className="user-content">
            <div className="userlogo active">
                <img src={selectedUser?.profilePicture} alt="" />
            </div>
            <div className="userName">
                <h3>{selectedUser?.fullName}</h3>
            </div>
        </div>
        </nav>
        <ConversationBox />
        <SendMessageInput />
    </div>
  )
}

export default MessageContainer
