// Header.js
import React from 'react';
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FreyrFusion from '../assets/images/FreyaFusion-Logo.png';
const Header = () => {
  const pathname = useLocation().pathname
  return (
    <header>
    

     <div className="maincontainer">
        <div className="logospace">
        <img title="Logo" src={FreyrFusion} className="logo" />
    </div>
  </div>
    <nav>
        <ul>
            

            <li><Link className={`${pathname === '/foundations' ? 'navactive' : ''}`} to="foundations" >Foundations</Link></li> 
            <li><Link className={`${pathname === '/icons' ? 'navactive' : ''}`} to="icons">Icons</Link></li> 
            <li><Link className={`${pathname === '/components' ? 'navactive' : ''}`} to="components">Components</Link></li> 
            {/* <li><Link to="muicomponents">MUI Components</Link></li>  */}
</ul>


          
    </nav>
    
  
    </header>
    
  );
};

export default Header;