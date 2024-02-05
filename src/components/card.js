import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import CollapsibleCode from "./CodeBlockcode";

import "../designsystem/scss/components/_muibadge.scss";
import { CopyBlock, dracula } from "react-code-blocks";
const label = { inputProps: { "aria-label": "Switch demo" } };
const Muicardcomponent = () => {
  // Active class for bookmarks
  const [activeElement, setActiveElement] = useState(0);

  const handleItemClick = (index) => {
    setActiveElement(index);
  };

  // React Code Block Starts
  const [language, changeLanguage] = useState("js");
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const cardCode = ` // To use mui chip import chip component from mui // 
    import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
    
    // React MUI component code// 
    export default function BasicCard() {
      return (

       
    
        <Card >
        <CardContent>

          <Typography variant="h5" component="div">
            Card
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Subject
          </Typography>
          <Typography variant="body2">
          Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum,
       
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"> More</Button>
        </CardActions>
      </Card>
  

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

  const card = {
    code: (
      <CopyBlock
        language={language}
        text={cardCode}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <div>
      <div className="content-header">
        <h1 className="heading"> Card </h1>

        <p className="text m-b-0">
          A card is a square or rectangular container that can contain any kind
          of content. Cards symbolize units of information, and each one acts as
          an entry point for users to access more details. Cards may also be
          used in data displays like card views, or for positioning content on a
          page.
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
                        url("https://freyadesignsystemurl/design/card.css");
                      </div>
                    </code>
                  </pre>
                </div>
              </section>
            </div>
          </div>

          <hr className="section-border-bottom"></hr>

          {/* Card Section Starts here */}
          <div className="row">
            <div className="col-12 ">
              <section>
                <h3 className="sub-heading">Card</h3>
                <p className="text">
                  Cards contain content and actions about a single subject.
                </p>
                <div className="collapsible-code">
                  <div className="row ">
                    <div className="col-12 m-t-20 m-l-20 m-b-20 m-r-20 ">
                      <Card>
                        <CardContent>
                          <Typography variant="h5" component="div">
                            Card
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Subject
                          </Typography>
                          <Typography variant="body2">
                            Lorem ipsum is typically a corrupted version of De
                            finibus bonorum et malorum,
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small"> More</Button>
                        </CardActions>
                      </Card>
                    </div>
                  </div>
                  <CollapsibleCode codeItem={card} />
                </div>
              </section>
            </div>
          </div>
          {/* Card Section Ends here */}

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
                    href="https://mui.com/material-ui/react-card/"
                    target="blank"
                  >
                    MUI Card
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

export default Muicardcomponent;
