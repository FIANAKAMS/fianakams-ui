import React from 'react';
import './Start.css';
import title from './title1.png';

function Start() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={title} alt="title" />
          <a className="App-link" href="/login">
            Start Fianakam's
          </a>
        </header>
      </div>
    </>
  );
}

export default Start;
