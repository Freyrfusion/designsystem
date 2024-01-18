import React, { useEffect, useState } from "react";

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import CollapsibleCode from "./CodeBlockcode";

import "../designsystem/scss/components/_muiswitch.scss";
import { CopyBlock, dracula } from "react-code-blocks";
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Muiswitch = () => {
    // Active class for bookmarks
    const [activeElement, setActiveElement] = useState(0);

    const handleItemClick = (index) => {
        setActiveElement(index);
    };
    const items = ["Default", "Primary", "Outlined", "Link Button"];

    // React Code Block Starts
    const [language, changeLanguage] = useState("js");
    const [lineNumbers, toggleLineNumbers] = useState(true);
    const switchCode = ` <FormGroup>
    <FormControlLabel control={<Switch defaultChecked size="small" />} label="Label" />
    <FormControlLabel required control={<Switch size="small" />} label="Required" />
    <FormControlLabel control={<Switch {...label} disabled defaultChecked size="small"/>} label="Label" />
    <FormControlLabel disabled control={<Switch size="small" />} label="Disabled" />
</FormGroup>`;

    // React Code Block End here

    // Code for collapse Starts
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };
    // Code for collapse End here

    const switch1 = {
        code: (
            <CopyBlock
                language={language}
                text={switchCode}
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
                <h1 className="heading"> Switch </h1>

                <p className="text m-b-0">
                    Switches toggle the state of a single setting on or off.
                </p>
                {/* Switch Section Starts here */}
                <div className="row">
                    <div className="col-12 ">
                        <section>
                            <h3 className="sub-heading">Basic switches </h3>
                            <p className="text">
                                Switches are the preferred way to adjust settings on mobile. The option that the switch controls, as well as the state it's in, should be made clear from the corresponding inline label.
                            </p>
                            <div className="collapsible-code">
                                <div className="row m-t-10 m-l-10">
                                    <div className="col-12 ">



                                        <FormGroup>
                                            <FormControlLabel control={<Switch defaultChecked size="small" />} label="Label" />
                                            <FormControlLabel required control={<Switch size="small" />} label="Required" />
                                            <FormControlLabel control={<Switch {...label} disabled defaultChecked size="small"/>} label="Label" />
                                            <FormControlLabel disabled control={<Switch size="small" />} label="Disabled" />
                                        </FormGroup>

                                    </div>

                                </div>
                                <CollapsibleCode codeItem={switch1} />
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

export default Muiswitch;
