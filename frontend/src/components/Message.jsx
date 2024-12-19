import React, { useEffect, useRef } from 'react';
import './stylesheets/Message.css';

const Message = ({message}) => {
  const scroll = useRef(null);
  useEffect(()=>{
    scroll.current?.scrollIntoView({behavior:"smooth"});
  }, [message])
  return (
    <div ref={scroll} className="message">
      <div className="user-pfp">
        <img src="https://i.pinimg.com/736x/f9/bc/3e/f9bc3e68d2f4806e3eb9921074e60dd4.jpg" alt="User profile" />
      </div>
      <div className="message-content">
        <p>{message?.message}</p>
      </div>
    </div>
  );
};

export default Message;
