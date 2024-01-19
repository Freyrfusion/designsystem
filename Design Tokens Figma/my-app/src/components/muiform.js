import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CollapsibleCode from "./CodeBlockcode";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


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

 // Start textbox
 const inputfield = `<Box>
 <TextField  label="Label"  helperText="Some important text" required />
</Box>`;

// Start Multiline
 const multilinefield = `<Box component="form" noValidate autoComplete="off" >
 <div>
<TextField
id="outlined-multiline-static"
label="Multiline"
multiline
rows={3} />  </div>
</Box>`;
 

// Start Dropdown
const dropdownfield = ` <Box component="form" noValidate autoComplete="off">
<div>
  <TextField
    id="outlined-select-currency"
    select
    label="Select"
    defaultValue="Select"
    helperText="Please select items">
    {currencies.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>  </div>
</Box>`;
 // React Code Block End here

 // Code for collapse Starts

 const [isCollapsed, setIsCollapsed] = useState(false);

 const toggleCollapse = () => {
   setIsCollapsed(!isCollapsed);
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
    value: 'USD',
    label: 'item1',
  },
  {
    value: 'EUR',
    label: 'item2',
  },
  {
    value: 'BTC',
    label: 'item3',
  },
];
//End Dropdown


    return (
        <div className="content-area">

            <h1 className="heading"> We are preparing Form</h1>
            <p className="text" > Allowing users to input data and interact with a website.</p>
            <div className="row">
                <div className="col-12">
            <section>
              <h3 className="sub-heading">Text Field </h3>
              <p className="text">
                The <code>Text Fields</code>   let users enter and edit text.
              </p>
              <div className="collapsible-code">
                <div className="row">
                  <div className="col-12 m-t-20 m-l-25">
                  <Box>
        <TextField  label="Label"  helperText="Some important text" required />
    </Box>
                                 
                    
      
                  </div>
                </div>

                <CollapsibleCode codeItem={input_field } />
              </div>
              </section> </div> </div>

              <div className="row">
                <div className="col-12">
            <section>
              <h3 className="sub-heading">Multiline </h3>
              <p className="text">
              The <code>multiline</code>  prop transforms the text field into a TextareaAutosize element.
              </p>
              <div className="collapsible-code">
                <div className="row">
                  <div className="col-12 m-t-20 m-l-25 m-b-20">
                 <Box component="form" noValidate autoComplete="off" >
             <div>
            <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={3} />  </div>
        </Box>
                                 
                    

                  </div>
                </div>

                <CollapsibleCode codeItem={multiline_field } />
              </div>
              </section> </div> </div>

              <div className="row">
                <div className="col-12">
            <section>
              <h3 className="sub-heading">Select </h3>
              <p className="text">
              The <code>select</code> prop makes the text field use the Select component internally.
              </p>
              <div className="collapsible-code">
                <div className="row">
                  <div className="col-12 m-t-20 m-l-25">
                <Box
      component="form"
      
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="Select"
          helperText="Please select items">
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>  </div>
    </Box>
                        
                    

                  </div>
                </div>

                <CollapsibleCode codeItem={dropdown_field } />
              </div>
              </section> </div> </div>

               

         
        </div>
    );
};

export default Muiform;