import React, { useEffect, useState } from "react";

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

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
    const tooltipCode = ` <Tooltip title="Add" arrow>
    <Button>Arrow</Button>
  </Tooltip>`;

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
                {/* Switch Section Starts here */}
                <div className="row">
                    <div className="col-12 ">
                        <section>
                            <h3 className="sub-heading">Basic Tooltip</h3>
                            <p className="text">
                                Tooltips display informative text when users hover over, focus on, or tap an element.   </p>
                            <div className="collapsible-code">
                                <div className="row m-t-10 m-l-10">
                                    <div className="col-12 ">


                                    <Tooltip title="Add" arrow>
      <Button>Arrow</Button>
    </Tooltip>

                                    </div>

                                </div>
                                <CollapsibleCode codeItem={muitooltip} />
                            </div>

                        </section>
                    </div>
                </div>
                {/* Switch Section Ends here */}
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

export default Muibadge;
