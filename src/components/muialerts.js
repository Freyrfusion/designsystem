import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CollapsibleCode from "./CodeBlockcode";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";

const Muiform = () => {
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

  // Start alert
  const alerts = `// To use mui alerts import button alerts from mui
import Alert from '@mui/material/Alert';

//React MUI component code
export default function BasicAlerts() {
  return (
   <Alert severity="success" onClose={() => {}}>
  This is a success Alert with an encouraging title.
</Alert>
<Alert severity="info" onClose={() => {}}>
  This is an info Alert with an informative title.
</Alert>
<Alert  severity="warning"  action={
    <Button color="inherit" size="small">
      UNDO
    </Button>
  }>
  This is a warning Alert with a cautious title.
</Alert>
<Alert  severity="error" action={
    <Button color="inherit" size="small">
      UNDO
    </Button>
  }>
  This is an error Alert with a scary title.
</Alert>
);
}`;

  // Start alert with title
  const alertstitle = `// To use mui alerts import button alerts from mui 
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

//React MUI component code
export default function DescriptionAlerts() {
  return (
  <Alert severity="success" onClose={() => {}}>
  <AlertTitle>Success</AlertTitle>
  This is a success Alert with an encouraging title.
</Alert>
<Alert severity="info" onClose={() => {}}>
  <AlertTitle>Info</AlertTitle>
  This is an info Alert with an informative title.
</Alert>
<Alert severity="warning" onClose={() => {}}>
  <AlertTitle>Warning</AlertTitle>
  This is a warning Alert with a cautious title.
</Alert>
<Alert severity="error" onClose={() => {}}>
  <AlertTitle>Error</AlertTitle>
  This is an error Alert with a scary title.
</Alert>
);
}`;

  // React Code Block End here

  // Code for collapse Starts

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  // Code for collapse End here
  const alerts1 = {
    code: (
      <CopyBlock
        language={language}
        text={alerts}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };
  const alerts_title = {
    code: (
      <CopyBlock
        language={language}
        text={alertstitle}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  return (
    <div className="content-area">
      <h1 className="heading"> Alert </h1>
      <p className="text m-b-0">
        Alerts display brief messages for the user without interrupting their
        use of the app.
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
                    url("https://freyadesignsystemurl/design/alerts.css");
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
            <h3 className="sub-heading">Severity </h3>
            <p className="text">
              The severity prop accepts four values representing different
              states—success (the default), info, warning, and error–with
              corresponding icon and color combinations for each.
            </p>
            <div className="collapsible-code">
              <div className="row ">
                <div className="col-12 m-t-20 m-l-20 m-r-20 m-b-20">
                  <Alert
                    className="m-b-10"
                    severity="success"
                    onClose={() => {}}
                  >
                    This is a success Alert with an encouraging title.
                  </Alert>
                  <Alert className="m-b-10" severity="info" onClose={() => {}}>
                    This is an info Alert with an informative title.
                  </Alert>
                  <Alert
                    className="m-b-10"
                    severity="warning"
                    action={
                      <Button color="inherit" size="small">
                        UNDO
                      </Button>
                    }
                  >
                    This is a warning Alert with a cautious title.
                  </Alert>
                  <Alert
                    className="m-b-10"
                    severity="error"
                    action={
                      <Button color="inherit" size="small">
                        UNDO
                      </Button>
                    }
                  >
                    This is an error Alert with a scary title.
                  </Alert>
                </div>
              </div>

              <CollapsibleCode codeItem={alerts1} />
            </div>
          </section>{" "}
        </div>{" "}
      </div>
      <div className="row">
        <div className="col-12">
          <section>
            <h3 className="sub-heading">Titles </h3>
            <p className="text">
              To add a title to an <code>Alert</code>, import the Alert Title
              component:
            </p>
            <div className="collapsible-code">
              <div className="row ">
                <div className="col-12 m-t-20 m-l-20 m-r-20 m-b-20">
                  <Alert
                    className="m-b-10"
                    severity="success"
                    onClose={() => {}}
                  >
                    <AlertTitle>Success</AlertTitle>
                    This is a success Alert with an encouraging title.
                  </Alert>
                  <Alert className="m-b-10" severity="info" onClose={() => {}}>
                    <AlertTitle>Info</AlertTitle>
                    This is an info Alert with an informative title.
                  </Alert>
                  <Alert
                    className="m-b-10"
                    severity="warning"
                    onClose={() => {}}
                  >
                    <AlertTitle>Warning</AlertTitle>
                    This is a warning Alert with a cautious title.
                  </Alert>
                  <Alert className="m-b-10" severity="error" onClose={() => {}}>
                    <AlertTitle>Error</AlertTitle>
                    This is an error Alert with a scary title.
                  </Alert>
                </div>
              </div>

              <CollapsibleCode codeItem={alerts_title} />
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
              <a href="https://mui.com/material-ui/react-alert/" target="blank">
                MUI Alerts
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Muiform;
