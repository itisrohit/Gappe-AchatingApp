import React from 'react'
import Message from './Message'
import './stylesheets/Messages.css'
import useGetMesages from '../hooks/useGetMesages'
import { useSelector } from 'react-redux'

const Messages = () => {
  useGetMesages();
  const { messages } = useSelector(store=> store.message)
  console.log(messages)
  if(!messages) return;
  return (
    <div className="Messages">
      {messages?.map((message) => (
        <Message key={message._id} message={message} />
      ))}
        
    </div>
  )
}

export default Messages
