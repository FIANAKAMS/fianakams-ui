import React from 'react';
import SideBar from "../SideBar/SideBar";
import './Group.css'

function Group() {
  return (
    <>
    
    <header className="site-header">
    <div>
      
    </div>
        <div id="menu-container">
          <div id="menu-1" className="homepage home-section container">
          <SideBar/>
              <h1 className="welcome-title animated fadeInLeft bryan">Welcome to FIANAKAM'S</h1>
              <p className="animated fadeInRight">
                <span className="blue"></span>
                <span className="green"></span>
              </p>
            </div>
          </div>
       
      </header>
      
      
      
      
    
      
    </>
  );
}

export default Group;
  