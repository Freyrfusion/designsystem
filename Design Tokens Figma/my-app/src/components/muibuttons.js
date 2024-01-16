import React, { useEffect, useState } from "react";
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
  const exampleCodeBlock = `<Button variant="contained">Contained</Button>`;
  const defaultbuttonCode = `<Button variant="contained" color="secondary">Default</Button>`;
  // React Code Block End here

  // Code for collapse Starts
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  // Code for collapse End here

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
              <h3 className="sub-heading">Basic button </h3>
              <p className="text">
                The <code>Button</code> comes with three variants: text
                (default), contained, and outlined.
              </p>
              <div
                className={`collapsible-code ${
                  isCollapsed ? "collapsed" : "expanded"
                }`}>
                <div className="row m-t-10 m-l-10">
                  <div className="col-12 ">
                    <button
                      type="button"
                      className="btn MuiButton-containedprimary">
                      {" "}
                      Primary button{" "}
                    </button>
                  </div>
                </div>
                <button className="toggle-btn m-t-10" onClick={toggleCollapse}>
                  {isCollapsed ? "Show Code" : "Hide Code"}
                </button>
                <div className="code-container">
                  <CopyBlock
                    language={language}
                    text={exampleCodeBlock}
                    showLineNumbers={lineNumbers}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                  />
                </div>
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
              <h3 className="sub-heading">Basic button </h3>
              <p className="text">
                The <code>Button</code> comes with three variants: text
                (default), contained, and outlined.
              </p>
              <div
                className={`collapsible-code ${
                  isCollapsed ? "collapsed" : "expanded"
                }`}>
                <div className="row m-t-10 m-l-10">
                  <div className="col-12 ">
                    <button
                      type="button"
                      className="btn MuiButton-containedsecondary">
                      {" "}
                      Default Button{" "}
                    </button>
                  </div>
                </div>
                <button className="toggle-btn m-t-10" onClick={toggleCollapse}>
                  {isCollapsed ? "Show Code" : "Hide Code"}
                </button>
                <div className="code-container">
                  <CopyBlock
                    language={language}
                    text={defaultbuttonCode}
                    showLineNumbers={lineNumbers}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* Default Section Ends here */}
        <hr></hr>
        <div className="row" id="Default">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading">MUI Buttons </h3>
              <p className="text">
                Contained buttons are high-emphasis, distinguished by their use
                of elevation and fill. They contain actions that are primary to
                your app.
              </p>
              <div className="row">
                <div className="col-12 ">
                  <button
                    type="button"
                    className="btn MuiButton-containedprimary">
                    {" "}
                    Primary button{" "}
                  </button>
                  <button
                    type="button"
                    className="btn MuiButton-containedsuccess">
                    {" "}
                    Success button{" "}
                  </button>
                  <button
                    type="button"
                    className="btn MuiButton-containeddanger">
                    {" "}
                    Danger button{" "}
                  </button>
                  <button
                    type="button"
                    className="btn MuiButton-containedwarning">
                    {" "}
                    Warning button{" "}
                  </button>
                  <button
                    type="button"
                    className="btn MuiButton-containedsecondary">
                    {" "}
                    Secondary button{" "}
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
        <hr></hr>

        <div className="row" id="Outlined">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading"> MUI Outlined Buttons </h3>
              <p className="text">
                {" "}
                Outlined buttons are also a lower emphasis alternative to
                contained buttons, or a higher emphasis alternative to text
                buttons.
              </p>
              <div className="row">
                <div className="col-12 ">
                  <button
                    type="button"
                    className="btn MuiButton-outlinedPrimary">
                    {" "}
                    Primary{" "}
                  </button>
                  <button
                    type="button"
                    className="btn MuiButton-outlinedSuccess">
                    {" "}
                    Success{" "}
                  </button>
                  <button type="button" className="btn MuiButton-outlinedError">
                    {" "}
                    Error{" "}
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        <hr></hr>

        <div className="row" id="Link Button">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading"> MUI Link Buttons </h3>
              <p className="text">
                {" "}
                Use a primary button to call attention to an action on a form or
                to highlight the strongest call to action on a page. Primary
                buttons should only appear once per container (not including the
                application header or in a modal dialog). Not every screen
                requires a primary button.
              </p>
              <div className="row">
                <div className="col-12 ">
                  <a href="#" class="MuiButton-textPrimary">
                    {" "}
                    Link button{" "}
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>

        <hr></hr>
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
