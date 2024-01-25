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
    const badgeCode = ` // To use mui chip import chip component from mui // 
    import Chip from '@mui/material/Chip';
    import Stack from '@mui/material/Stack';
    
    // React MUI component code// 
    export default function BasicChips() {
      return (
     <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary"  size="small" />
        <Chip label="success" color="success"  size="small" />
        <Chip label="Small" size="small" />
    </Stack>
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
                <h1 className="heading"> Badges </h1>

                <p className="text m-b-0">
                    Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.
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
                                            @import url("https://freyadesignsystemurl/design/badges.css");

                                        </div>
                                    </code>
                                </pre>
                            </div>
                        </section>
                    </div>
                </div>

                <hr className="section-border-bottom"></hr>
              
                {/* Switch Section Starts here */}
                <div className="row">
                    <div className="col-12 ">
                        <section>
                            <h3 className="sub-heading">Basic Badges</h3>
                            <p className="text">
                                Examples of badges containing text, using primary and secondary colors. The badges is applied to its children.
                            </p>
                            <div className="collapsible-code">
                                <div className="row ">
                                    <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20 ">


                                        <Stack direction="row" spacing={1}>
                                            <Chip label="primary" color="primary" size="small" />
                                            <Chip label="success" color="success" size="small" />
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
                                    href="https://mui.com/material-ui/react-chip/"
                                    target="blank">
                                    MUI Badges
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
