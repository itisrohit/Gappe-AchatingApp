import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './stylesheets/Message.css';

const Message = ({ message }) => {
  const scroll = useRef(null);
  const { auth, selectedUser } = useSelector(state => state.user);

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div ref={scroll} className={`message ${auth && message && auth._id === message.senderId ? "sender" : ""}`}>
      <div className={`user-pfp ${auth?._id === message?.senderId ? "sender" : ""}`}>
        <img
          src={auth && message && message.senderId === auth._id ? auth.profilePicture : selectedUser?.profilePicture}
          alt="User profile"
        />
      </div>
      <div className={`message-content ${auth?._id === message?.senderId ? "sender" : ""}`}>
        <p>{message?.message}</p>
      </div>
    </div>
  );
};

export default Message;