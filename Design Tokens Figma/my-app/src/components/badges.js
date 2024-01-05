import React, { useEffect } from 'react';

const Buttons = () => {
    return (
        <div className='content-area'>
        
                <h2 className="heading">Badges</h2>

                <h3 className="sub-heading"> Badges</h3>
                <p className="text"> small overlapped UI item which indicates a status, notification, or event that appears in relativity with the underlying object.</p>
                <span className="badge-label-primary "> Primary </span>
                <span className="badge-label-success "> Success </span>
                <span  className="badge-label-danger "> Danger </span>
                <span  className="badge-label-warning "> Warning </span>
                <span className="badge-label-secondary "> Secondary </span>
                <span  className="badge-label-inactive "> Inactive </span>

               <hr></hr>
   
               <h3 className="sub-heading">Badges Semi Rounded</h3>
                <p className="text"> small overlapped UI item which indicates a status, notification, or event that appears in relativity with the underlying object.</p>
                <span className="badge-label-primary semirounded"> Primary </span>
                <span className="badge-label-success semirounded"> Success </span>
                <span  className="badge-label-danger semirounded "> Danger </span>
                <span  className="badge-label-warning semirounded"> Warning </span>
                <span className="badge-label-secondary semirounded"> Secondary </span>
                <span  className="badge-label-inactive semirounded"> Inactive </span>
                <hr></hr>
 
             <h3 className="sub-heading">Badges Rounded</h3>
             <p className="text"> small overlapped UI item which indicates a status, notification, or event that appears in relativity with the underlying object.</p>
               <span className="badge-label-primary rounded"> Primary </span>
                <span className="badge-label-success rounded"> Success </span>
                <span  className="badge-label-danger rounded "> Danger </span>
                <span  className="badge-label-warning rounded"> Warning </span>
                <span className="badge-label-secondary rounded"> Secondary </span>
                <span  className="badge-label-inactive rounded"> Inactive </span>
        </div>
    );
};

export default Buttons;