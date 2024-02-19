import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

import CollapsibleCode from "./CodeBlockcode";

import { CopyBlock, dracula } from "react-code-blocks";
const label = { inputProps: { "aria-label": "Switch demo" } };
const Muilist = () => {
  // Active class for bookmarks
  const [activeElement, setActiveElement] = useState(0);

  const handleItemClick = (index) => {
    setActiveElement(index);
  };

  // React Code Block Starts
  const [language, changeLanguage] = useState("js");
  const [lineNumbers, toggleLineNumbers] = useState(true);

  const listCodeone = ` // To use mui list import list component from mui // 
  import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
  
  // React MUI component code// 
  export default function basiclist() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    return (
      <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>
      <Divider />
      <List
        component="nav"
        aria-label="secondary mailbox folder"
      >
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemText primary="Trash" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemText primary="Spam" />
        </ListItemButton>
      </List>
    </Box>
    );
  } 
    `;

  const listCodetwo = ` // To use mui list import list component from mui // 
  import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
  
  // React MUI component code// 
  export default function list() {
    const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
    return (
      <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
          >
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
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

  const listone = {
    code: (
      <CopyBlock
        language={language}
        text={listCodeone}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  const listtwo = {
    code: (
      <CopyBlock
        language={language}
        text={listCodetwo}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="">
      <div className="content-header">
        <h1 className="heading"> List </h1>

        <p className="text m-b-0">
          Lists are a continuous group of text or images. They are composed of
          items containing primary and supplemental actions, which are
          represented by icons and text.
        </p>
      </div>
      <div className="content-wrapper">
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
                        @import
                        url("https://freyadesignsystemurl/design/list.css");
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
                <h3 className="sub-heading"> Selected ListItem</h3>
                <p className="text">
                  Lists are continuous, vertical indexes of text or images.
                </p>
                <div className="collapsible-code">
                  <div className="row ">
                    <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20 ">
                      <Box
                        sx={{
                          width: "100%",
                          maxWidth: 360,
                          bgcolor: "background.paper",
                        }}
                      >
                        <List component="nav" aria-label="main mailbox folders">
                          <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                          >
                            <ListItemIcon>
                              <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                          </ListItemButton>
                          <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                          >
                            <ListItemIcon>
                              <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                          </ListItemButton>
                        </List>
                        <Divider />
                        <List
                          component="nav"
                          aria-label="secondary mailbox folder"
                        >
                          <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                          >
                            <ListItemText primary="Trash" />
                          </ListItemButton>
                          <ListItemButton
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)}
                          >
                            <ListItemText primary="Spam" />
                          </ListItemButton>
                        </List>
                      </Box>
                    </div>
                  </div>
                  <CollapsibleCode codeItem={listone} />
                </div>
              </section>
            </div>
          </div>
          {/* List Section Ends here */}

          <div className="row">
            <div className="col-12 ">
              <section>
                <h3 className="sub-heading"> Nested List</h3>
                <p className="text">
                  Lists are continuous, vertical indexes of text or images.
                </p>
                <div className="collapsible-code">
                  <div className="row ">
                    <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20 ">
                      <Box
                        sx={{
                          width: "100%",
                          maxWidth: 360,
                          bgcolor: "background.paper",
                        }}
                      >
                        <List
                          component="nav"
                          aria-labelledby="nested-list-subheader"
                          subheader={
                            <ListSubheader
                              component="div"
                              id="nested-list-subheader"
                            >
                              Nested List Items
                            </ListSubheader>
                          }
                        >
                          <ListItemButton>
                            <ListItemIcon>
                              <SendIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sent mail" />
                          </ListItemButton>
                          <ListItemButton>
                            <ListItemIcon>
                              <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Drafts" />
                          </ListItemButton>
                          <ListItemButton onClick={handleClick}>
                            <ListItemIcon>
                              <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inbox" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                          </ListItemButton>
                          <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                              <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                  <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary="Starred" />
                              </ListItemButton>
                            </List>
                          </Collapse>
                        </List>
                      </Box>
                    </div>
                  </div>
                  <CollapsibleCode codeItem={listtwo} />
                </div>
              </section>
            </div>
          </div>

          <hr className="section-border-bottom"></hr>

          <div className="row">
            <div className="col-12 m-t-20">
              <h3 className="sub-heading">
                React Material UI Component Library{" "}
              </h3>
              <p className="text">
                For more information, you may refer MUI component page by
                clicking below link.
              </p>

              <div className="notification-main">
                <div className="notification-content">
                  <a
                    href="https://mui.com/material-ui/react-list/"
                    target="blank"
                  >
                    MUI List
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="bookmark-navigator">
      </div> */}
      </div>
    </div>
  );
};

export default Muilist;
