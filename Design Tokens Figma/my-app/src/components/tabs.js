import React, { useEffect } from 'react';

const Tabs = () => {
    return (

        <div class="content-area">

            <h1 class="heading">We are preparing Tabs</h1>
            <p class="text"> Normally, tabbed navigation uses navigation buttons (tabs) arranged together with the selected tab highlighted.</p>

         
                
     <div className="row">
        <div className="col-12 ">
          <section>
            <h3 className="sub-heading"> Horizontal Tabs </h3>
            <p className="text" >Normally, tabbed navigation uses navigation buttons (tabs) arranged together with the selected tab highlighted.</p>
            <div className="row">
              <div className="col-12 ">
              <div class="container-tabs">
                        <ul >
                            <li id="tab1"><a href="#" class="active"> First Tab </a></li>
                            <li id="tab1"><a href="#" class=""> Second Tab </a></li>
                            <li id="tab1"><a href="#" class=""> Third Tab </a></li>
                        </ul>
                        <div>
                            <p> We will add tabs in this section</p>
                        </div>
                    </div>
              </div>
            </div>
          </section>
        </div>
      </div>
 <hr></hr>

            <h3 class="sub-heading">Vertical Tabs</h3>
            <p class="text"> Normally, tabbed navigation uses navigation buttons (tabs) arranged together with the selected tab highlighted.</p>
            <div class="row">
                <div class="col-12 sapceing">
                    <div class="vertical-tabs">
                        <ul >
                            <li id="tab1" class="active"><a href="#"><em class="icon-menu3 tab-icons-left"></em> First Tab </a></li>
                            <li id="tab1"><a href="#" class=""><em class="icon-menu3 tab-icons-left"></em> Second Tab </a></li>
                            <li id="tab1"><a href="#" class=""><em class="icon-menu3 tab-icons-left"></em> Third Tab </a></li>
                        </ul>

                    </div>
                </div>
            </div>
            <hr></hr>


                            
     {/* <div className="row">
        <div className="col-12 ">
          <section>
            <h3 className="sub-heading"> Vertical Tabs </h3>
            <p className="text" >Normally, tabbed navigation uses navigation buttons (tabs) arranged together with the selected tab highlighted.</p>
            <div className="row">
              <div className="col-12 ">
              <div class="vertical-tabs">
                        <ul >
                            <li id="tab1" class="active"><a href="#"><i class="icon-menu3 tab-icons-left"></i> First Tab </a></li>
                            <li id="tab1"><a href="#" class=""><i class="icon-menu3 tab-icons-left"></i> Second Tab </a></li>
                            <li id="tab1"><a href="#" class=""><i class="icon-menu3 tab-icons-left"></i> Third Tab </a></li>
                        </ul>

                    </div>
              </div>
            </div>
          </section>
        </div>
      </div>
 <hr></hr> */}

        
        </div>
    );
};

export default Tabs;