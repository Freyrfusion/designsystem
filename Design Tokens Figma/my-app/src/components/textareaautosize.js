import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CollapsibleCode from "./CodeBlockcode";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";

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
  const basiccheckboxes = ` <Textarea aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" />`;

  // React Code Block End here

  // Code for collapse Starts

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  // Code for collapse End here
  const basic_checkbox = {
    code: (
      <CopyBlock
        language={language}
        text={basiccheckboxes}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  return (
    <div className="content-area">
      <h1 className="heading"> Textarea Autosize</h1>
      <p className="text">
        {" "}
        Use the minRows prop to define the minimum height of the component.
      </p>
      <div className="row">
        <div className="col-12">
          <section>
            <div className="collapsible-code">
              <div className="row m-t-10 m-l-10">
                <div className="col-12">
                  <BaseTextareaAutosize
                    aria-label="minimum height"
                    className="textarea-custom"
                    minRows={3}
                    placeholder="Minimum 3 rows"
                  />
                </div>
              </div>

              <CollapsibleCode codeItem={basic_checkbox} />
            </div>
          </section>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Textarea;
