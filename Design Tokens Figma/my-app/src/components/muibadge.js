import React, { useEffect, useState } from "react";

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

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
    const badgeCode = `   <Stack direction="row" spacing={1}>
    <Chip label="primary" color="primary"  size="small" />
    <Chip label="success" color="success"  size="small" />
    <Chip label="Small" size="small" />
</Stack>`;

    // React Code Block End here

    // Code for collapse Starts
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };
    // Code for collapse End here

    const badges = {
        code: (
            <CopyBlock
                language={language}
                text={badgeCode}
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
                <h1 className="heading"> Badge </h1>

                <p className="text m-b-0">
                    Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.
                </p>
                {/* Switch Section Starts here */}
                <div className="row">
                    <div className="col-12 ">
                        <section>
                            <h3 className="sub-heading">Basic Badge</h3>
                            <p className="text">
                                Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.
                            </p>
                            <div className="collapsible-code">
                                <div className="row m-t-10 m-l-10">
                                    <div className="col-12 ">


                                        <Stack direction="row" spacing={1}>
                                            <Chip label="primary" color="primary"  size="small" />
                                            <Chip label="success" color="success"  size="small" />
                                            <Chip label="Small" size="small" />
                                        </Stack>

                                    </div>

                                </div>
                                <CollapsibleCode codeItem={badges} />
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
