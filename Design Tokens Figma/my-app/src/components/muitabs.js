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
    const badgeCode = `   <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>
    </Box>
    <CustomTabPanel value={value} index={0}>
      Item One
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
      Item Two
    </CustomTabPanel>
    <CustomTabPanel value={value} index={2}>
      Item Three
    </CustomTabPanel>
  </Box>
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
                <h1 className="heading"> Badge </h1>

                <p className="text m-b-0">
                    Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.
                </p>
                {/* muitabs Section Starts here */}
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


                                    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
                                    </div>

                                </div>
                                <CollapsibleCode codeItem={badges} />
                            </div>

                        </section>
                    </div>
                </div>
                {/* muitabs Section Ends here */}
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

export default Muitabscomponent;
