import React, { useState } from 'react';

// Components
import Muitable from '../components/muitable.js';
import Muibuttons from '../components/muibuttons.js';
import Muicollapse from '../components/muicollapse.js';

import '../assets/scss/sitemain.scss';

const MuiComponents = () => {

  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'muitable':
        return <Muitable />;
      case 'muibuttons':
        return <Muibuttons />;
      case 'muicollapse':
        return <Muicollapse />;
      default:
        return <Muitable />;
    }
  };

  return (
    <div>

<div className="sidebar" >

  
<h5>MUI Components</h5>
<ul id="dynamic-tabs">
    <li className={currentPage==="muitable" && 'activetab'} onClick={() => setCurrentPage('muitable')}>MUI Table</li>
    <li className={currentPage==="muibuttons" && 'activetab'} onClick={() => setCurrentPage('muibuttons')}>MUI Buttons</li>
    <li className={currentPage==="muicollapse" && 'activetab'} onClick={() => setCurrentPage('muicollapse')}>MUI Collapse</li>
</ul>


</div>


      {renderPage()}
    </div>
  );
};

export default MuiComponents;