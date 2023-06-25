import React, { useState } from 'react';
import '../styles/sidebar.css';
// TODO : changer le couleur des items. 
//TODO :  Ajouter la fonctionnalité qui permet au sidebar d'être cacher et afficher.
// TODO : Faites en sorte que ce ce soit un flèche rentrant (<-) et un sortant quand veut l'afficher (->).
// TODO : Rends la sidebar complètement responsive. 
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);


  const toggleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebarVisibility}>
        <i className={`fas ${isSidebarVisible ? 'fa-times' : 'fa-bars'}`} />
      </div>
      <ul className="sidebar-menu">
        <li
          className={`sidebar-menu-item ${activeSection === 'section1' ? 'active' : ''}`}
          onClick={() => handleSectionClick('section1')}
        >
          Section 1
        </li>
        <li
          className={`sidebar-menu-item ${activeSection === 'section2' ? 'active' : ''}`}
          onClick={() => handleSectionClick('section2')}
        >
          Section 2
        </li>
        <li
          className={`sidebar-menu-item ${activeSection === 'section3' ? 'active' : ''}`}
          onClick={() => handleSectionClick('section3')}
        >
          Section 3
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
