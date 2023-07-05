import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import SidebarMenu from './SidebarMenu';
import './Sidebar.css';
import { SidebarData } from './SidebarData';

const Sidebar = () => {
  const [close, setClose] = useState(false);
  const showSidebar = () => setClose(!close);

  return (
    <>
      <div className="fix">
        <Link to="#" onClick={showSidebar}>
          <FaIcons.FaBars />
        </Link>
      </div>

      <SidebarMenu close={close} SidebarData={SidebarData} />
    </>
  );
};

export default Sidebar;
