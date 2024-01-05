import React, { useEffect } from 'react';

const Toaster = () => {
      return (
        <div className='content-area'>
          
           
          <div className="row">
           
          <div className="toast__container">
              <div className="toast__cell">
                <div className="toast toast--success  m-20">
                  <div className="toast__icon">
                   <em className='icon-signs'></em>
                  </div>
                  <div className="toast__content">
                    <p className="toast__type">Success</p>
                    <p className="toast__message">Anyone with access can view your invited visitors.</p>
                  </div>
                  <div className="toast__close">
                  <em className='icon-close-round'></em>
                  </div>
                </div>


                <div className="toast toast--primary m-20">
                  <div className="toast__icon">
                  <em className='icon-signs'></em>
                  </div>
                  <div className="toast__content">
                    <p className="toast__type">Info</p>
                    <p className="toast__message">Anyone with access can view your invited visitors.</p>
                  </div>
                  <div className="toast__close">
                  <em className='icon-close-round'></em>
                  </div>
                </div>

                <div className="toast toast--warning m-20">
                  <div className="toast__icon">
                  <em className='icon-signs'></em>
                  </div>
                  <div className="toast__content">
                    <p className="toast__type">Warning</p>
                    <p className="toast__message">Anyone with access can view your invited visitors.</p>
                  </div>
                  <div className="toast__close">
                  <em className='icon-close-round'></em>
                  </div>
                </div>

                <div className="toast toast--danger m-20">
                  <div className="toast__icon">
                  <em className='icon-signs'></em>
                  </div>
                  <div className="toast__content">
                    <p className="toast__type">Alert</p>
                    <p className="toast__message">Anyone with access can view your invited visitors.</p>
                  </div>
                  <div className="toast__close">
                  <em className='icon-close-round'></em>
                  </div>
                </div>
              </div>
            </div>
           
           </div>
              
             



        </div>

        



      );
};

export default Toaster;