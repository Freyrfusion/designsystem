import React, { useEffect } from 'react';

const Buttons = () => {
    return (
        <div class="components-height">
        
                <h1 class="heading">We are preparing badges</h1>

                <h3 class="sub-heading"> Badges</h3>
                <p class="text"> small overlapped UI item which indicates a status, notification, or event that appears in relativity with the underlying object.</p>
                <span class="badge-label-primary "> Primary </span>
                <span class="badge-label-success "> Success </span>
                <span  class="badge-label-danger "> Danger </span>
                <span  class="badge-label-warning "> Warning </span>
                <span class="badge-label-secondary "> Secondary </span>
                <span  class="badge-label-inactive "> Inactive </span>

               <hr></hr>
   
               <h3 class="sub-heading">Badges Semi Rounded</h3>
                <p class="text"> small overlapped UI item which indicates a status, notification, or event that appears in relativity with the underlying object.</p>
                <span class="badge-label-primary semirounded"> Primary </span>
                <span class="badge-label-success semirounded"> Success </span>
                <span  class="badge-label-danger semirounded "> Danger </span>
                <span  class="badge-label-warning semirounded"> Warning </span>
                <span class="badge-label-secondary semirounded"> Secondary </span>
                <span  class="badge-label-inactive semirounded"> Inactive </span>
                <hr></hr>
 
             <h3 class="sub-heading">Badges Rounded</h3>
             <p class="text"> small overlapped UI item which indicates a status, notification, or event that appears in relativity with the underlying object.</p>
               <span class="badge-label-primary rounded"> Primary </span>
                <span class="badge-label-success rounded"> Success </span>
                <span  class="badge-label-danger rounded "> Danger </span>
                <span  class="badge-label-warning rounded"> Warning </span>
                <span class="badge-label-secondary rounded"> Secondary </span>
                <span  class="badge-label-inactive rounded"> Inactive </span>
        </div>

    );
};

export default Buttons;