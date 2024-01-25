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
  const basiccheckboxes = `// To use mui texarea-autosize import texarea-autosize component from mui
  import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';

  //React MUI component code
  export default function MinHeightTextarea() {
    return (
  <Textarea aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" />
  );
}`;

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
      <p className="text m-b-0">
        Use the minRows prop to define the minimum height of the component.
      </p>

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
                    @import url("https://freyadesignsystemurl/design/form.css");
                  </div>
                </code>
              </pre>
            </div>
          </section>
        </div>
      </div>
      <hr className="section-border-bottom"></hr>

      <div className="row ">
        <div className="col-12 m-t-30">
          <section className="">
            <div className="collapsible-code">
              <div className="row m-t-20 m-l-10">
                <div className="col-12">
                  <span className="label_text">Label</span>
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
          </section>
        </div>
      </div>
      <hr className="section-border-bottom"></hr>
      <div className="row">
        <div className="col-12 m-t-10">
          <h3 className="sub-heading">React Material UI Component Library</h3>
          <p className="text">
            For more information, you may refer MUI component page by clicking
            below link.
          </p>

          <div className="notification-main">
            <div className="notification-content">
              <a
                href="https://mui.com/base-ui/react-textarea-autosize/"
                target="blank"
              >
                MUI Textarea-autosize
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Textarea;
