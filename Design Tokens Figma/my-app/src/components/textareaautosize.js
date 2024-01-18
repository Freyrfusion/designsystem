import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CollapsibleCode from "./CodeBlockcode";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

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
 const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  width: 320px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 2px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);

    return (
        <div className="content-area">

            <h1 className="heading"> Textarea Autosize</h1>
            <p className="text" > Use the minRows prop to define the minimum height of the component.</p>
            <div className="row">
                <div className="col-12">
            <section>
             
              <div className="collapsible-code">
                <div className="row m-t-10 m-l-10">
                  <div className="col-12 ">
                  <Textarea aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" />
                                 
                    
      
                  </div>
                </div>

                <CollapsibleCode codeItem={ basic_checkbox  } />
              </div>
              </section> </div> </div>

         
        </div>
    );
};

export default Textarea;