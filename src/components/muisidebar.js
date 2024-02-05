import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CollapsibleCode from "./CodeBlockcode";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

const Muisidebar = () => {
  // Active class for bookmarks
  const [activeElement, setActiveElement] = useState(0);

  const handleItemClick = (index) => {
    setActiveElement(index);
  };
  const items = ["Default", "Primary", "Outlined", "Link Button"];

  // React Code Block Starts
  const [language, changeLanguage] = useState("js");
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const exampleCodeBlock = `<Button variant="contained">Contained</Button>`;

  // React Code Block End here

  // Code for collapse Starts

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Left Sidebar
  const leftsidebar = `// To use mui drawer import drawer component from mui
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

//React MUI component code
const [state, setState] = React.useState({
  left: false,
 });

const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

const list = (anchor) => (
  <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['All mail', 'Trash', 'Spam'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
);
return (
  {["left"].map((left) => (
    <React.Fragment key={left}>
      <Button onClick={toggleDrawerleft(left, true)}>
        {left}
      </Button>
      <Drawer
        anchor={left}
        open={state[left]}
        onClose={toggleDrawerleft(left, false)}>
        {leftside(left)}
      </Drawer>
    </React.Fragment>
  ))}
  );
}`;

  // Right Sidebar
  const rightsidebar = `// To use mui drawer import drawer component from mui
  import Box from "@mui/material/Box";
  import Drawer from "@mui/material/Drawer";
  import Button from "@mui/material/Button";
  
  //React MUI component code
  const [state, setState] = React.useState({
    left: false,
   });
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  
    setState({ ...state, [anchor]: open });
  };
  
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
  {["right"].map((anchor) => (
    <React.Fragment key={anchor}>
      <Button onClick={toggleDrawer(anchor, true)}>
        {anchor}
      </Button>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </React.Fragment>
  ))}
  );
}`;

  // Top Sidebar
  const topsidebar = `// To use mui drawer import drawer component from mui
  import Box from "@mui/material/Box";
  import Drawer from "@mui/material/Drawer";
  import Button from "@mui/material/Button";
  
  //React MUI component code
  const [state, setState] = React.useState({
    left: false,
   });
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  
    setState({ ...state, [anchor]: open });
  };
  
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
   {["top"].map((top) => (
    <React.Fragment key={top}>
      <Button onClick={toggleDrawertop(top, true)}>
        {top}
      </Button>
      <Drawer
        anchor={top}
        open={state[top]}
        onClose={toggleDrawertop(top, false)}
      >
        {topside(top)}
      </Drawer>
    </React.Fragment>
  ))}
  );
}`;

  // Top Sidebar
  const bottomsidebar = `// To use mui drawer import drawer component from mui
  import Box from "@mui/material/Box";
  import Drawer from "@mui/material/Drawer";
  import Button from "@mui/material/Button";
  
  //React MUI component code
  const [state, setState] = React.useState({
    left: false,
   });
  
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
  
    setState({ ...state, [anchor]: open });
  };
  
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
   {["bottom"].map((bottom) => (
    <React.Fragment key={bottom}>
      <Button onClick={toggleDrawerbottom(bottom, true)}>
        Bottom Drawer
      </Button>
      <Drawer
        anchor={bottom}
        open={state[bottom]}
        onClose={toggleDrawer(bottom, false)}>
        {bottomside(bottom)}
      </Drawer>
    </React.Fragment>
  ))}
  );
}`;

  // React Code Block End here

  // Code for collapse Starts

  // Code for collapse End here
  const left_sidebar = {
    code: (
      <CopyBlock
        language={language}
        text={leftsidebar}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  // Right Sidebar
  const right_sidebar = {
    code: (
      <CopyBlock
        language={language}
        text={rightsidebar}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  // Top Sidebar
  const Top_sidebar = {
    code: (
      <CopyBlock
        language={language}
        text={topsidebar}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  // Bottom Sidebar
  const Bottom_sidebar = {
    code: (
      <CopyBlock
        language={language}
        text={bottomsidebar}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const toggleDrawerleft = (left, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [left]: open });
  };

  const toggleDrawertop = (top, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [top]: open });
  };

  const toggleDrawerbottom = (bottom, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [bottom]: open });
  };

  const leftside = (left) => (
    <Box
      role="presentation"
      onClick={toggleDrawerleft(left, false)}
      onKeyDown={toggleDrawerleft(left, false)}
    >
      <div className="slidebar_header">
        <h5> Left Sidebar</h5>
        <button className="close">
          <em className="icon-close-round"> </em>
        </button>
      </div>
    </Box>
  );
  const topside = (top) => (
    <Box
      role="presentation"
      onClick={toggleDrawertop(top, false)}
      onKeyDown={toggleDrawertop(top, false)}
    >
      <div className="slidebar_header">
        <h5> Top Sidebar</h5>
        <button className="close">
          <em className="icon-close-round"> </em>
        </button>
      </div>
    </Box>
  );

  const bottomside = (bottom) => (
    <Box
      role="presentation"
      onClick={toggleDrawerbottom(bottom, false)}
      onKeyDown={toggleDrawerbottom(bottom, false)}
    >
      <div className="slidebar_header">
        <h5> Bottom Sidebar</h5>
        <button className="close">
          <em className="icon-close-round"> </em>
        </button>
      </div>
    </Box>
  );

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="slidebar_header">
        <h5> Right Sidebar</h5>
        <button className="close">
          <em className="icon-close-round"> </em>
        </button>
      </div>
    </Box>
  );
  return (
    <div className="content-area">
      <h1 className="heading"> Drawer</h1>
      <p className="text m-b-0">
        The navigation drawers (or "sidebars") provide ergonomic access to
        destinations in a site or app functionality such as switching accounts.
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
                    @import
                    url("https://freyadesignsystemurl/design/sidebar.css");
                  </div>
                </code>
              </pre>
            </div>
          </section>
        </div>
      </div>
      <hr className="section-border-bottom"></hr>
      <div className="row">
        <div className="col-12">
          <section>
            <h3 className="sub-heading">Left Drawer </h3>
            <p className="text">
              The <code>Drawer</code> allow the user items from a set.
            </p>
            <div className="collapsible-code">
              <div className="row m-t-10 m-l-10">
                <div className="col-12 ">
                  {["left"].map((left) => (
                    <React.Fragment key={left}>
                      <Button onClick={toggleDrawerleft(left, true)}>
                        Left Drawer
                      </Button>
                      <Drawer
                        anchor={left}
                        open={state[left]}
                        onClose={toggleDrawerleft(left, false)}
                      >
                        {leftside(left)}
                      </Drawer>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <CollapsibleCode codeItem={left_sidebar} />
            </div>
          </section>{" "}
        </div>{" "}
      </div>
      <div className="row">
        <div className="col-12">
          <section>
            <h3 className="sub-heading">Right Drawer </h3>
            <p className="text">
              The <code>Drawer</code> allow the user.
            </p>
            <div className="collapsible-code">
              <div className="row m-t-10 m-l-10">
                <div className="col-12 ">
                  <div>
                    {["right"].map((anchor) => (
                      <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>
                          Right Drawer
                        </Button>
                        <Drawer
                          anchor={anchor}
                          open={state[anchor]}
                          onClose={toggleDrawer(anchor, false)}
                        >
                          {list(anchor)}
                        </Drawer>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <CollapsibleCode codeItem={right_sidebar} />
            </div>
          </section>{" "}
        </div>{" "}
      </div>
      <div className="row">
        <div className="col-12">
          <section>
            <h3 className="sub-heading">Top Drawer </h3>
            <p className="text">
              The <code>Drawer</code> allow the user.
            </p>
            <div className="collapsible-code">
              <div className="row m-t-10 m-l-10">
                <div className="col-12 ">
                  <div>
                    {["top"].map((top) => (
                      <React.Fragment key={top}>
                        <Button onClick={toggleDrawertop(top, true)}>
                          Top Drawer
                        </Button>
                        <Drawer
                          anchor={top}
                          open={state[top]}
                          onClose={toggleDrawertop(top, false)}
                        >
                          {topside(top)}
                        </Drawer>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              <CollapsibleCode codeItem={Top_sidebar} />
            </div>
          </section>{" "}
        </div>{" "}
      </div>

      <div className="row">
        <div className="col-12">
          <section>
            <h3 className="sub-heading">Bottom Drawer </h3>
            <p className="text">
              The <code>Drawer</code> allow the user.
            </p>
            <div className="collapsible-code">
              <div className="row m-t-10 m-l-10">
                <div className="col-12">
                  {["bottom"].map((bottom) => (
                    <React.Fragment key={bottom}>
                      <Button onClick={toggleDrawerbottom(bottom, true)}>
                        Bottom Drawer
                      </Button>
                      <Drawer
                        anchor={bottom}
                        open={state[bottom]}
                        onClose={toggleDrawer(bottom, false)}
                      >
                        {bottomside(bottom)}
                      </Drawer>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <CollapsibleCode codeItem={Bottom_sidebar} />
            </div>
          </section>
        </div>
      </div>
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
                href="https://mui.com/material-ui/react-drawer/"
                target="blank"
              >
                MUI Drawer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Muisidebar;
