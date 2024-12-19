import React from 'react';
import './stylesheets/Home.css';
import Sidebar from './Sidebar';
import OtherUsers from './OtherUsers';
import MessageContainer from './MessageContainer';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <OtherUsers />
      <MessageContainer />
    </div>
  );
}

export default Home;