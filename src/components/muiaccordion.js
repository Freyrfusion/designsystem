import React, { useEffect, useState } from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';



// import Button from '@mui/material/Button';
// import AccordionActions from '@mui/material/AccordionActions';
import CollapsibleCode from "./CodeBlockcode";

import "../designsystem/scss/components/_muiaccordion.scss";
import { CopyBlock, dracula } from "react-code-blocks";

const MuiAccordion1 = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&::before': {
      display: 'none',
    },
  }));
  
  const MuiAccordion1Summary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const MuiAccordion1Details = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
  
  

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const MuiAccordioncomponent = () => {
    // Active class for bookmarks
    const [activeElement, setActiveElement] = useState(0);

    const handleItemClick = (index) => {
        setActiveElement(index);
    };
    const items = ["Default", "Primary", "Outlined", "Link Button"];

    // React Code Block Starts
    const [language, changeLanguage] = useState("js");
    const [lineNumbers, toggleLineNumbers] = useState(true);

    const muiaccordionCode = ` // To use mui accordion import accordion component from mui // 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';';
    
     // React MUI component code// 
    export default function AccordionUsage() {
      return (
        <div>
        <Accordion
            expanded={expanded1}
            onChange={handleExpansion}
            slots={{ transition: Fade }}
            slotProps={{ transition: { timeout: 400 } }}
            sx={{
                '& .MuiAccordion-region': { height: expanded1 ? 'auto' : 0 },
                '& .MuiAccordionDetails-root': { display: expanded1 ? 'block' : 'none' },
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography>Custom transition using Fade</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
            >
                <Typography>Default transition using Collapse</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
);
    } 
      `;

    const muiaccordionautocollapse = `  // To use mui accordion import accordion component from mui // 
    import { styled } from '@mui/material/styles';
    import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
    import MuiAccordion from '@mui/material/Accordion';
    import MuiAccordionSummary from '@mui/material/AccordionSummary';
    import MuiAccordionDetails from '@mui/material/AccordionDetails';';
    
    // React MUI component code// 
    <div>
    <MuiAccordion1 expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <MuiAccordion1Summary aria-controls="panel1d-content" id="panel1d-header">
        <Typography>Collapsible Group Item #1</Typography>
      </MuiAccordion1Summary>
      <MuiAccordion1Details>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
      </MuiAccordion1Details>
    </MuiAccordion1>
    <MuiAccordion1 expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <MuiAccordion1Summary aria-controls="panel2d-content" id="panel2d-header">
        <Typography>Collapsible Group Item #2</Typography>
      </MuiAccordion1Summary>
      <MuiAccordion1Details>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
      </MuiAccordion1Details>
    </MuiAccordion1>
    <MuiAccordion1 expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <MuiAccordion1Summary aria-controls="panel3d-content" id="panel3d-header">
        <Typography>Collapsible Group Item #2</Typography>
      </MuiAccordion1Summary>
      <MuiAccordion1Details>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Typography>
      </MuiAccordion1Details>
    </MuiAccordion1>
  
  </div>
`;

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

    const muiaccordinautoautocollapsecode = {
        code: (
            <CopyBlock
                language={language}
                text={muiaccordionautocollapse}
                showLineNumbers={lineNumbers}
                theme={dracula}
                wrapLines={true}
                codeBlock
            />
        ),
    };

    const [expanded1, setExpanded1] = React.useState(false);

    const handleExpansion = () => {
        setExpanded1((prevExpanded) => !prevExpanded);
    };
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className="content-wrapper" id="Default">
            <div className="content-area">
                <h1 className="heading"> Accordion </h1>

                <p className="text m-b-0">
                    The Accordion component lets users show and hide sections of related content on a page.
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
                                            @import url("https://freyadesignsystemurl/design/accordion.css");

                                        </div>
                                    </code>
                                </pre>
                            </div>
                        </section>
                    </div>
                </div>
                
                <hr className="section-border-bottom"></hr>
                
                {/* Mui Accordion Section Starts here */}
                <div className="row">
                    <div className="col-12 ">
                        <section>
                            <h3 className="sub-heading">Basic Accordion</h3>
                            <p className="text">
                                The Accordion component lets users show and hide sections of related content on a page.
                            </p>
                            <div className="collapsible-code">
                                <div className="row ">
                                    <div className="col-12 m-t-20 m-l-25 m-b-20 m-r-20 ">

                                        <div>
                                            <Accordion
                                                expanded={expanded1}
                                                onChange={handleExpansion}
                                                slots={{ transition: Fade }}
                                                slotProps={{ transition: { timeout: 400 } }}
                                                sx={{
                                                    '& .MuiAccordion-region': { height: expanded1 ? 'auto' : 0 },
                                                    '& .MuiAccordionDetails-root': { display: expanded1 ? 'block' : 'none' },
                                                }}
                                            >
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1-content"
                                                    id="panel1-header"
                                                >
                                                    <Typography>Custom transition using Fade</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel2-content"
                                                    id="panel2-header"
                                                >
                                                    <Typography>Default transition using Collapse</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>

                                    </div>

                                </div>
                                <CollapsibleCode codeItem={muiaccordion} />
                            </div>

                        </section>
                    </div>
                </div>
                {/*Mui Accordion Ends here */}

                <hr className="section-border-bottom"></hr>

                {/* Mui Accordion Section Starts here */}
                <div className="row">
                    <div className="col-12  ">
                        <section>
                            <h3 className="sub-heading">Controlled Accordion</h3>
                            <p className="text">
                                The Accordion component lets users show and hide sections of related content on a page.
                            </p>
                            <div className="collapsible-code">
                                <div className="row ">
                                    <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20">

                                    <div>
                    <MuiAccordion1 expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                      <MuiAccordion1Summary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Collapsible Group Item #1</Typography>
                      </MuiAccordion1Summary>
                      <MuiAccordion1Details>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                          sit amet blandit leo lobortis eget.
                        </Typography>
                      </MuiAccordion1Details>
                    </MuiAccordion1>
                    <MuiAccordion1 expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                      <MuiAccordion1Summary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>Collapsible Group Item #2</Typography>
                      </MuiAccordion1Summary>
                      <MuiAccordion1Details>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                          sit amet blandit leo lobortis eget.
                        </Typography>
                      </MuiAccordion1Details>
                    </MuiAccordion1>
                    <MuiAccordion1 expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                      <MuiAccordion1Summary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>Collapsible Group Item #2</Typography>
                      </MuiAccordion1Summary>
                      <MuiAccordion1Details>
                        <Typography>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                          malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                          sit amet blandit leo lobortis eget.
                        </Typography>
                      </MuiAccordion1Details>
                    </MuiAccordion1>
                  
                  </div>

                                    </div>

                                </div>
                                <CollapsibleCode codeItem={muiaccordinautoautocollapsecode} />
                            </div>

                        </section>
                    </div>
                </div>
                {/*Mui Accordion Ends here */}

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
                                    href="https://mui.com/material-ui/react-accordion/"
                                    target="blank">
                                    MUI Accordion
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



            </div>


        </div>
    );
};

export default MuiAccordioncomponent;
