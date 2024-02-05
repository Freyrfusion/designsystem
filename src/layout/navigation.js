// Navigation.js
import React from 'react';

const Navigation = () => {
  return (
    <sidebar className="sidebar" >


  
<h5 className="m-l-10 m-b-10">Foundations</h5>
        <input type="text" className="control-search" placeholder="Search" id="searchInput" />
        <ul id="dynamic-tabs">
            <li id="colors"><a data-toggle="tab" role="tab" >Colors</a></li>
        </ul>





    </sidebar>
    
  );
};

export default Navigation;