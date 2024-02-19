import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CollapsibleCode from "./CodeBlockcode";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function ComboBox() {
  const fixedOptions = [];
  const [value, setValue] = React.useState([...fixedOptions, top100Films[3]]);

  // Active class for bookmarks
  const [activeElement, setActiveElement] = useState(0);

  const handleItemClick = (index) => {
    setActiveElement(index);
  };
  const items = ["Combo box", "Multiple values"];

  // React Code Block Starts
  const [language, changeLanguage] = useState("js");
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const exampleCodeBlock = `<Button variant="contained">Contained</Button>`;

  // Start combobox
  const autocompletedfield = `// To use mui autocomplete import autocomplete component from mui
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

//React MUI component code
export default function ComboBox() {
  return (
      <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={top100Films} 
    renderInput={(params) => <TextField {...params} label="Label" />}
    />
);
}`;

  // Start combobox
  const muilineautocomplete = `// To use mui multiple values import multiple values component from mui
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

  //React MUI component code
  export default function FixedTags() {
    const fixedOptions = [top100Films[6]];
    const [value, setValue] = React.useState([...fixedOptions, top100Films[13]]);
  <Autocomplete
    multiple
    id="fixed-tags-demo"
    value={value}
    onChange={(event, newValue) => {
      setValue([
        ...fixedOptions,
        ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
  ]);
}}
    options={top100Films}
    getOptionLabel={(option) => option.title}
    renderTags={(tagValue, getTagProps) =>
      tagValue.map((option, index) => (
        <Chip
          label={option.title}
          {...getTagProps({ index })}
          disabled={fixedOptions.indexOf(option) !== -1}
        />
      ))
    }

renderInput={(params) => (
  <TextField {...params} label="Fixed tag" placeholder="Select" />
)}
/> );
}`;

  // React Code Block End here

  // Code for collapse Starts

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  // Code for collapse End here
  const autocompleted_field = {
    code: (
      <CopyBlock
        language={language}
        text={autocompletedfield}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  // Code for collapse End here
  const muilineauto_complete = {
    code: (
      <CopyBlock
        language={language}
        text={muilineautocomplete}
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
        <h1> Autocomplete </h1>
        <p>
          The autocomplete is a normal text input enhanced by a panel of
          suggested options.
        </p>
      </div>
      <div className="content-wrapper">
        <div className="content-area">
          <div className="row">
            <div className="col-12">
              <section>
                <h3 className="sub-heading ">Component Usage </h3>
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

          <div className="row" id="Combo box">
            <div className="col-12  ">
              <section>
                <h3 className="sub-heading">Combo box</h3>
                <p className="text">
                  The <code>combo box’s </code> operation is quite different,
                  since it is a combination of a text input and a dropdown.
                  Enter or the Up or Down arrow keys will open the list of
                  options, as will typing any character or string of characters.
                </p>
                <div className="collapsible-code">
                  <div className="row">
                    <div className="col-6 m-t-20 m-b-20 m-l-20 m-r-20">
                      <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={top200Films}
                        renderInput={(params) => (
                          <TextField {...params} label="Label" />
                        )}
                      />
                    </div>
                  </div>

                  <CollapsibleCode codeItem={autocompleted_field} />
                </div>
              </section>{" "}
            </div>{" "}
          </div>

          <div className="row" id="Multiple values">
            <div className="col-12">
              <section>
                <h3 className="sub-heading">Multiple values</h3>
                <p className="text">
                  Also known as tags, the user is allowed to enter more than one
                  value.
                </p>
                <div className="collapsible-code">
                  <div className="row">
                    <div className="col-6 m-t-20 m-b-20 m-l-20 m-r-20">
                      <Autocomplete
                        multiple
                        id="fixed-tags-demo"
                        className="autocomplete-custom"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue([
                            ...fixedOptions,
                            ...newValue.filter(
                              (option) => fixedOptions.indexOf(option) === -1
                            ),
                          ]);
                        }}
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        renderTags={(tagValue, getTagProps) =>
                          tagValue.map((option, index) => (
                            <Chip
                              label={option.title}
                              {...getTagProps({ index })}
                              disabled={fixedOptions.indexOf(option) !== -1}
                            />
                          ))
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Label"
                            placeholder="Type and Press Here"
                          />
                        )}
                      />
                    </div>
                  </div>

                  <CollapsibleCode codeItem={muilineauto_complete} />
                </div>
              </section>
            </div>
          </div>
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
                    href="https://mui.com/material-ui/react-autocomplete/"
                    target="blank"
                  >
                    MUI Autocomplete
                  </a>{" "}
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bookmark-navigator">
          <h6> CONTENTS </h6>
          {/* <ul>
          <li><a href="#default">Default</a></li>
          <li><a href="#primary">Primary</a></li>
          <li><a href="#outlined">Outlined</a></li>
          <li><a href="#linkbutton">Link Button</a></li>
        </ul> */}
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
        <div className="bookmark-navigator">
          <h6> CONTENTS </h6>
          {/* <ul>
          <li><a href="#default">Default</a></li>
          <li><a href="#primary">Primary</a></li>
          <li><a href="#outlined">Outlined</a></li>
          <li><a href="#linkbutton">Link Button</a></li>
        </ul> */}
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
      </div>
    </div>
  );
}
const top200Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];
