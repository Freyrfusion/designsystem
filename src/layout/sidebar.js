import React from 'react';

const Sidebar = () => {

      return (
        <div>
      <div className="sidebar" >

  
        <h5 className="m-l-10 m-b-10">MUI Components</h5>
        <input type="text" className="control-search" placeholder="Search" id="searchInput" />
        <ul id="dynamic-tabs">
            <li><a data-toggle="tab" role="tab" >Colors</a></li>
        </ul>
    

</div>
        </div>
      );
};

export default Sidebar;