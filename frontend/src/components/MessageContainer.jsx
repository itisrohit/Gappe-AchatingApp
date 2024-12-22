import React from 'react';
import SendMessageInput from './SendMessageInput';
import ConversationBox from './ConversationBox'; // Ensure this component is imported
import { useSelector } from 'react-redux';
import './stylesheets/MessageContainer.css';

const MessageContainer = () => {
  const { selectedUser } = useSelector(store => store.user);

  return (
    <div className="message-container">
      {selectedUser ? (
        <>
          <nav id='navbar-message-container'>
            <div className="user-content">
              <div className="userlogo active">
                <img src={selectedUser?.profilePicture} alt="User profile" />
              </div>
              <div className="userName">
                <h3>{selectedUser?.fullName}</h3>
              </div>
            </div>
          </nav>
          <ConversationBox />
          <SendMessageInput />
        </>
      ) : (
        <div className="message-container__empty" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', 
          height: '100%', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '1.2rem', color: '#333' }}>
          <h1>Let&apos;s Start Chatting</h1>
        </div>
      )}
    </div>
  );
};

export default MessageContainer;