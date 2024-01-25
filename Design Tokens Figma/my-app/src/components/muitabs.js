import React, { useEffect, useState } from "react";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';




import CollapsibleCode from "./CodeBlockcode";

import "../designsystem/scss/components/_muibadge.scss";
import { CopyBlock, dracula } from "react-code-blocks";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Muitabscomponent = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Active class for bookmarks
  const [activeElement, setActiveElement] = useState(0);

  const handleItemClick = (index) => {
    setActiveElement(index);
  };
  const items = ["Default", "Primary", "Outlined", "Link Button"];

  // React Code Block Starts
  const [language, changeLanguage] = useState("js");
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const muitabsCode =` // To use mui tabs import tabs component from mui // 
  import PropTypes from 'prop-types';
  import Tabs from '@mui/material/Tabs';
  import Tab from '@mui/material/Tab';
  import Typography from '@mui/material/Typography';
  import Box from '@mui/material/Box';
  
   // React MUI component code// 
  export default function BasicTabs() {
    return (
      <Box >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Tab One" {...a11yProps(0)} />
          <Tab label="Tab Two" {...a11yProps(1)} />
          <Tab label="Tab Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Tab one content
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      Tab two content
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      Tab three content
      </CustomTabPanel>
    </Box>
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

  const muitabs = {
    code: (
      <CopyBlock
        language={language}
        text={muitabsCode}
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
        <h1 className="heading"> Tabs </h1>

        <p className="text m-b-0">
        Tabs make it easy to explore and switch between different views.
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
                    @import url("https://freyadesignsystemurl/design/tabs.css");
                   
                  </div>
                </code>
              </pre>
            </div>
          </section>
        </div>
      </div>

      <hr className="section-border-bottom"></hr>
      
        {/* muitabs Section Starts here */}
        <div className="row">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading">Basic Tabs</h3>
              <p className="text">
              Tabs make it easy to explore and switch between different views.
              </p>
              <div className="collapsible-code">
                <div className="row ">
                  <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20">


                    <Box >
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                          <Tab label="Tab One" {...a11yProps(0)} />
                          <Tab label="Tab Two" {...a11yProps(1)} />
                          <Tab label="Tab Three" {...a11yProps(2)} />
                        </Tabs>
                      </Box>
                      <CustomTabPanel value={value} index={0}>
                        Tab one content
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={1}>
                      Tab two content
                      </CustomTabPanel>
                      <CustomTabPanel value={value} index={2}>
                      Tab three content
                      </CustomTabPanel>
                    </Box>
                  </div>

                </div>
                <CollapsibleCode codeItem={muitabs} />
              </div>

            </section>
          </div>
        </div>
        {/* muitabs Section Ends here */}

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
                href="https://mui.com/material-ui/react-tabs/"
                target="blank">
                MUI Tabs
              </a>
            </div>
          </div>
        </div>
      </div>


      </div>


    </div>
  );
};

export default Muitabscomponent;
