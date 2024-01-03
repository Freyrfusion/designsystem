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
            <li>  <Link to="checkbox">checkbox</Link></li> 
            <li>  <Link to="form">Form</Link></li> 
            <li>  <Link to="popover">Popover</Link></li> 
            <li>  <Link to="toaster">Toaster</Link></li> 
            <li>  <Link to="uRIMS-Library/grid">Grid</Link></li> 
            <li>  <Link to="badges">Badges</Link></li> 
            <li>  <Link to="breadcrumbs">Breadcrumbs</Link></li> 
            
            <li>  <Link to="muicomponents">MUI Components</Link></li> 
        </ul>
    </nav>
    
  
    </header>
    
  );
};

export default Header;