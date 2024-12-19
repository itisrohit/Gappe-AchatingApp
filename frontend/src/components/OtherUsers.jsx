import React from 'react'
import './stylesheets/OtherUsers.css'
import OtherUs from './OtherUs'
import useGetOtherUsers from '../hooks/useGetOtherUsers'
import { useSelector } from 'react-redux'

const OtherUsers = () => {
  useGetOtherUsers()
  const {otherUsers} = useSelector(store => store.user);
  if(!otherUsers) return;
  return (
    <div className="other-users">
      {otherUsers.map(user => <OtherUs key={user._id} user={user} />)}
    </div>
  )
}

export default OtherUsers
