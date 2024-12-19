import React from 'react';
import UnderConstruction from '../assets/Images/UnderConstruction.jpg';
import './stylesheets/Home.css';

const Home = () => {
  return (
    <div className="home">
      <img src={UnderConstruction} alt="Under Construction" />
    </div>
  );
}

export default Home;