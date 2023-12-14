// Header.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FreyrFusion from '../assets/images/FreyaFusion-Logo.png';
const Header = () => {
  return (
    <header>
    

     <div className="maincontainer">
        <div className="logospace">
        <img title="Logo" src={FreyrFusion} className="logo" />
    </div>
  </div>
    <nav>
        <ul>
            

            <li><Link to="uRIMS-Library/foundations">Foundations</Link></li> 
            <li>  <Link to="uRIMS-Library/icons">Icons</Link></li> 
        </ul>
    </nav>
    

  
    </header>
    
  );
};

export default Header;