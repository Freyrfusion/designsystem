import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import CollapsibleCode from "./CodeBlockcode";

import "../designsystem/scss/components/_muibuttons.scss";
import { CopyBlock, dracula } from "react-code-blocks";
const Muibuttons = () => {
  // Active class for bookmarks
  const [activeElement, setActiveElement] = useState(0);

  const handleItemClick = (index) => {
    setActiveElement(index);
  };
  const items = ["Default", "Primary", "Outlined", "Link Button"];

  // React Code Block Starts
  const [language, changeLanguage] = useState("js");
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const containedbuttonCode = `<Button variant="contained">Contained</Button>`;
  const defaultbuttonCode = `<Button variant="contained" color="secondary">Default</Button>`;
  const linktbuttonCode = `<Button variant="outlined" href="#outlined-buttons">Link</Button>`;
  const successbuttonCode = `<Button variant="contained" color="success"> Success</Button>`;
  const outlinedbuttonCode = `<Button variant="outlined">Primary</Button>`;
  const lefticonbuttonCode = `<Button variant="outlined"> <em className="icon-setting"></em>  Menu  </Button>`;
  const righticonbuttonCode = `<Button variant="contained" >  Menu <em className="icon-setting"></em>  </Button>`;
  // React Code Block End here

  // Code for collapse Starts
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  // Code for collapse End here
  const containedbutton = {
    code: (
      <CopyBlock
        language={language}
        text={containedbuttonCode}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };
  const defaultbutton = {
    code: (
      <CopyBlock
        language={language}
        text={defaultbuttonCode}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };
  const linktbutton = {
    code: (
      <CopyBlock
        language={language}
        text={linktbuttonCode}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };
  const successbutton = {
    code: (
      <CopyBlock
        language={language}
        text={successbuttonCode}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };
  const outlinedbutton = {
    code: (
      <CopyBlock
        language={language}
        text={outlinedbuttonCode}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };
  const lefticonbutton = {
    code: (
      <CopyBlock
        language={language}
        text={lefticonbuttonCode}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };
  const righticonbutton = {
    code: (
      <CopyBlock
        language={language}
        text={righticonbuttonCode}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  return (
    <div className="content-wrapper" id="Default">
      <div className="content-area">
        <h1 className="heading"> Button</h1>

        <p className="text m-b-0">
          Buttons allow users to take actions, and make choices, with a single
          tap.
        </p>
        {/* Primary Section Starts here */}
        <div className="row">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading">Contained primary button </h3>
              <p className="text">
                The <code>Button</code> comes with three variants: text
                (default), contained, and outlined.
              </p>
              <div className="collapsible-code">
                <div className="row m-t-10 m-l-10">
                  <div className="col-12 ">
                    <Button variant="contained">Contained</Button>
                  </div>
                </div>
                <CollapsibleCode codeItem={containedbutton} />
              </div>
            </section>
          </div>
        </div>
        {/* Primary Section Ends here */}
        <hr></hr>

        {/* Default Section Starts here */}
        <div className="row">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading"> Contained default button </h3>
              <p className="text">
                The <code>Button</code> comes with three variants: text
                (default), contained, and outlined.
              </p>
              <div
                className="collapsible-code">
                <div className="row m-t-10 m-l-10">
                  <div className="col-12 ">
                    {/* <button
                      type="button"
                      className="MuiButton-containedSecondary">
                      {" "}
                      Default Button{" "}
                    </button> */}

                    <Button variant="contained" color="secondary">Default</Button>

                  </div>
                </div>
                <CollapsibleCode codeItem={defaultbutton} />
              </div>
            </section>
          </div>
        </div>
        {/* Default Section Ends here */}
        <hr></hr>



        {/* MUI Link Buttons Section Starts here */}
        <div className="row" id="Link Button">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading"> Link button </h3>
              <p className="text">
                The <code>Button</code> comes with three variants: text
                (default), contained, and outlined.
              </p>
              <div
                className="collapsible-code">
                <div className="row m-t-10 m-l-10">
                  <div className="col-12 ">

                    {/* <a href="#" class="MuiButton-textPrimary">
                      {" "}
                      Link button{" "}
                    </a> */}

                    <Button variant="outlined" href="#outlined-buttons">Link</Button>

                  </div>
                </div>
                <CollapsibleCode codeItem={linktbutton} />
              </div>
            </section>
          </div>
        </div>
        {/*MUI Link Buttons Section Ends here */}
        <hr></hr>






        {/* MUI Contained Success Section Starts here */}
        <div className="row">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading">Contained success button </h3>
              <p className="text">
                The <code>Button</code> comes with three variants: text
                (default), contained, and outlined.
              </p>
              <div
                className="collapsible-code">
                <div className="row m-t-10 m-l-10">
                  <div className="col-12 ">
                    {/* <button
                    type="button"
                    className="MuiButton-containedSuccess">
                    {" "}
                    Success button{" "}
                  </button> */}

                    <Button variant="contained" color="success"> Success</Button>
                  </div>
                </div>
                <CollapsibleCode codeItem={successbutton} />
              </div>
            </section>
          </div>
        </div>
        {/* MUI Contained Success Section Ends here */}
        <hr></hr>

        {/* MUI Outlined Primary Section Starts here */}
        <div className="row">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading">Outlined Primary button </h3>
              <p className="text">
                The <code>Button</code> comes with three variants: text
                (default), contained, and outlined.
              </p>
              <div
                className="collapsible-code">
                <div className="row m-t-10 m-l-10">
                  <div className="col-12 ">
                    {/* <button
                    type="button"
                    className="MuiButton-outlinedPrimary">
                    {" "}
                    Primary{" "}
                  </button> */}

                    <Button variant="outlined">Primary</Button>

                  </div>
                </div>
                <CollapsibleCode codeItem={outlinedbutton} />
              </div>
            </section>
          </div>
        </div>
        {/* MUI Outlined Primary Section Ends here */}
        <hr></hr>

        {/* MUI left icon button Section Starts here */}
        <div className="row">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading">Button with left icon</h3>
              <p className="text">
                The <code>Button</code> comes with three variants: text
                (default), contained, and outlined.
              </p>
              <div
                className="collapsible-code">
                <div className="row m-t-10 m-l-10">
                  <div className="col-12 ">
                    {/* <button type="button" className="MuiButton-containedPrimary"> <em className="icon-menu3"></em> Primary button </button> */}

                    <Button variant="outlined"> <em className="icon-setting"></em>  Menu  </Button>



                  </div>
                </div>
                <CollapsibleCode codeItem={lefticonbutton} />
              </div>
            </section>
          </div>
        </div>
        {/* MUI left icon button Section Ends here */}
        <hr></hr>

        {/* MUI right icon button Section Starts here */}
        <div className="row">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading">Button with right icon</h3>
              <p className="text">
                The <code>Button</code> comes with three variants: text
                (default), contained, and outlined.
              </p>
              <div
                className="collapsible-code">
                <div className="row m-t-10 m-l-10">
                  <div className="col-12 ">
                    {/* <button type="button" className="MuiButton-containedPrimary">  Primary button <em className="icon-down-open"></em> </button> */}

                    {/* <Button variant="contained" endIcon={<icon-down-open />}>Send</Button> */}

                    <Button variant="contained" >  Menu <em className="icon-setting"></em>  </Button>



                  </div>
                </div>
                <CollapsibleCode codeItem={righticonbutton} />
              </div>
            </section>
          </div>
        </div>
        {/* MUI right icon button Section Ends here */}


      </div>


      <div className="bookmark-navigator">
        {/* <ul>
            <li><a href="#default">Default</a></li>
            <li><a href="#primary">Primary</a></li>
            <li><a href="#outlined">Outlined</a></li>
            <li><a href="#linkbutton">Link Button</a></li>
          </ul> */}
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className={activeElement === index ? "active" : ""}>
              <a href={"#" + item}> {item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Muibuttons;
