import React, { useEffect, useState } from "react";

import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import CollapsibleCode from "./CodeBlockcode";
import { CopyBlock, dracula } from "react-code-blocks";
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Muimenucomponent = () => {
  // Active class for bookmarks
  const [activeElement, setActiveElement] = useState(0);

  const handleItemClick = (index) => {
    setActiveElement(index);
  };


  // React Code Block Starts
  const [language, changeLanguage] = useState("js");
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const menuCode = ` // To use mui menu import menu component from mui // 
    import { styled, alpha } from '@mui/material/styles';
    import Button from '@mui/material/Button';
    import Menu from '@mui/material/Menu';
    import MenuItem from '@mui/material/MenuItem';
    import EditIcon from '@mui/icons-material/Edit';
    import Divider from '@mui/material/Divider';
    import ArchiveIcon from '@mui/icons-material/Archive';
    import FileCopyIcon from '@mui/icons-material/FileCopy';
    import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
    import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
    
    // React MUI component code// 
    export default function Basicmenu() {
      return (

  <div>
        <span className="MuiButton-containedPrimary"
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />} > Menu
        </span>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',}}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}>
          <MenuItem onClick={handleClose} disableRipple>
            <EditIcon />
            Edit
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <FileCopyIcon />
            Duplicate
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            <ArchiveIcon />
            Archive
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <MoreHorizIcon />
            More
          </MenuItem>
        </StyledMenu>
      </div>
      );
    } 
      `;

  const menuCodetwo = ` // To use mui menu import menu component from mui // 
  import IconButton from '@mui/material/IconButton';
  import Menu from '@mui/material/Menu';
  import MenuItem from '@mui/material/MenuItem';
  import MoreVertIcon from '@mui/icons-material/MoreVert';
      
 // React MUI component code// 
      export default function menu() {
        return (
  
  <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={opened ? 'long-menu' : undefined}
        aria-expanded={opened ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick1}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={opened}
        onClose={handleClose1}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose1}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>        );
      } 
        `;

  // React Code Block End here

  // Code for collapse Starts
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  // Code for collapse End here

  const menuOne = {
    code: (
      <CopyBlock
        language={language}
        text={menuCode}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };
  const menuTwo = {
    code: (
      <CopyBlock
        language={language}
        text={menuCodetwo}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

  const [anchorE2, setAnchorE2] = React.useState(null);
  const opened = Boolean(anchorE2);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };

  const optiontwo = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
  ];

  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div className="" >
      <div className="content-header">
        <h1 className="heading"> Menu </h1>

        <p className="text ">
          A menu is a disclosure component that appears with a set of actions relevant to a specific control, interface area, data element, or application view. Typically, this context is determined by the user’s current selection prior to invoking the menu.
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
                        @import url("https://freyadesignsystemurl/design/menu.css");

                      </div>
                    </code>
                  </pre>
                </div>
              </section>
            </div>
          </div>

          <hr className="section-border-bottom"></hr>

          {/* Menu Section Starts here */}
          <div className="row">
            <div className="col-12 ">
              <section>
                <h3 className="sub-heading"> Menu </h3>
                <p className="text">
                  Menus display a list of choices on temporary surfaces.
                </p>
                <div className="collapsible-code">
                  <div className="row ">
                    <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20 ">


                      <div>
                        <Button
                          id="demo-customized-button"
                          aria-controls={open ? 'demo-customized-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                          variant="contained"
                          disableElevation
                          onClick={handleClick}
                          endIcon={<KeyboardArrowDownIcon />}
                        >
                          Menu
                        </Button>
                        <StyledMenu
                          id="demo-customized-menu"
                          MenuListProps={{
                            'aria-labelledby': 'demo-customized-button',
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose} disableRipple>
                            <EditIcon />
                            Edit
                          </MenuItem>
                          <MenuItem onClick={handleClose} disableRipple>
                            <FileCopyIcon />
                            Duplicate
                          </MenuItem>
                          <Divider sx={{ my: 0.5 }} />
                          <MenuItem onClick={handleClose} disableRipple>
                            <ArchiveIcon />
                            Archive
                          </MenuItem>
                          <MenuItem onClick={handleClose} disableRipple>
                            <MoreHorizIcon />
                            More
                          </MenuItem>
                        </StyledMenu>
                      </div>
                    </div>

                  </div>
                  <CollapsibleCode codeItem={menuOne} />
                </div>

              </section>
            </div>
          </div>
          {/* Menu Section Ends here */}

          {/* Second Menu Section Starts here */}
          <div className="row">
            <div className="col-12 ">
              <section>
                <h3 className="sub-heading">Icon Menu </h3>
                <p className="text">
                If the height of a menu prevents all menu items from being displayed, the menu can scroll internally.
                </p>
                <div className="collapsible-code">
                  <div className="row ">
                    <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20 ">


                      <div>
                        <IconButton
                          aria-label="more"
                          id="long-button"
                          aria-controls={opened ? 'long-menu' : undefined}
                          aria-expanded={opened ? 'true' : undefined}
                          aria-haspopup="true"
                          onClick={handleClick1}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="long-menu"
                          MenuListProps={{
                            'aria-labelledby': 'long-button',
                          }}
                          anchorEl={anchorEl}
                          open={opened}
                          onClose={handleClose1}
                          PaperProps={{
                            style: {
                              maxHeight: ITEM_HEIGHT * 4.5,
                              width: '20ch',
                            },
                          }}
                        >
                          {optiontwo.map((option) => (
                            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose1}>
                              {option}
                            </MenuItem>
                          ))}
                        </Menu>
                      </div>
                    </div>

                  </div>
                  <CollapsibleCode codeItem={menuTwo} />
                </div>

              </section>
            </div>
          </div>
          {/* Second Menu Section Ends here */}

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
                    href="https://mui.com/material-ui/react-menu/"
                    target="blank">
                    MUI Menu
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

export default Muimenucomponent;
