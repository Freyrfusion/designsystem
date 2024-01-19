import React, { useEffect, useState } from "react";

// import Accordion from '@mui/material/Accordion';
// import AccordionActions from '@mui/material/AccordionActions';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';

import CollapsibleCode from "./CodeBlockcode";

import "../designsystem/scss/components/_muiaccordion.scss";
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
    const muiaccordionCode = `   <Stack direction="row" spacing={1}>
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

    const muiaccordion = {
        code: (
            <CopyBlock
                language={language}
                text={muiaccordionCode}
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
                <h1 className="heading"> Accordion </h1>

                <p className="text m-b-0">
                The Accordion component lets users show and hide sections of related content on a page.
                </p>
                {/* Switch Section Starts here */}
                <div className="row">
                    <div className="col-12 ">
                        <section>
                            <h3 className="sub-heading">Basic Accordion</h3>
                            <p className="text">
                            The Accordion component lets users show and hide sections of related content on a page.
                            </p>
                            <div className="collapsible-code">
                                <div className="row m-t-10 m-l-10">
                                    <div className="col-12 ">


                                    <div>
      {/* <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
    

   
      
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion> */}
    </div>

                                    </div>

                                </div>
                                <CollapsibleCode codeItem={muiaccordion} />
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
