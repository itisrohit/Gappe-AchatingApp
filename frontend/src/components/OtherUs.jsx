import React from 'react'
import './stylesheets/OtherUs.css'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/user-slice';

const OtherUs = ({user}) => {
  const dispatch = useDispatch();
  const {selectedUser} = useSelector(state => state.user);
  const selectedUserHandler = (user) => {
    dispatch(setSelectedUser(user));
  };

  return (
    <div onClick={()=>selectedUserHandler(user)} className={`other-us ${selectedUser?._id === user?._id ? 'activeid' : ''}`}>
        <div className="user-content">
            <div className="userlogo active">
                <img src={user?.profilePicture} alt="" />
            </div>
            <div className="userName">
                <h3>{user?.fullName}</h3>
            </div>
        </div>
    </div>
  )
}

export default OtherUs
