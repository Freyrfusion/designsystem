import React, { useEffect } from 'react';

const Buttons = () => {
  return (
    <div className='content-area'>

      <h2 className="heading">We are preparing Breadcrumbs</h2>

      <h3 className="sub-heading"> Breadcrumbs</h3>
      <p className="text"> A breadcrumb or breadcrumb trail is a graphical control element used as a navigational aid in user interfaces and on web pages. It allows users to keep track and maintain awareness of their locations within programs, documents, or websites.</p>
      <ul className="breadcrumb-classic">
        <li> Fry </li>
        <li > Menu </li>
        <li > Heading </li>
        <li > Sub Heading </li>
        <li className="active"> Content</li>


      </ul>

      <hr></hr>
      <h3 className="sub-heading"> Breadcrumbs</h3>
      <p className="text"> A breadcrumb or breadcrumb trail is a graphical control element used as a navigational aid in user interfaces and on web pages. It allows users to keep track and maintain awareness of their locations within programs, documents, or websites.</p>
      <div className="breadcrumb breadcrumb_type5 m-b-5" aria-label="Breadcrumb">
        <ol className="breadcrumb__list r-list">

          <li className="breadcrumb__group" >
            <a href="#0" className="breadcrumb__point r-link"> Fry </a>
            <span className="breadcrumb__divider" aria-hidden="true"><i className="icon-right-open"></i></span>
          </li>
          <li className="breadcrumb__group">
            <a href="#0" className="breadcrumb__point r-link "> Menu </a>
            <span className="breadcrumb__divider" aria-hidden="true"><i className="icon-right-open"></i></span>
           
            {/* <!-- <span className="breadcrumb__divider" aria-hidden="true">›</span> --> */}
          </li>
          <li className="breadcrumb__group">
            <a href="#0" className="breadcrumb__point r-link "> Heading </a>
            <span className="breadcrumb__divider" aria-hidden="true"><i className="icon-right-open"></i></span>
           
            {/* <!-- <span className="breadcrumb__divider" aria-hidden="true">›</span> --> */}
          </li>
          <li className="breadcrumb__group">
            <a href="#0" className="breadcrumb__point r-link "> Sub Heading </a>
            <span className="breadcrumb__divider" aria-hidden="true"><i className="icon-right-open"></i></span>
           
            {/* <!-- <span className="breadcrumb__divider" aria-hidden="true">›</span> --> */}
          </li>
          <li className="breadcrumb__group">
            <a href="#0" className="breadcrumb__point r-link active"> Sub Heading </a>
            {/* <span className="breadcrumb__divider" aria-hidden="true"><i className="icon-right-open"></i></span> */}
           
            {/* <!-- <span className="breadcrumb__divider" aria-hidden="true">›</span> --> */}
          </li>
        </ol>
      </div>



    </div>



  );
};

export default Buttons;