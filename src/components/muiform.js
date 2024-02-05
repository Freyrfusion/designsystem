import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CollapsibleCode from "./CodeBlockcode";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";

const Muiform = () => {
  // Active class for bookmarks
  const [activeElement, setActiveElement] = useState(0);

  const handleItemClick = (index) => {
    setActiveElement(index);
  };
  const items = ["Text Field", "Multiline", "Select", "Validation"];

  // React Code Block Starts
  const [language, changeLanguage] = useState("js");
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const exampleCodeBlock = `<Button variant="contained">Contained</Button>`;

  // Start textbox
  const inputfield = `// To use mui textfield import textfield component from mui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//React MUI component code
export default function BasicTextFields() {
  return (
    <Box>
     <TextField  label="Label"  helperText="Helper text" required />
    </Box>
  );
}`;

  // Start Multiline
  const multilinefield = `// To use mui textfield import textfield component from mui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
  
//React MUI component code
export default function BasicTextFields() {
    return (
      <Box component="form" noValidate autoComplete="off">
       <div>
          <TextField id="outlined-multiline-static" label="Label" multiline rows={3} />  
       </div>
     </Box>
);
}`;

  // Start Dropdown
  const dropdownfield = `// To use mui dropdown import dropdown component from mui
  import Box from '@mui/material/Box';
  import TextField from '@mui/material/TextField';
  import MenuItem from '@mui/material/MenuItem';
  
  //React MUI component code
  export default function SelectTextFields() {
    return (
  <Box component="form" noValidate autoComplete="off">
   <div>
  <TextField id="outlined-select-currency"
    select  label="Select" defaultValue="Select"  helperText="Helper text">
    {currencies.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField> 
   </div>
</Box> 
);
}`;

  // Start input-validations
  const inputvalidations = `// To use mui input-validation import input-validation component from mui
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel'

//React MUI component code
export default function BasicTextFields() {
  return (
     <FormControl error variant="standard">
        <InputLabel htmlFor="component-error">Label</InputLabel>
        <Input
          id="component-error"
          aria-describedby="component-error-text"
        />
        <FormHelperText id="component-error-text" className="m-t-5">
                      <em className="icon-signs"></em> Validation Error Message
                    </FormHelperText>
      </FormControl>
    
      <FormControl color="success" variant="standard">
        <InputLabel htmlFor="component-error">Label</InputLabel>
        <Input
          id="component-success"
          aria-describedby="component-success-text"
        />
        <FormHelperText id="component-success-text">
                      <em className="icon-check-mark"></em> Validation Success
                      Message
                    </FormHelperText>
      </FormControl>
     
      <FormControl color="warning" variant="standard">
        <InputLabel htmlFor="component-error">Label</InputLabel>
        <Input
          id="component-warning"
          aria-describedby="component-warning-text"
        />
        <FormHelperText id="component-warning-text">
        <em className="icon-signs"></em> Validation Warning
        Message
      </FormHelperText>
      </FormControl>
    
  );
}`;
  // React Code Block End here

  // Code for collapse Starts

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  // Code for collapse End here
  const input_validations = {
    code: (
      <CopyBlock
        language={language}
        text={inputvalidations}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  // Code for collapse End here
  const input_field = {
    code: (
      <CopyBlock
        language={language}
        text={inputfield}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  const multiline_field = {
    code: (
      <CopyBlock
        language={language}
        text={multilinefield}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  //Start Dropdown
  const dropdown_field = {
    code: (
      <CopyBlock
        language={language}
        text={dropdownfield}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };
  const currencies = [
    {
      value: "USD",
      label: "item1",
    },
    {
      value: "EUR",
      label: "item2",
    },
    {
      value: "BTC",
      label: "item3",
    },
  ];
  //End Dropdown

  return (
    <div>
      <div className="content-header">
        <h1 className="heading">Form</h1>
        <p className="text">
          A form is a group of related input controls that allows users to
          provide data or configure options.
        </p>
      </div>
      <div className=" content-wrapper">
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
                        url("https://freyadesignsystemurl/design/form.css");
                      </div>
                    </code>
                  </pre>
                </div>
              </section>
            </div>
          </div>
          <hr className="section-border-bottom "></hr>

          <div className="row" id="Text Field">
            <div className="col-12">
              <section>
                <h3 className="sub-heading">Text input </h3>
                <p className="text">
                  A <code> text input</code> is used to gather free-form text
                  from a user.
                </p>
                <div className="collapsible-code">
                  <div className="row">
                    <div className="col-12 m-t-20 m-l-25">
                      <Box>
                        <TextField
                          label="Label"
                          helperText="Helper text"
                          required
                        />
                      </Box>
                    </div>
                  </div>

                  <CollapsibleCode codeItem={input_field} />
                </div>
              </section>{" "}
            </div>{" "}
          </div>

          <div className="row" id="Multiline">
            <div className="col-12">
              <section>
                <h3 className="sub-heading">Multiline </h3>
                <p className="text">
                  The <code>multiline</code> prop transforms the text field into
                  a TextareaAutosize element.
                </p>
                <div className="collapsible-code">
                  <div className="row">
                    <div className="col-12 m-t-20 m-l-25 m-b-20">
                      <Box component="form" noValidate autoComplete="off">
                        <div>
                          <TextField
                            id="outlined-multiline-static"
                            label="Label"
                            multiline
                            rows={3}
                          />{" "}
                        </div>
                      </Box>
                    </div>
                  </div>

                  <CollapsibleCode codeItem={multiline_field} />
                </div>
              </section>{" "}
            </div>{" "}
          </div>

          <div className="row" id="Select">
            <div className="col-12">
              <section>
                <h3 className="sub-heading">Select </h3>
                <p className="text">
                  The <code>Dropdown</code> present a list of options from which
                  a user can select one option, or several. A selected option
                  can represent a value in a form.
                </p>
                <div className="collapsible-code">
                  <div className="row">
                    <div className="col-12 m-t-20 m-l-25">
                      <Box component="form" noValidate autoComplete="off">
                        <div>
                          <TextField
                            id="outlined-select-currency"
                            select
                            label="Label"
                            defaultValue="Select"
                            helperText="Helper text"
                          >
                            {currencies.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>{" "}
                        </div>
                      </Box>
                    </div>
                  </div>

                  <CollapsibleCode codeItem={dropdown_field} />
                </div>
              </section>{" "}
            </div>{" "}
          </div>

          <div className="row" id="Validation">
            <div className="col-12">
              <section>
                <h3 className="sub-heading">Validation</h3>
                <p className="text">
                  The value to indicate if the text input is modified to show
                  that <code>validation</code> state. If set to success, text
                  input will be modified to indicate valid state. If set to
                  error, text input will be modified to indicate error state.
                </p>
                <div className="collapsible-code">
                  <div className="row">
                    <div className="col-12 m-t-20 m-l-25">
                      <FormControl error variant="standard">
                        <InputLabel htmlFor="component-error">Label</InputLabel>
                        <Input
                          id="component-error"
                          aria-describedby="component-error-text"
                        />
                        <FormHelperText
                          id="component-error-text"
                          className="m-t-5"
                        >
                          <em className="icon-signs"></em> Validation Error
                          Message
                        </FormHelperText>
                      </FormControl>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 m-t-20 m-l-25">
                      <FormControl color="success" variant="standard">
                        <InputLabel htmlFor="component-error">Label</InputLabel>
                        <Input
                          id="component-success"
                          aria-describedby="component-success-text"
                        />
                        <FormHelperText id="component-success-text">
                          <em className="icon-check-mark"></em> Validation
                          Success Message
                        </FormHelperText>
                      </FormControl>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 m-t-20 m-l-25">
                      <FormControl color="warning" variant="standard">
                        <InputLabel htmlFor="component-error">Label</InputLabel>
                        <Input
                          id="component-warning"
                          aria-describedby="component-warning-text"
                        />
                        <FormHelperText id="component-warning-text">
                          <em className="icon-signs"></em> Validation Warning
                          Message
                        </FormHelperText>
                      </FormControl>
                    </div>
                  </div>
                  <CollapsibleCode codeItem={input_validations} />
                </div>
              </section>{" "}
            </div>{" "}
          </div>
          <hr className="section-border-bottom"></hr>
          <div className="row">
            <div className="col-12  m-t-20">
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
                    href="https://mui.com/material-ui/react-text-field/"
                    target="blank"
                  >
                    MUI Form Fields
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bookmark-navigator">
          <h6> CONTENTS </h6>

          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => handleItemClick(index)}
                className={activeElement === index ? "active" : ""}
              >
                <a href={"#" + item}> {item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>{" "}
    </div>
  );
};

export default Muiform;
