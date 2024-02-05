import React, { useEffect, useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import CollapsibleCode from "./CodeBlockcode";

import "../designsystem/scss/components/_muibadge.scss";
import { CopyBlock, dracula } from "react-code-blocks";
const label = { inputProps: { "aria-label": "Switch demo" } };
const Muibreadcrumbcomponent = () => {
  // Active class for bookmarks
  const [activeElement, setActiveElement] = useState(0);

  const handleItemClick = (index) => {
    setActiveElement(index);
  };

  // React Code Block Starts
  const [language, changeLanguage] = useState("js");
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const breadcrumbsCode = ` // To use mui chip import chip component from mui // 
    import Breadcrumbs from '@mui/material/Breadcrumbs';
    import Typography from '@mui/material/Typography';
    import Link from '@mui/material/Link';
    import Stack from '@mui/material/Stack';
    import NavigateNextIcon from '@mui/icons-material/NavigateNext';
    
    // React MUI component code// 
    export default function Basicbreadcrumbs() {
      return (
        <Stack >
        <Breadcrumbs               
            separator={<NavigateNextIcon />}
            aria-label="breadcrumb"
        >
            {breadcrumbslist}
        </Breadcrumbs>
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

  const breadcrumbs = {
    code: (
      <CopyBlock
        language={language}
        text={breadcrumbsCode}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbslist = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Fry
    </Link>,
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Menu
    </Link>,
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Heading
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Sub Heading
    </Link>,

    <Typography key="3" color="text.primary">
      Content
    </Typography>,
  ];

  return (
    <div>
      <div className="content-header">
        <h1 className="heading"> Breadcrumb </h1>

        <p className="text m-b-0">
          A breadcrumb provides page context to help users navigate more
          efficiently and understand where they are in the application
          hierarchy.
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
                        url("https://freyadesignsystemurl/design/breadcrumb.css");
                      </div>
                    </code>
                  </pre>
                </div>
              </section>
            </div>
          </div>

          <hr className="section-border-bottom"></hr>

          {/* Breadcrumbs Section Starts here */}
          <div className="row">
            <div className="col-12 ">
              <section>
                <h3 className="sub-heading">Breadcrumb</h3>
                <p className="text">
                  A breadcrumbs is a list of links that help visualize a page's
                  location within a site's hierarchical structure, it allows
                  navigation up to any of the ancestors.
                </p>
                <div className="collapsible-code">
                  <div className="row ">
                    <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20 ">
                      <Stack>
                        <Breadcrumbs
                          separator={<NavigateNextIcon />}
                          aria-label="breadcrumb"
                        >
                          {breadcrumbslist}
                        </Breadcrumbs>
                      </Stack>
                    </div>
                  </div>
                  <CollapsibleCode codeItem={breadcrumbs} />
                </div>
              </section>
            </div>
          </div>
          {/* Breadcrumbs Section Ends here */}

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
                    href="https://mui.com/material-ui/react-breadcrumbs/"
                    target="blank"
                  >
                    MUI Breadcrumb
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Muibreadcrumbcomponent;
