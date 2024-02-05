import React, { useEffect, useState } from "react";

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import CollapsibleCode from "./CodeBlockcode";

import "../designsystem/scss/components/_muibadge.scss";
import { CopyBlock, dracula } from "react-code-blocks";
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Muilist = () => {
  // Active class for bookmarks
  const [activeElement, setActiveElement] = useState(0);

  const handleItemClick = (index) => {
    setActiveElement(index);
  };
  const items = ["Default", "Primary", "Outlined", "Link Button"];

  // React Code Block Starts
  const [language, changeLanguage] = useState("js");
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const badgeCode = ` `;


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
    <div className="content-wrapper" >
      <div className="content-header">
        <h1 className="heading"> List </h1>

        <p className="text m-b-0">
          Lists are a continuous group of text or images. They are composed of items containing primary and supplemental actions, which are represented by icons and text.
        </p>
      </div>

      <div className="content-area">

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
                      @import url("https://freyadesignsystemurl/design/list.css");

                    </div>
                  </code>
                </pre>
              </div>
            </section>
          </div>
        </div>

        <hr className="section-border-bottom"></hr>

        {/* List Section Starts here */}
        <div className="row">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading"> List </h3>
              <p className="text">
                Lists are continuous, vertical indexes of text or images.
              </p>
              <div className="collapsible-code">
                <div className="row ">
                  <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20 ">
                
                                                   </div>

                </div>
                <CollapsibleCode codeItem={badges} />
              </div>

            </section>
          </div>
        </div>
        {/* List Section Ends here */}


        {/* List Section Starts here */}
        <div className="row">
          <div className="col-12 ">
            <section>
              <h3 className="sub-heading"> List </h3>
              <p className="text">
                Lists are continuous, vertical indexes of text or images.
              </p>
              <div className="collapsible-code">
                <div className="row ">
                  <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20 ">

                  </div>

                </div>
                <CollapsibleCode codeItem={badges} />
              </div>

            </section>
          </div>
        </div>
        {/* List Section Ends here */}

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
                  href="https://mui.com/material-ui/react-list/"
                  target="blank">
                  MUI List
                </a>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div className="bookmark-navigator">
      </div>

    </div>
  );
};

export default Muilist;
