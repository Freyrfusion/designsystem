import React, { useEffect } from 'react';

const Buttons = () => {
      return (
        <div class="components-height">
    
            <h1 class="heading"> We are preparing Buttons</h1>

            <h3 class="sub-heading"> Buttons</h3>
            <p class="text" > Buttons are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in variety of ways. Button labels express what action will occur when the user interacts with it.</p>
            <button type="button" class="btn btn-primary"> Primary </button>
            <button type="button" class="btn btn-success"> Success </button>
            <button type="button" class="btn btn-danger"> Danger </button>
            <button type="button" class="btn btn-warning"> Warning </button>
            <button type="button" class="btn btn-secondary"> Secondary </button>
            <a href="#" class="btn btn-primary-link"> Link </a>
      
       <hr></hr>

         
            <h3 class="sub-heading"> Left Icon Buttons</h3>
            <p class="text"> The Button component has an appearance with different propertys and values</p>
            <button type="button" class="btn btn-primary"><i class="icon-menu3"></i> Primary </button>
            <button type="button" class="btn btn-success"><i class="icon-menu3"></i> Success </button>
            <button type="button" class="btn btn-danger"> <i class="icon-menu3"></i> Danger </button>
            <button type="button" class="btn btn-warning"><i class="icon-menu3"></i> Warning </button>
            <button type="button" class="btn btn-secondary"><i class="icon-menu3"></i> Secondary </button>
            <a href="#" class="btn btn-primary-link"> <i class="icon-menu3"></i> Link </a>
         
          <hr></hr>

            <h3 class="sub-heading">Right Icon Buttons</h3>
            <p class="text"> The Button component has an appearance with different propertys and values</p>
            <button type="button" class="btn btn-primary"> Primary <i class="icon-down-open"></i> </button>
            <button type="button" class="btn btn-success"> Success <i class="icon-down-open"></i></button>
            <button type="button" class="btn btn-danger"> Danger <i class="icon-down-open"></i></button>
            <button type="button" class="btn btn-warning"> Warning <i class="icon-down-open"></i></button>
            <button type="button" class="btn btn-secondary">Secondary <i class="icon-down-open"></i></button>
            <a href="#" class="btn btn-primary-link"> Link <i class="icon-down-open"></i> </a>
   
          <hr></hr>
          
       
            <h3 class="sub-heading">Left Right Icons</h3>
            <p class="text"> The Button component has an appearance with different propertys and values</p>
            <button type="button" class="btn btn-primary"><i class="icon-menu3"></i> Primary <i class="icon-down-open"></i></button>
            <button type="button" class="btn btn-success"><i class="icon-menu3"></i> Success <i class="icon-down-open"></i></button>
            <button type="button" class="btn btn-danger"><i class="icon-menu3"></i> Danger <i class="icon-down-open"></i></button>
            <button type="button" class="btn btn-warning"><i class="icon-menu3"></i> Warning  <i class="icon-down-open"></i></button>
            <button type="button" class="btn btn-secondary"><i class="icon-menu3"></i> Secondary  <i class="icon-down-open"></i></button>
            <a href="#" class="btn btn-primary-link"><i class="icon-hash2"></i>  Link <i class="icon-down-open"></i></a>
        
          <hr></hr>


        
            <h3 class="sub-heading">Icon Buttons</h3>
            <p class="text"> The Button component has an appearance with different propertys and values</p>
            <button type="button" class="btn btn-primary"> <i class="icon-thumbnail"></i> <i class="icon-down-open"></i></button>
            <button type="button" class="btn btn-success"> <i class="icon-thumbnail"></i> <i class="icon-down-open"></i></button>
            <button type="button" class="btn btn-danger"> <i class="icon-thumbnail"></i> <i class="icon-down-open"></i></button>
            <button type="button" class="btn btn-warning"> <i class="icon-thumbnail"></i> <i class="icon-down-open"></i></button>
            <button type="button" class="btn btn-secondary"> <i class="icon-thumbnail"></i> <i class="icon-down-open"></i></button>


          <hr></hr>

        </div>

      );
};

export default Buttons;