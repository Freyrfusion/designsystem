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
            

            <li><Link to="foundations">Foundations</Link></li> 
            <li>  <Link to="icons">Icons</Link></li> 
            <li>  <Link to="buttons">Buttons</Link></li> 
            <li>  <Link to="badges">Badges</Link></li> 
            <li>  <Link to="breadcrumbs">Breadcrumbs</Link></li> 
            
            <li>  <Link to="muicomponents">MUI Components</Link></li> 
        </ul>
    </nav>
    
  
    </header>
    
  );
};

export default Header;