import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CollapsibleCode from "./CodeBlockcode";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Textarea = () => {
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

  // Start Checkboxes
  const datepicker = `// To use mui Datepicker import texarea-autosize component from mui
  import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
  import { DatePicker } from "@mui/x-date-pickers/DatePicker";
  
    //React MUI component code
    export default function MinHeightTextarea() {
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="Basic date picker" />
        </DemoContainer>
      </LocalizationProvider>
    );
  }`;

  // React Code Block End here

  // Code for collapse Starts

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  // Code for collapse End here
  const mui_datepicker = {
    code: (
      <CopyBlock
        language={language}
        text={datepicker}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  return (
    <div>
      <div className="content-header">
        <h1 className="heading"> Date Picker</h1>
        <p className="text m-b-0">
          The Date Picker component lets users select a date.
        </p>
      </div>
      <div className="content-wrapper">
        <div className="content-area">
          <div className="row">
            <div className="col-12 ">
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
                        url("https://freyadesignsystemurl/design/form.css");
                      </div>
                    </code>
                  </pre>
                </div>
              </section>
            </div>
          </div>
          <hr className="section-border-bottom"></hr>

          <div className="row ">
            <div className="col-12">
              <section className="">
                <div className="collapsible-code">
                  <div className="row m-t-10 m-b-10 m-l-20">
                    <div className="col-10 no-scroll">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker label="Select date" />
                        </DemoContainer>
                      </LocalizationProvider>
                    </div>
                  </div>

                  <CollapsibleCode codeItem={mui_datepicker} />
                </div>
              </section>
            </div>
          </div>

          <hr className="section-border-bottom"></hr>
          <div className="row">
            <div className="col-12 m-t-10">
              <h3 className="sub-heading">
                React Material UI Component Library
              </h3>
              <p className="text">
                For more information, you may refer MUI component page by
                clicking below link.
              </p>

              <div className="notification-main">
                <div className="notification-content">
                  <a
                    href="https://mui.com/x/react-date-pickers/date-picker/"
                    target="blank"
                  >
                    MUI Date Picker
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

export default Textarea;
