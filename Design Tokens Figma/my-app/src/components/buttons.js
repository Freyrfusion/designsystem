import React, { useEffect } from 'react';

const Buttons = () => {
  return (

    <div className="content-area">

      <h1 className="heading"> We are preparing Buttons</h1>
      <p className="text" > A Button triggers an action or an event.</p>


      <div className="row">
        <div className="col-12 ">
          <section>
            <h3 className="sub-heading"> Primary </h3>
            <p className="text" > Use a primary button to call attention to an action on a form or to highlight the strongest call to action on a page. Primary buttons should only appear once per container (not including the application header or in a modal dialog). Not every screen requires a primary button.</p>
            <div className="row">
              <div className="col-12 ">
                <button type="button" className="btn btn-primary"> Primary button </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <hr></hr>

      <div className="row">
        <div className="col-12 ">
          <section>
            <h3 className="sub-heading"> Success </h3>
            <p className="text" > Button are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in variety of ways. Button labels express what action will occur when the user interacts with it.</p>
            <div className="row">
              <div className="col-12 ">
                <button type="button" className="btn btn-success"> Success button </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <hr></hr>

      <div className="row">
        <div className="col-12 ">
          <section>
            <h3 className="sub-heading"> Danger </h3>
            <p className="text" > The danger button appears as a final confirmation for a destructive action such as deleting. These are found mostly in confirmation modals.</p>
            <div className="row">
              <div className="col-12 ">
                <button type="button" className="btn btn-danger"> Danger button </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <hr></hr>

      <div className="row">
        <div className="col-12 ">
          <section>
            <h3 className="sub-heading"> Warning </h3>
            <p className="text" > A warning button appears before we request the user to take action, usually in anticipation of a significant change. These are found mostly in confirmation modals.</p>
            <div className="row">
              <div className="col-12 ">
                <button type="button" className="btn btn-warning"> Warning button </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <hr></hr>

      <div className="row">
        <div className="col-12 ">
          <section>
            <h3 className="sub-heading"> Secondary </h3>
            <p className="text" > Button are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in variety of ways. Button labels express what action will occur when the user interacts with it.</p>
            <div className="row">
              <div className="col-12 ">
                <button type="button" className="btn btn-secondary"> Secondary button </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <hr></hr>


      <div className="row">
        <div className="col-12 ">
          <section>
            <h3 className="sub-heading"> Link  </h3>
            <p className="text" > Use a link button to navigate to another page. These should open in the same window unless information may be lost (for example, when someone is filling out a form), or when the destination is an external site (for example, a knowledge base article).</p>
            <div className="row">
              <div className="col-12 ">
                <a href="#" class="btn btn-primary-link"> Link button </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <hr></hr>

      
      <div className="row">
        <div className="col-12 ">
          <section>
            <h3 className="sub-heading"> Icon before </h3>
            <p className="text" >Display an icon before the text.</p>
            <div className="row">
              <div className="col-12 ">
                <button type="button" className="btn btn-primary"> <i className="icon-down-open"></i> Icon before  </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <hr></hr>


      <div className="row">
        <div className="col-12 ">
          <section>
            <h3 className="sub-heading"> Icon after </h3>
            <p className="text" > Display an icon after the text.</p>
            <div className="row">
              <div className="col-12 ">
                <button type="button" className="btn btn-primary"> Icon after <i className="icon-down-open"></i> </button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <hr></hr>



      <div className="row">
        <div className="col-12 ">
          <section>
            <h3 className="sub-heading">Left right icons</h3>
            <p className="text" > Button are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in variety of ways. Button labels express what action will occur when the user interacts with it.</p>
            <div className="row">
              <div className="col-12 ">
                <button type="button" className="btn btn-primary"> <i className="icon-menu3"></i> Primary <i className="icon-down-open"></i></button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <hr></hr>


      <div className="row">
        <div className="col-12 ">
          <section>
            <h3 className="sub-heading"> Icon button </h3>
            <p className="text" > Button are clickable elements that are used to trigger actions. They communicate calls to action to the user and allow users to interact with pages in variety of ways. Button labels express what action will occur when the user interacts with it.</p>
            <div className="row">
              <div className="col-12 ">
                <button type="button" className="btn btn-primary"> <i className="icon-thumbnail"></i> <i className="icon-down-open"></i></button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <hr></hr>

    </div>

  );
};

export default Buttons;