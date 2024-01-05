import React from 'react';

const Buttons = () => {
      return (
        <div className='content-area'>
    
            <h2 className="heading"> We are preparing Buttons</h2>

            <h3 className="sub-heading"> Buttons</h3>
            <p className="text" > Buttons are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in variety of ways. Button labels express what action will occur when the user interacts with it.</p>
            <button type="button" className="btn btn-primary"> Primary </button>
            <button type="button" className="btn btn-success"> Success </button>
            <button type="button" className="btn btn-danger"> Danger </button>
            <button type="button" className="btn btn-warning"> Warning </button>
            <button type="button" className="btn btn-secondary"> Secondary </button>
            <a href="#" className="btn btn-primary-link"> Link </a>
      
       <hr></hr>

         
            <h3 className="sub-heading"> Left Icon Buttons</h3>
            <p className="text"> The Button component has an appearance with different propertys and values</p>
            <button type="button" className="btn btn-primary"><i className="icon-menu3"></i> Primary </button>
            <button type="button" className="btn btn-success"><i className="icon-menu3"></i> Success </button>
            <button type="button" className="btn btn-danger"> <i className="icon-menu3"></i> Danger </button>
            <button type="button" className="btn btn-warning"><i className="icon-menu3"></i> Warning </button>
            <button type="button" className="btn btn-secondary"><i className="icon-menu3"></i> Secondary </button>
            <a href="#" className="btn btn-primary-link"> <i className="icon-menu3"></i> Link </a>
         
          <hr></hr>

            <h3 className="sub-heading">Right Icon Buttons</h3>
            <p className="text"> The Button component has an appearance with different propertys and values</p>
            <button type="button" className="btn btn-primary"> Primary <i className="icon-down-open"></i> </button>
            <button type="button" className="btn btn-success"> Success <i className="icon-down-open"></i></button>
            <button type="button" className="btn btn-danger"> Danger <i className="icon-down-open"></i></button>
            <button type="button" className="btn btn-warning"> Warning <i className="icon-down-open"></i></button>
            <button type="button" className="btn btn-secondary">Secondary <i className="icon-down-open"></i></button>
            <a href="#" className="btn btn-primary-link"> Link <i className="icon-down-open"></i> </a>
   
          <hr></hr>
          
       
            <h3 className="sub-heading">Left Right Icons</h3>
            <p className="text"> The Button component has an appearance with different propertys and values</p>
            <button type="button" className="btn btn-primary"><i className="icon-menu3"></i> Primary <i className="icon-down-open"></i></button>
            <button type="button" className="btn btn-success"><i className="icon-menu3"></i> Success <i className="icon-down-open"></i></button>
            <button type="button" className="btn btn-danger"><i className="icon-menu3"></i> Danger <i className="icon-down-open"></i></button>
            <button type="button" className="btn btn-warning"><i className="icon-menu3"></i> Warning  <i className="icon-down-open"></i></button>
            <button type="button" className="btn btn-secondary"><i className="icon-menu3"></i> Secondary  <i className="icon-down-open"></i></button>
            <a href="#" className="btn btn-primary-link"><i className="icon-hash2"></i>  Link <i className="icon-down-open"></i></a>
        
          <hr></hr>


        
            <h3 className="sub-heading">Icon Buttons</h3>
            <p className="text"> The Button component has an appearance with different propertys and values</p>
            <button type="button" className="btn btn-primary"> <i className="icon-thumbnail"></i> <i className="icon-down-open"></i></button>
            <button type="button" className="btn btn-success"> <i className="icon-thumbnail"></i> <i className="icon-down-open"></i></button>
            <button type="button" className="btn btn-danger"> <i className="icon-thumbnail"></i> <i className="icon-down-open"></i></button>
            <button type="button" className="btn btn-warning"> <i className="icon-thumbnail"></i> <i className="icon-down-open"></i></button>
            <button type="button" className="btn btn-secondary"> <i className="icon-thumbnail"></i> <i className="icon-down-open"></i></button>


          <hr></hr>

        </div>
      );
};

export default Buttons;