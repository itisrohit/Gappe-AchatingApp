import React, {useState } from 'react'
import './stylesheets/SendMessageInput.css'
import axios from "axios";
import {useDispatch, useSelector} from "react-redux"
import { setMessages } from '../redux/message-slice';

const SendMessageInput = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const {selectedUser} = useSelector(store => store.user);
  const {messages} = useSelector(store => store.message);
  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      try{
        const res = await axios.post(`http://localhost:8080/api/message/send/${selectedUser?._id}`, {message}, {
          headers:{
            "Content-Type": "application/json"
          },
          withCredentials: true
        });
        dispatch(setMessages([...messages, res?.data?.newMessage]));
      }catch(err){
        console.log(err)
      }
      setMessage(""); 
    }
  };
  return (
    <div className="sendMessageInput">
        <div className="sendMessageBar">
            <input type="text" placeholder="Type a message..." 
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
            onKeyDown={handleKeyDown}/>
        </div>
    </div>
  )
}

export default SendMessageInput
