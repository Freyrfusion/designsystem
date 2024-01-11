import React, { useEffect } from 'react';

const Toaster = () => {
      return (
        <div className='content-area'>
          
           
          <div className="row">
          <h1 class="heading m-t-20"> We are preparing Buttons</h1>

 
<p class="text" > Buttons are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in variety of ways. Button labels express what action will occur when the user interacts with it.</p>
           
          <div className="toast__container">
              <div className="toast__cell">
                <div className="toast toast--success">
                 
                  
                  <div className="toast__content">
                  <div className="toast__icon">
                   <em className='icon-signs'></em>
                  </div>
                    <p className="toast__type">You've created "DST-0000" issue.</p>
                    <div className="toast__close">
                  <em className='icon-close-round'></em>
                  </div>
                  </div>
                  
                  
                </div>


                <div className="toast toast--primary">
                 <div className="toast__content">
                  <div className="toast__icon">
                  <em className='icon-signs'></em>
                  </div>
                    <p className="toast__type">You've created "DST-0000" issue.</p>
                    <div className="toast__close">
                  <em className='icon-close-round'></em>
                  </div>
                  </div>
                  
                  <p className="toast__message">Anyone with access can view your invited visitors.</p>
                  </div>

                <div className="toast toast--warning m-20">
                 
                  <div className="toast__content">
                  <div className="toast__icon">
                  <em className='icon-signs'></em>
                  </div>
                    <p className="toast__type">You've created "DST-0000" issue.</p>
                    <div className="toast__close">
                  <em className='icon-close-round'></em>
                  </div>
                   
                  </div>
                  <a className="dismiss__text">Dismiss</a>
                </div>

                <div className="toast toast--danger m-20">
                 
                  <div className="toast__content">
                  <div className="toast__icon">
                  <em className='icon-signs'></em>
                  </div>
                    <p className="toast__type">Alert</p>
                   
                  
                  <div className="toast__close">
                  <em className='icon-close-round'></em>
                  </div></div>
                  <p className="toast__message">Anyone with access can view your invited visitors.</p>
                  <a  className="dismiss__text">Dismiss</a>
                </div>
              </div>
            </div>
           
           </div>
              
             



        </div>

        



      );
};

export default Toaster;