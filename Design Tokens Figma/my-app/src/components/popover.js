import React, { useEffect } from 'react';
 
const Popover = () => {
      return (
        <div className='content-area'>
            <section>
                <h2 className="main-heading">Tooltip</h2>
            <div className='popover-main'>
            <div className='col-4'>
            <h2 className="sub-heading m-t-0 m-r-5">Tooltip Top </h2>
  <div className="tooltip" data-direction="top">
    <div className="tooltip__initiator">
       
      <i className="icon-signs"></i>
    </div>
    <div className="tooltip__item">
      Hello! I'm a pure css tooltip
    </div>
  </div></div>
            <div className='col-4'>
            <h2 className="sub-heading m-t-0 m-r-5">Tooltip Bottom </h2>
  <div className="tooltip" data-direction="bottom">
    <div className="tooltip__initiator">
       
      <i className="icon-signs"></i>
    </div>
    <div className="tooltip__item">
      Hello! I'm a pure css tooltip
    </div>
  </div></div>
  <div className='col-4'>
  <h2 className="sub-heading m-t-0 m-r-5 m-l-10"> Tooltip Left </h2>
  <div className="tooltip" data-direction="left">
    <div className="tooltip__initiator">
       
      <i className="icon-signs"></i>
    </div>
    <div className="tooltip__item">
      Hello! I'm a pure css tooltip
    </div>
  </div> </div>
  <div className='col-4'>
  <h2 className="sub-heading m-t-0 m-r-5 m-l-10"> Tooltip Right </h2>
  <div className="tooltip" data-direction="right">
    <div className="tooltip__initiator">
       
      <i className="icon-signs"></i>
    </div>
    <div className="tooltip__item">
      Hello! I'm a pure css tooltip
    </div>
  </div> </div>
  
  
  
</div>
            </section>
       
        </div>
      );
};
 
export default Popover;