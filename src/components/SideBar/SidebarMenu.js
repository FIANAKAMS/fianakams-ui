/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarMenu = ({ close, SidebarData }) => {
  return (
    <div className={`sideBar ${close ? 'show' : ''}`}>
     

      {SidebarData.map((item, index) => (
        <li key={index}>
          <Link to={item.path}>
            {item.icon}
            <span style={{ marginLeft: '20px' }}>{item.title}</span>
          </Link>
        </li>
      ))}
    </div>
  );
};

export default SidebarMenu;
