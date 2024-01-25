import React, { useEffect, useState } from "react";

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';



// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Fade from '@mui/material/Fade';
import CollapsibleCode from "./CodeBlockcode";

import "../designsystem/scss/components/_muibadge.scss";
import { CopyBlock, dracula } from "react-code-blocks";
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Muibadge = () => {
    // Active class for bookmarks
    const [activeElement, setActiveElement] = useState(0);

    const handleItemClick = (index) => {
        setActiveElement(index);
    };
    const items = ["Default", "Primary", "Outlined", "Link Button"];

    // React Code Block Starts
    const [language, changeLanguage] = useState("js");
    const [lineNumbers, toggleLineNumbers] = useState(true);
    const tooltipCode = ` // To use mui tooltip import tooltip component from mui // 
    import Button from '@mui/material/Button';
    import Tooltip from '@mui/material/Tooltip';
    import Zoom from '@mui/material/Zoom';
    
    // React MUI component code// 
    export default function BasicTooltip() {
      return (
    <Tooltip TransitionComponent={Zoom}
        title="Tooltip text " >
        <Button>Tooltip One</Button>
    </Tooltip>
    
    <Tooltip TransitionComponent={Zoom} 
    title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." >
    <Button>Tooltip Two</Button>
    </Tooltip>
    
    <Tooltip TransitionComponent={Zoom} followCursor
    title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text." >
    <Button>Tooltip Three</Button>
    </Tooltip>
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

    const muitooltip = {
        code: (
            <CopyBlock
                language={language}
                text={tooltipCode}
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
                <h1 className="heading"> Tooltip </h1>

                <p className="text m-b-0">
                    Tooltips display informative text when users hover over, focus on, or tap an element.
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
                    @import url("https://freyadesignsystemurl/design/tooltip.css");
                   
                  </div>
                </code>
              </pre>
            </div>
          </section>
        </div>
      </div>

      <hr className="section-border-bottom"></hr>
     
                {/* Tooltip Section Starts here */}
                <div className="row">
                    <div className="col-12 ">
                        <section>
                            <h3 className="sub-heading">Basic Tooltip</h3>
                            <p className="text">
                                Tooltips display informative text when users hover over, focus on, or tap an element.   </p>
                            <div className="collapsible-code">
                                <div className="row ">
                                    <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20">

                                    <Tooltip TransitionComponent={Zoom}
                                            title="Tooltip text " >
                                            <Button>Small Tooltip</Button>
                                        </Tooltip>

                                        <Tooltip TransitionComponent={Zoom} 
                                            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry." >
                                            <Button>Length Tooltip </Button>
                                        </Tooltip>


                                        <Tooltip TransitionComponent={Zoom} followCursor
                                            title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text." >
                                            <Button>Tooltip Follow Cursor</Button>
                                        </Tooltip>

                                    </div>

                                </div>
                                <CollapsibleCode codeItem={muitooltip} />
                            </div>

                        </section>
                    </div>
                </div>
                {/* Tooltip Section Ends here */}

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
                href="https://mui.com/material-ui/react-tooltip/"
                target="blank">
                MUI Tooltip
              </a>
            </div>
          </div>
        </div>
      </div>

                




            </div>


        </div>
    );
};

export default Muibadge;
