import React from 'react';

const Muibuttons = () => {

      return (
        <div className="content-area">

        <h1 className="heading"> We are preparing Buttons</h1>
  
        <p className="text" > A Button triggers an action or an event.</p>
    

     
     <div className="row">
        <div className="col-12 ">
          <section>
            <h3 className="sub-heading">MUI Buttons </h3>
            <p className="text" >Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.</p>
            <div className="row">
              <div className="col-12 ">
                <button type="button" className="btn MuiButton-containedprimary"> Primary button </button>
                <button type="button" className="btn MuiButton-containedsuccess"> Success button </button>
                <button type="button" className="btn MuiButton-containeddanger"> Danger button </button>
                <button type="button" className="btn MuiButton-containedwarning"> Warning button </button>
                <button type="button" className="btn MuiButton-containedsecondary"> Secondary button </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <hr></hr>

      <div className="row">
        <div className="col-12 ">
          <section>
            <h3 className="sub-heading"> MUI Outlined Buttons  </h3>
            <p className="text" > Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons.</p>
            <div className="row">
              <div className="col-12 ">
                <button type="button" className="btn MuiButton-outlinedPrimary"> Primary </button>
                <button type="button" className="btn MuiButton-outlinedSuccess"> Success </button>
                <button type="button" className="btn MuiButton-outlinedError"> Error </button>
            
              </div>
            </div>
          </section>
        </div>
      </div>

      <hr></hr>

      <div className="row">
        <div className="col-12 ">
          <section>
            <h3 className="sub-heading"> MUI Link Buttons </h3>
            <p className="text" > Use a primary button to call attention to an action on a form or to highlight the strongest call to action on a page. Primary buttons should only appear once per container (not including the application header or in a modal dialog). Not every screen requires a primary button.</p>
            <div className="row">
              <div className="col-12 ">
              <a href="#" class=" MuiButton-textPrimary"> Link button </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <hr></hr>
        </div>
      );
};

export default Muibuttons;