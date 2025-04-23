import React from 'react';
import './News.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faXmark } from '@fortawesome/free-solid-svg-icons';

const Home = ({ onClose }) => {
  return (
    <div className="main-container-home">
      <header className="home-header">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <h1 className="home-h1">News</h1>
        <FontAwesomeIcon icon={faXmark} className="icon" id="icon-cross" onClick={onClose} />
      </header>
      <p className="paragraph-home">
      Ink & Think** is a real-time multiplayer drawing and guessing game inspired by Skribbl.io, developed by preet with ❤️.</p>
    </div>
  );
};

export default Home;
