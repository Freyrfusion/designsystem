import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CollapsibleCode from "./CodeBlockcode";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Checkboxes() {
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
  const basiccheckboxes = `// To use mui buttons import button component from mui
 

//React MUI component code

<Checkbox {...label} defaultChecked />
 <Checkbox {...label} />
 <Checkbox {...label} disabled />
 <Checkbox {...label} disabled checked />`;

  const labelcheckboxes = `// To use mui checkbox import checkbox component from mui
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

//React MUI component code
export default function CheckboxLabels() {
  return (
    <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    <FormControlLabel required control={<Checkbox />} label="Required" />
    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
 );
}`;

  // Radio Checkboxes
  const radiobuttons = `// To use mui radio import radio component from mui
 import Radio from '@mui/material/Radio';
 import RadioGroup from '@mui/material/RadioGroup';
 import FormControlLabel from '@mui/material/FormControlLabel';
 import FormControl from '@mui/material/FormControl';
 import FormLabel from '@mui/material/FormLabel';
 
 //React MUI component code
 export default function RadioButtonsGroup() {
 return (
  <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">Regulatory Answer</FormLabel>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="Yes" name="radio-buttons-group">
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  </FormControl>
);
}`;

  const directionradiobuttons = `<FormControl>
<FormLabel id="demo-row-radio-buttons-group-label">Regulatory Answer</FormLabel>
<RadioGroup row
  aria-labelledby="demo-row-radio-buttons-group-label"
  name="row-radio-buttons-group">
  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
  <FormControlLabel value="No" control={<Radio />} label="No" />
  <FormControlLabel value="other" control={<Radio />} label="Other" />
  <FormControlLabel
    value="disabled"
    disabled
    control={<Radio />}
    label="other" />
</RadioGroup>
</FormControl>`;

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
  const label_checkbox = {
    code: (
      <CopyBlock
        language={language}
        text={labelcheckboxes}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  // radio buttons
  const label_radiobuttions = {
    code: (
      <CopyBlock
        language={language}
        text={radiobuttons}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  const direction_radiobuttions = {
    code: (
      <CopyBlock
        language={language}
        text={directionradiobuttons}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };
  return (
    <div className="content-area">
      <h2 className="m-l-26"> Checkbox field </h2>
      <p className="sub-text m-b-0">
        Use a checkbox or radio component when you want to let people choose
        from a small number of predefined options.
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
                    url("https://freyadesignsystemurl/design/checkbox.css");
                  </div>
                </code>
              </pre>
            </div>
          </section>
        </div>
      </div>
      <hr className="section-border-bottom"></hr>
      <div className="row">
        <div className="col-12 ">
          <section>
            <h3 className="sub-heading">Radio Buttons </h3>
            <p className="text">
              The <code> Radio</code> Group allows the user to select one option
              from a set.
            </p>
            <div className="collapsible-code">
              <div className="row">
                <div className="col-12 m-t-20 m-l-25 m-b-20">
                  <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">
                      Regulatory Answer
                    </FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="Yes"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>

              <CollapsibleCode codeItem={label_radiobuttions} />
            </div>{" "}
          </section>{" "}
        </div>{" "}
      </div>

      {/* <div className="row">
                <div className="col-12">
              <section>
       <h3 className="sub-heading">Direction </h3>
              <p className="text">
              To lay out the buttons horizontally, set the row prop:
              </p>
              <div className="collapsible-code">
                <div className="row">
                  <div className="col-12 m-t-20 m-l-25 m-b-20">
                  
                                 
                  <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Regulatory Answer</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>
                  </div>
                </div>

                <CollapsibleCode codeItem={ direction_radiobuttions } />
              </div> </section>

              </div> </div> */}
      {/* <div className="row">
        <div className="col-12">
          <section>
            <h3 className="sub-heading">Basic Checkboxes </h3>
            <p className="text">
              The <code>Checkboxes</code> allow the user to select one or more
              items from a set.
            </p>
            <div className="collapsible-code">
              <div className="row">
                <div className="col-12 m-t-10 m-l-15 m-b-10">
                  <Checkbox {...label} defaultChecked />
                  <Checkbox {...label} />
                  <Checkbox {...label} disabled />
                  <Checkbox {...label} disabled checked />
                </div>
              </div>

              <CollapsibleCode codeItem={basic_checkbox} />
            </div>
          </section>{" "}
        </div>{" "}
      </div> */}
      <div className="row">
        <div className="col-12">
          <section>
            <h3 className="sub-heading">Label Checkboxes</h3>
            <p className="text">
              You can provide a label to the <code>Checkbox</code> thanks to the
              FormControlLabel component.
            </p>
            <div className="collapsible-code">
              <div className="row">
                <div className="col-12 m-t-10 m-l-25 m-b-10">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Label"
                    />
                    <FormControlLabel
                      required
                      control={<Checkbox />}
                      label="Required"
                    />
                    <FormControlLabel
                      disabled
                      control={<Checkbox />}
                      label="Disabled"
                    />
                  </FormGroup>
                </div>
              </div>

              <CollapsibleCode codeItem={label_checkbox} />
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
                href="https://mui.com/material-ui/react-radio-button/"
                target="blank"
              >
                MUI Radio
              </a>{" "}
              <br></br>
              <a
                href="https://mui.com/material-ui/react-checkbox/"
                target="blank"
              >
                MUI Checkbox
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
