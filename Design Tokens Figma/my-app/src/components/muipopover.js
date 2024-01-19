import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CollapsibleCode from "./CodeBlockcode";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Muipopover = () => {
  //Start Popover onclick
  const [anchorE, setAnchorE] = React.useState(null);

  const handleClick = (event) => {
    setAnchorE(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE(null);
  };

  const opens = Boolean(anchorE);
  const id = opens ? "simple-popover" : undefined;

  //Start Popover hover

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

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

  // Start popover onclick
  const popoverclick = `<Button aria-describedby={id}
  variant="contained"
  onClick={handleClick}
>
  Open Popover
</Button>
<Popover
  id={id}
  open={opens}
  anchorEl={anchorE}
  onClose={handleClose}
  anchorOrigin={{
    vertical: "bottom",
    horizontal: "left",
  }}>
  <Typography>The content of the Popover.</Typography>
</Popover>`;

  // Start popover hover
  const popoverhover = `<Typography
  aria-owns={open ? "mouse-over-popover" : undefined}
  aria-haspopup="true"
  onMouseEnter={handlePopoverOpen}
  onMouseLeave={handlePopoverClose}
>
  Hover with a Popover.
</Typography>
<Popover
  id="mouse-over-popover"
  sx={{
    pointerEvents: "none",
  }}
  open={open}
  anchorEl={anchorEl}
  anchorOrigin={{
    vertical: "bottom",
    horizontal: "left",
  }}
  transformOrigin={{
    vertical: "top",
    horizontal: "left",
  }}
  onClose={handlePopoverClose}
  disableRestoreFocus>
  <Typography>I use Popover.</Typography>
</Popover>`;

  // React Code Block End here

  // Code for collapse Starts

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  // Code for collapse End here
  const popover_click = {
    code: (
      <CopyBlock
        language={language}
        text={popoverclick}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  const popover_hover = {
    code: (
      <CopyBlock
        language={language}
        text={popoverhover}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  return (
    <div className="content-area">
      <h1 className="heading"> Popover</h1>
      <p className="text">
        {" "}
        A Popover can be used to display some content on top of another.{" "}
      </p>
      <div className="row">
        <div className="col-12">
          <section>
            <h3 className="sub-heading">Basic Popover </h3>
            <p className="text">
              The <code>Popover</code>
            </p>
            <div className="collapsible-code">
              <div className="row ">
                <div className="col-12 m-t-20 m-l-20 m-b-10">
                  <Button
                    aria-describedby={id}
                    variant="contained"
                    onClick={handleClick}
                  >
                    Open Popover
                  </Button>
                  <Popover
                    id={id}
                    open={opens}
                    anchorEl={anchorE}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <Typography>The content of the Popover.</Typography>
                  </Popover>
                </div>
              </div>

              <CollapsibleCode codeItem={popover_click} />
            </div>
          </section>{" "}
        </div>{" "}
      </div>
      <div className="row">
        <div className="col-12">
          <section>
            <h3 className="sub-heading">Mouse over interaction </h3>
            <p className="text">
              This demo demonstrates how to use the Popover component and the
              mouseover event to achieve <code>popover</code> behavior.
            </p>
            <div className="collapsible-code">
              <div className="row ">
                <div className="col-12 m-t-20 m-l-20">
                  <Typography
                    aria-owns={open ? "mouse-over-popover" : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                  >
                    Hover with a Popover.
                  </Typography>
                  <Popover
                    id="mouse-over-popover"
                    sx={{
                      pointerEvents: "none",
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                  >
                    <Typography>I use Popover.</Typography>
                  </Popover>
                </div>
              </div>

              <CollapsibleCode codeItem={popover_hover} />
            </div>
          </section>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Muipopover;
