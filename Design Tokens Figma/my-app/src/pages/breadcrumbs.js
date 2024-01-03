import React, { useEffect } from 'react';

const Buttons = () => {
  return (
    <div class="components-height">

      <h1 class="heading">We are preparing Breadcrumbs</h1>

      <h3 class="sub-heading"> Breadcrumbs</h3>
      <p class="text"> A breadcrumb or breadcrumb trail is a graphical control element used as a navigational aid in user interfaces and on web pages. It allows users to keep track and maintain awareness of their locations within programs, documents, or websites.</p>
      <ul class="breadcrumb-classic">
        <li> Fry </li>
        <li > Menu </li>
        <li > Heading </li>
        <li > Sub Heading </li>
        <li class="active"> Content</li>


      </ul>

      <hr></hr>
      <h3 class="sub-heading"> Breadcrumbs</h3>
      <p class="text"> A breadcrumb or breadcrumb trail is a graphical control element used as a navigational aid in user interfaces and on web pages. It allows users to keep track and maintain awareness of their locations within programs, documents, or websites.</p>
      <div class="breadcrumb breadcrumb_type5 m-b-5" aria-label="Breadcrumb">
        <ol class="breadcrumb__list r-list">

          <li class="breadcrumb__group" >
            <a href="#0" class="breadcrumb__point r-link"> Fry </a>
            <span class="breadcrumb__divider" aria-hidden="true"><i class="icon-right-open"></i></span>
          </li>
          <li class="breadcrumb__group">
            <a href="#0" class="breadcrumb__point r-link "> Menu </a>
            <span class="breadcrumb__divider" aria-hidden="true"><i class="icon-right-open"></i></span>
           
            {/* <!-- <span class="breadcrumb__divider" aria-hidden="true">›</span> --> */}
          </li>
          <li class="breadcrumb__group">
            <a href="#0" class="breadcrumb__point r-link "> Heading </a>
            <span class="breadcrumb__divider" aria-hidden="true"><i class="icon-right-open"></i></span>
           
            {/* <!-- <span class="breadcrumb__divider" aria-hidden="true">›</span> --> */}
          </li>
          <li class="breadcrumb__group">
            <a href="#0" class="breadcrumb__point r-link "> Sub Heading </a>
            <span class="breadcrumb__divider" aria-hidden="true"><i class="icon-right-open"></i></span>
           
            {/* <!-- <span class="breadcrumb__divider" aria-hidden="true">›</span> --> */}
          </li>
          <li class="breadcrumb__group">
            <a href="#0" class="breadcrumb__point r-link active"> Sub Heading </a>
            {/* <span class="breadcrumb__divider" aria-hidden="true"><i class="icon-right-open"></i></span> */}
           
            {/* <!-- <span class="breadcrumb__divider" aria-hidden="true">›</span> --> */}
          </li>
        </ol>
      </div>


    </div>





  );
};

export default Buttons;