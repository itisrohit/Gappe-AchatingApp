import React from 'react'
import "./stylesheets/Sidebar.css"
import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { BiMessageSquareMinus } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const logoutHandler = async () => {
      try{
          const res = await axios.get('https://gappe-proto.onrender.com/api/user/logout');
          navigate('/signin');
          toast.success(res.data.msg);
      }catch(err){  
          console.error(err.msg);
      } 
  };
  return (
    <div className="sidebar">
        <nav>
            <div className="logo">
                <img src="./logo.png" alt="" />
            </div>
            <div className="content">
                <FaSearch id='search-icon' />
                <Link to="/">
                <BiMessageSquareMinus id='inbox-icon' 
                className={location.pathname === '/' ? "active" : ""} />
                </Link>
                <Link to="/profile">
                  <FaUserCircle
                    id="profile-icon"
                    className={location.pathname === '/profile' ? 'active' : ''}
                  />
                </Link>
                <button onClick={logoutHandler} id='logout-btn'>Logout</button>
                
            </div>
        </nav>
    </div>
  )
}

export default Sidebar
