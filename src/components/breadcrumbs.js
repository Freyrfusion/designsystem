import React, { useEffect } from 'react';

const Breadcrumbs = () => {
  return (

    <div className="content-area">

      <h1 className="heading">We are preparing Breadcrumbs</h1>
      <p className="text" > Breadcrumbs are a navigation system used to show a user's location in a site or app. </p>


      <div className="row">
        <div className="col-12 ">
          <section>
            <h3 className="sub-heading">Breadcrumbs </h3>
            <p className="text" > A breadcrumb or breadcrumb trail is a graphical control element used as a navigational aid in user interfaces and on web pages. It allows users to keep track and maintain awareness of their locations within programs, documents, or websites.</p>
            <div className="row">
              <div className="col-12 ">
              <ul className="breadcrumb-active">
            <li>    <a href="#0"> Fry </a>  </li>
            <li > <a href="#0"> Menu </a>   </li>
            <li > <a href="#0"> Heading </a>  </li>
            <li > <a href="#0"> Sub Heading </a>  </li>
            <li className="active"> <a href="#0"> Content </a></li>


          </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      <hr></hr>

    </div>
  );
};

export default Breadcrumbs;