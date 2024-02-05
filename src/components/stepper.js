import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CollapsibleCode from "./CodeBlockcode";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const stepalternative = [
  "Select master blaster campaign settings",
  "Create an ad group",
  "Create an ad",
];

//vertical step
const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
  },
];

export default function HorizontalLinearAlternativeLabelStepper() {
  //vertical step
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  // Active class for bookmarks
  const [activeElement, setActiveElement] = useState(0);

  const handleItemClick = (index) => {
    setActiveElement(index);
  };
  const items = ["Alternative Label", "Vertical Stepper"];

  // React Code Block Starts
  const [language, changeLanguage] = useState("js");
  const [lineNumbers, toggleLineNumbers] = useState(true);
  const exampleCodeBlock = `<Button variant="contained">Contained</Button>`;

  // Start Alternative Stepper
  const stepperalternative = ` // To use mui stepper import stepper component from mui
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
  
const stepalternative = [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
  ];
  
  //React MUI component code
  export default function HorizontalLinearAlternativeLabelStepper {
    return (
        <Stepper activeStep={1} alternativeLabel>
        {stepalternative.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    );
  }`;

  // Start Vertical Stepper
  const steppervertical = ` // To use mui stepper import stepper component from mui
  import Stepper from '@mui/material/Stepper';
  import Step from '@mui/material/Step';
  import StepLabel from '@mui/material/StepLabel';
  import StepContent from '@mui/material/StepContent';
  import Button from '@mui/material/Button';
  import Paper from '@mui/material/Paper';
  import Typography from '@mui/material/Typography';
    
  
    
    //React MUI component code
    export default function VerticalLinearStepper() {
        const [activeStep, setActiveStep] = React.useState(0);
      
        const handleNext = () => {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        };
      
        const handleBack = () => {
          setActiveStep((prevActiveStep) => prevActiveStep - 1);
        };
      
        const handleReset = () => {
          setActiveStep(0);
        };
      
        return (
          <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 2 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          {index === steps.length - 1 ? 'Finish' : 'Continue'}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>All steps completed - you&apos;re finished</Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
              </Paper>
            )}
      );
    }`;

  // React Code Block End here

  // Code for collapse Starts

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  // Code for collapse End here
  const stepper_alternative = {
    code: (
      <CopyBlock
        language={language}
        text={stepperalternative}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  // Code for collapse End here
  const stepper_vertical = {
    code: (
      <CopyBlock
        language={language}
        text={steppervertical}
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
        <h1 className="heading">Stepper</h1>
        <p className="text">
          Steppers convey progress through numbered steps. It provides a
          wizard-like workflow.
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
                        url("https://freyadesignsystemurl/design/stepper.css");
                      </div>
                    </code>
                  </pre>
                </div>
              </section>
            </div>
          </div>
          <hr className="section-border-bottom "></hr>

          <div className="row">
            <div className="col-12">
              <section id="Alternative Label">
                <h3 className="sub-heading"> Alternative label</h3>
                <p className="text">
                  Labels can be placed below the step icon by setting the
                  <code>alternativeLabel</code> prop on the Stepper component.
                </p>
                <div className="collapsible-code">
                  <div className="row">
                    <div className="col-12 col-12 m-t-30 m-l-20 m-b-30 m-r-20 ">
                      <Stepper activeStep={1} alternativeLabel>
                        {stepalternative.map((label) => (
                          <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                          </Step>
                        ))}
                      </Stepper>
                    </div>
                  </div>

                  <CollapsibleCode codeItem={stepper_alternative} />
                </div>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <section id="Vertical Stepper">
                <h3 className="sub-heading"> Vertical Stepper </h3>
                <p className="text">
                  <code>Vertical steppers</code> are designed for narrow screen
                  sizes. They are ideal for mobile. All the features of the
                  horizontal stepper can be implemented.
                </p>
                <div className="collapsible-code">
                  <div className="row">
                    <div className="col-12 col-12 m-t-30 m-l-20 m-b-30 m-r-20 ">
                      <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                          <Step key={step.label}>
                            <StepLabel
                              optional={
                                index === 2 ? (
                                  <Typography variant="caption">
                                    Last step
                                  </Typography>
                                ) : null
                              }
                            >
                              {step.label}
                            </StepLabel>
                            <StepContent>
                              <Typography>{step.description}</Typography>

                              <div>
                                <Button
                                  variant="contained"
                                  onClick={handleNext}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  {index === steps.length - 1
                                    ? "Finish"
                                    : "Continue"}
                                </Button>
                                <Button
                                  disabled={index === 0}
                                  onClick={handleBack}
                                  sx={{ mt: 1, mr: 1 }}
                                >
                                  Back
                                </Button>
                              </div>
                            </StepContent>
                          </Step>
                        ))}
                      </Stepper>
                      {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                          <Typography>
                            All steps completed - you&apos;re finished
                          </Typography>
                          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                            Reset
                          </Button>
                        </Paper>
                      )}
                    </div>
                  </div>

                  <CollapsibleCode codeItem={stepper_vertical} />
                </div>
              </section>
            </div>
          </div>
          <hr className="section-border-bottom"></hr>
          <div className="row">
            <div className="col-12  m-t-20">
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
                    href="https://mui.com/material-ui/react-stepper/"
                    target="blank"
                  >
                    MUI Stepper
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
}
