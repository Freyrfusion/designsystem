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
  const containedbuttonCode = ` // To use mui buttons import button component from mui // 
import Button from '@mui/material/Button';
  
// React MUI component code// 
export default function BasicButtons() {
  return (
  <Button variant="contained">Contained</Button>
  );
}
  `;

  const defaultbuttonCode = ` // To use mui buttons import button component from mui // 
  import Button from '@mui/material/Button';

  // React MUI component code// 
  export default function BasicButtons() {
    return (
  <Button variant="contained" color="secondary">Default</Button>
  );
} 
  `;
  const linktbuttonCode = ` // To use mui buttons import button component from mui // 
  import Button from '@mui/material/Button';

  // React MUI component code// 
  export default function BasicButtons() {
    return (
  <Button variant="outlined" href="#outlined-buttons">Link</Button>
  );
} 
  `;
  const successbuttonCode = ` // To use mui buttons import button component from mui // 
  import Button from '@mui/material/Button';

  // React MUI component code// 
  export default function BasicButtons() {
    return (
 <Button variant="contained" color="success"> Success</Button>
  );
} 
  `;
  const outlinedbuttonCode = ` // To use mui buttons import button component from mui // 
  import Button from '@mui/material/Button';

  // React MUI component code// 
  export default function BasicButtons() {
    return (
 <Button variant="outlined">Primary</Button>
  );
} 
  `;
  const lefticonbuttonCode = ` // To use mui buttons import button component from mui // 
  import Button from '@mui/material/Button';

  // React MUI component code// 
  export default function BasicButtons() {
    return (
 <Button variant="outlined"> <em className="icon-setting"></em>  Menu  </Button>
  );
} 
  `;
  const righticonbuttonCode = ` // To use mui buttons import button component from mui // 
  import Button from '@mui/material/Button';

  // React MUI component code// 
  export default function BasicButtons() {
    return (
 <Button variant="contained" >  Menu <em className="icon-setting"></em>  </Button>
  );
} 
  `;
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

        <div className="row">
          <div className="col-12">
            <section>
              <h3 className="sub-heading">Component Usage </h3>
              <p className="text">
                To use design system styles, import below file to your App /
                Component
              </p>

              <div className="code-container-import">
                <pre>
                  <code>
                    <div className="m-l-15">
                      @import url("https://freyadesignsystemurl/design/buttons.css");

                    </div>
                  </code>
                </pre>
              </div>
            </section>
          </div>
        </div>

        <hr className="section-border-bottom"></hr>

       

        {/* Primary Section Starts here */}
        <div className="row">

          <div className="col-12 ">
            <section>
              <h3 className="sub-heading">Contained primary button </h3>
              <p className="text">
              Use a primary button to call attention to an action on a form or to highlight the strongest call to action on a page. Primary buttons should only appear once per container (not including the application header or in a modal dialog). Not every screen requires a primary button.
              </p>
              <div className="collapsible-code">
                <div className="row">
                  <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20">
                    <Button variant="contained">Contained</Button>
                  </div>
                </div>
                <CollapsibleCode codeItem={containedbutton} />
              </div>
            </section>
          </div>
        </div>

        {/* Primary Section Ends here */}
   

        {/* Default Section Starts here */}
        <div className="row">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading"> Contained default button </h3>
              <p className="text">
              Secondary buttons are less visually prominant than primary buttons. Use for general actions on a page that require less emphasis than primary buttons.
              </p>
              <div
                className="collapsible-code">
                <div className="row">
                  <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20">

                    <Button variant="contained" color="secondary">
                      Default
                    </Button>
                  </div>
                </div>
                <CollapsibleCode codeItem={defaultbutton} />
              </div>
            </section>
          </div>
        </div>
        {/* Default Section Ends here */}
   



        {/* MUI Link Buttons Section Starts here */}
        <div className="row" id="Link Button">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading"> Link button </h3>
              <p className="text">
              Links are labeled, but have no background or border. Use for actions that require less emphasis, actions that navigate users to another page within the same window, and/or actions that navigate to external pages in a new window. Links may be placed inline with text using the isInline property.
              </p>
              <div
                className="collapsible-code">
                <div className="row">
                  <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20">

                    <Button variant="outlined" href="#outlined-buttons">
                      Link
                    </Button>
                  </div>
                </div>
                <CollapsibleCode codeItem={linktbutton} />
              </div>
            </section>
          </div>
        </div>
        {/*MUI Link Buttons Section Ends here */}
      



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
                <div className="row ">
                  <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20">

                    <Button variant="contained" color="success">
                      {" "}
                      Success
                    </Button>
                  </div>
                </div>
                <CollapsibleCode codeItem={successbutton} />
              </div>
            </section>
          </div>
        </div>
        {/* MUI Contained Success Section Ends here */}
       

        {/* MUI Outlined Primary Section Starts here */}
        <div className="row">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading">Outlined Primary button </h3>
              <p className="text">
              Outlined buttons are medium-emphasis buttons. They contain actions that are important but aren't the primary action in an app.Outlined buttons are also a lower emphasis alternative to contained buttons, or a higher emphasis alternative to text buttons.
              </p>
              <div
                className="collapsible-code">
                <div className="row ">
                  <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20 ">

                    <Button variant="outlined">Primary</Button>
                  </div>
                </div>
                <CollapsibleCode codeItem={outlinedbutton} />
              </div>
            </section>
          </div>
        </div>
        {/* MUI Outlined Primary Section Ends here */}
 

        {/* MUI left icon button Section Starts here */}
        <div className="row">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading">Button with left icon</h3>
              <p className="text">
              Buttons may include an icon before the text.
              </p>
              <div
                className="collapsible-code">
                <div className="row">
                  <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20">

                    <Button variant="outlined"> <em className="icon-setting"></em>  Menu  </Button>

                  </div>
                </div>
                <CollapsibleCode codeItem={lefticonbutton} />
              </div>
            </section>
          </div>
        </div>
        {/* MUI left icon button Section Ends here */}


        {/* MUI right icon button Section Starts here */}
        <div className="row">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading">Button with right icon</h3>
              <p className="text">
              Buttons may include an icon after the text.
              </p>
              <div
                className="collapsible-code">
                <div className="row ">
                  <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20 ">

                    <Button variant="contained" >  Menu <em className="icon-setting"></em>  </Button>

                  </div>
                </div>
                <CollapsibleCode codeItem={righticonbutton} />
              </div>
            </section>
          </div>
        </div>
        {/* MUI right icon button Section Ends here */}

      <hr className="section-border-bottom"></hr>
      
        <div className="row">
          <div className="col-12 m-t-20">
            <h3 className="sub-heading">React Material UI Component Library </h3>
            <p className="text">
              For more information, you may refer MUI component page by clicking
              below link.
            </p>

            <div className="notification-main">
              <div className="notification-content">
                <a
                  href="https://mui.com/material-ui/react-button/"
                  target="blank" >
                  MUI Buttons
                </a>
              </div>
            </div>
          </div>
        </div>


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
              className={activeElement === index ? "active" : ""}
            >
              <a href={"#" + item}> {item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Muibuttons;
