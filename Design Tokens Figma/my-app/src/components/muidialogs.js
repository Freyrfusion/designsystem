import React, { useEffect, useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import CollapsibleCode from "./CodeBlockcode";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Muidialogs = () => {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

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

  // Start small dialog
  const smalldialog = `// To use mui dialog import dialog component from mui
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

//React MUI component code
  export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
  <Button variant="outlined" onClick={handleClickOpen1}>
  Open Small Dialog
</Button>
<Dialog
  maxWidth="sm"
  fullWidth="sm"
  open={open1}
  onClose={handleClose1}>
  <DialogTitle>
    <h5> Dialog</h5>
    <button className="close">
      <em className="icon-close-round"> </em>
    </button>
  </DialogTitle>
  <DialogContent>
    <DialogContentText>
      You can set my maximum width and whether to adapt or
      not.
    </DialogContentText>
  </DialogContent>
  <DialogActions>
                      <Button variant="contained" color="secondary">
                        Cancel
                      </Button>
                      <Button variant="contained">Save</Button>
                    </DialogActions>
</Dialog>
);
}`;

  // Start medium dialog
  const mediumdialog = `// To use mui dialog import dialog component from mui
  import Button from "@mui/material/Button";
  import Dialog from "@mui/material/Dialog";
  import DialogActions from "@mui/material/DialogActions";
  import DialogContent from "@mui/material/DialogContent";
  import DialogContentText from "@mui/material/DialogContentText";
  import DialogTitle from "@mui/material/DialogTitle";
  
  //React MUI component code
    export default function MaxWidthDialog() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleMaxWidthChange = (event) => {
      setMaxWidth(
        // @ts-expect-error autofill of arbitrary value is not handled.
        event.target.value,
      );
    };
  
    const handleFullWidthChange = (event) => {
      setFullWidth(event.target.checked);
    };
  
    return (
      <Button variant="outlined" onClick={handleClickOpen2}>
  Open Medium Dialog
</Button>
<Dialog
  maxWidth="md"
  fullWidth="md"
  open={open2}
  onClose={handleClose2}
>
  <DialogTitle>
    <h5> Dialog</h5>
    <button className="close">
      <em className="icon-close-round"> </em>
    </button>
  </DialogTitle>
  <DialogContent>
    <DialogContentText>
      <p>
        Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap
        into electronic typesetting, remaining essentially
        unchanged. It was popularised in the 1960s with the
        release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing
        software like Aldus PageMaker including versions of
        Lorem Ipsum.
      </p>
      <p>
        Why do we use it? It is a long established fact that a
        reader will be distracted by the readable content of a
        page when looking at its layout. The point of using
        Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content
        here, content here', making it look like readable
        English. Many desktop publishing packages and web page
        editors now use Lorem Ipsum as their default model
        text, and a search for 'lorem ipsum' will uncover many
        web sites still in their infancy. Various versions
        have evolved over the years, sometimes by accident,
        sometimes on purpose (injected humour and the like).
      </p>
      <p>
        Where does it come from? Contrary to popular belief,
        Lorem Ipsum is not simply random text. It has roots in
        a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a
        Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words,
        consectetur, from a Lorem Ipsum passage, and going
        through the cites of the word in classical literature,
        discovered the undoubtable source. Lorem Ipsum comes
        from sections 1.10.32 and 1.10.33
      </p>
      <p>
        Where does it come from? Contrary to popular belief,
        Lorem Ipsum is not simply random text. It has roots in
        a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a
        Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words,
        consectetur, from a Lorem Ipsum passage, and going
        through the cites of the word in classical literature,
        discovered the undoubtable source. Lorem Ipsum comes
        from sections 1.10.32 and 1.10.33
      </p>{" "}
      <p>
        Where does it come from? Contrary to popular belief,
        Lorem Ipsum is not simply random text. It has roots in
        a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a
        Latin professor at Hampden-Sydney College in Virginia,
        looked up one of the more obscure Latin words,
        consectetur, from a Lorem Ipsum passage, and going
        through the cites of the word in classical literature,
        discovered the undoubtable source. Lorem Ipsum comes
        from sections 1.10.32 and 1.10.33
      </p>
    </DialogContentText>
  </DialogContent>
  <DialogActions>
  <Button variant="contained" color="secondary">
    Cancel
  </Button>
  <Button variant="contained">Save</Button>
</DialogActions>
</Dialog>
);
}`;

  // Start large dialog
  const largedialog = `// To use mui dialog import dialog component from mui
  import Button from "@mui/material/Button";
  import Dialog from "@mui/material/Dialog";
  import DialogActions from "@mui/material/DialogActions";
  import DialogContent from "@mui/material/DialogContent";
  import DialogContentText from "@mui/material/DialogContentText";
  import DialogTitle from "@mui/material/DialogTitle";
  
  //React MUI component code
    export default function MaxWidthDialog() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleMaxWidthChange = (event) => {
      setMaxWidth(
        // @ts-expect-error autofill of arbitrary value is not handled.
        event.target.value,
      );
    };
  
    const handleFullWidthChange = (event) => {
      setFullWidth(event.target.checked);
    };
  
    return (
       <Button variant="outlined" onClick={handleClickOpen}>
 Open Large Dialog
</Button>
<Dialog
 maxWidth="lg"
 fullWidth="lg"
 open={open}
 onClose={handleClose}
>
 <DialogTitle>
   <h5> Dialog</h5>
   <button className="close">
     <em className="icon-close-round"> </em>
   </button>
 </DialogTitle>
 <DialogContent>
   <DialogContentText>
     You can set my maximum width and whether to adapt or
     not.
   </DialogContentText>
 </DialogContent>
 <DialogActions>
                      <Button variant="contained" color="secondary">
                        Cancel
                      </Button>
                      <Button variant="contained">Save</Button>
                    </DialogActions>
</Dialog>
);
}`;

  // Start large dialog
  const fullscreendialog = `// To use mui dialog import dialog component from mui
  import Button from "@mui/material/Button";
  import Dialog from "@mui/material/Dialog";
  import DialogActions from "@mui/material/DialogActions";
  import DialogContent from "@mui/material/DialogContent";
  import DialogContentText from "@mui/material/DialogContentText";
  import DialogTitle from "@mui/material/DialogTitle";
  
  //React MUI component code
    export default function MaxWidthDialog() {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleMaxWidthChange = (event) => {
      setMaxWidth(
        // @ts-expect-error autofill of arbitrary value is not handled.
        event.target.value,
      );
    };
  
    const handleFullWidthChange = (event) => {
      setFullWidth(event.target.checked);
    };
  
    return (
    <Button variant="outlined" onClick={handleClickOpen3}>
  Open Full-screen dialogs
</Button>
<Dialog fullScreen open={open3} onClose={handleClose3}>
  <DialogTitle>
    <h5> Dialog</h5>
    <button className="close">
      <em className="icon-close-round"> </em>
    </button>
  </DialogTitle>
  <DialogContent>
    <DialogContentText>
      You can set my maximum width and whether to adapt or
      not.
    </DialogContentText>
  </DialogContent>
  <DialogActions>
                      <Button variant="contained" color="secondary">
                        Cancel
                      </Button>
                      <Button variant="contained">Save</Button>
                    </DialogActions>
</Dialog>
);
}`;

  // React Code Block End here

  // Code for collapse Starts

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  // Code for collapse End here
  const small_dialog = {
    code: (
      <CopyBlock
        language={language}
        text={smalldialog}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  const medium_dialog = {
    code: (
      <CopyBlock
        language={language}
        text={mediumdialog}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  const large_dialog = {
    code: (
      <CopyBlock
        language={language}
        text={largedialog}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  const fullscreen_dialog = {
    code: (
      <CopyBlock
        language={language}
        text={fullscreendialog}
        showLineNumbers={lineNumbers}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
    ),
  };

  return (
    <div className="content-area">
      <h1 className="heading"> Dialog</h1>
      <p className="text m-b-0">
        Dialogs inform users about a task and can contain critical information,
        require decisions, or involve multiple tasks.
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
                    url("https://freyadesignsystemurl/design/dialog.css");
                  </div>
                </code>
              </pre>
            </div>
          </section>
        </div>
      </div>
      <hr className="section-border-bottom"></hr>

      <div className="row">
        <div className="col-12">
          <section>
            <h3 className="sub-heading"> Small Dialog</h3>
            <p className="text">
              The <code>Dialog</code>
            </p>
            <div className="collapsible-code">
              <div className="row m-t-10 m-l-10">
                <div className="col-12 ">
                  <Button variant="contained" onClick={handleClickOpen1}>
                    Open Small Dialog
                  </Button>
                  <Dialog
                    maxWidth="sm"
                    fullWidth="sm"
                    open={open1}
                    onClose={handleClose1}
                  >
                    <DialogTitle>
                      <h5> Dialog</h5>
                      <button className="close">
                        <em className="icon-close-round"> </em>
                      </button>
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        You can set my maximum width and whether to adapt or
                        not.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button variant="contained" color="secondary">
                        Cancel
                      </Button>
                      <Button variant="contained">Save</Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>

              <CollapsibleCode codeItem={small_dialog} />
            </div>
          </section>{" "}
        </div>{" "}
      </div>
      <div className="row">
        <div className="col-12">
          <section>
            <h3 className="sub-heading">Medium dialog</h3>
            <p className="text">
              The <code>Dialog</code>
            </p>

            <div className="collapsible-code">
              <div className="row m-t-10 m-l-10">
                <div className="col-12 ">
                  <Button variant="contained" onClick={handleClickOpen2}>
                    Open Medium Dialog
                  </Button>
                  <Dialog
                    maxWidth="md"
                    fullWidth="md"
                    open={open2}
                    onClose={handleClose2}
                  >
                    <DialogTitle>
                      <h5> Dialog</h5>
                      <button className="close">
                        <em className="icon-close-round"> </em>
                      </button>
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                        <p>
                          Why do we use it? It is a long established fact that a
                          reader will be distracted by the readable content of a
                          page when looking at its layout. The point of using
                          Lorem Ipsum is that it has a more-or-less normal
                          distribution of letters, as opposed to using 'Content
                          here, content here', making it look like readable
                          English. Many desktop publishing packages and web page
                          editors now use Lorem Ipsum as their default model
                          text, and a search for 'lorem ipsum' will uncover many
                          web sites still in their infancy. Various versions
                          have evolved over the years, sometimes by accident,
                          sometimes on purpose (injected humour and the like).
                        </p>
                        <p>
                          Where does it come from? Contrary to popular belief,
                          Lorem Ipsum is not simply random text. It has roots in
                          a piece of classical Latin literature from 45 BC,
                          making it over 2000 years old. Richard McClintock, a
                          Latin professor at Hampden-Sydney College in Virginia,
                          looked up one of the more obscure Latin words,
                          consectetur, from a Lorem Ipsum passage, and going
                          through the cites of the word in classical literature,
                          discovered the undoubtable source. Lorem Ipsum comes
                          from sections 1.10.32 and 1.10.33
                        </p>
                        <p>
                          Where does it come from? Contrary to popular belief,
                          Lorem Ipsum is not simply random text. It has roots in
                          a piece of classical Latin literature from 45 BC,
                          making it over 2000 years old. Richard McClintock, a
                          Latin professor at Hampden-Sydney College in Virginia,
                          looked up one of the more obscure Latin words,
                          consectetur, from a Lorem Ipsum passage, and going
                          through the cites of the word in classical literature,
                          discovered the undoubtable source. Lorem Ipsum comes
                          from sections 1.10.32 and 1.10.33
                        </p>{" "}
                        <p>
                          Where does it come from? Contrary to popular belief,
                          Lorem Ipsum is not simply random text. It has roots in
                          a piece of classical Latin literature from 45 BC,
                          making it over 2000 years old. Richard McClintock, a
                          Latin professor at Hampden-Sydney College in Virginia,
                          looked up one of the more obscure Latin words,
                          consectetur, from a Lorem Ipsum passage, and going
                          through the cites of the word in classical literature,
                          discovered the undoubtable source. Lorem Ipsum comes
                          from sections 1.10.32 and 1.10.33
                        </p>
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button variant="contained" color="secondary">
                        Cancel
                      </Button>
                      <Button variant="contained">Save</Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>

              <CollapsibleCode codeItem={medium_dialog} />
            </div>
          </section>{" "}
        </div>{" "}
      </div>
      <div className="row">
        <div className="col-12">
          <section>
            <h3 className="sub-heading">Large dialog</h3>
            <p className="text">
              The <code>Dialog</code>
            </p>

            <div className="collapsible-code">
              <div className="row m-t-10 m-l-10">
                <div className="col-12 ">
                  <Button variant="contained" onClick={handleClickOpen}>
                    Open Large Dialog
                  </Button>
                  <Dialog
                    maxWidth="lg"
                    fullWidth="lg"
                    open={open}
                    onClose={handleClose}
                  >
                    <DialogTitle>
                      <h5> Dialog</h5>
                      <button className="close">
                        <em className="icon-close-round"> </em>
                      </button>
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        You can set my maximum width and whether to adapt or
                        not.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button variant="contained" color="secondary">
                        Cancel
                      </Button>
                      <Button variant="contained">Save</Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>

              <CollapsibleCode codeItem={large_dialog} />
            </div>
          </section>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <section>
            <h3 className="sub-heading">Full-screen dialog</h3>
            <p className="text">
              The <code>Full-screen dialog</code>
            </p>

            <div className="collapsible-code">
              <div className="row m-t-10 m-l-10">
                <div className="col-12 ">
                  <Button variant="contained" onClick={handleClickOpen3}>
                    Open Full-screen dialogs
                  </Button>
                  <Dialog fullScreen open={open3} onClose={handleClose3}>
                    <DialogTitle>
                      <h5> Dialog</h5>
                      <button className="close">
                        <em className="icon-close-round"> </em>
                      </button>
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        You can set my maximum width and whether to adapt or
                        not.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button variant="contained" color="secondary">
                        Cancel
                      </Button>
                      <Button variant="contained">Save</Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>

              <CollapsibleCode codeItem={fullscreen_dialog} />
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
                href="https://mui.com/material-ui/react-dialog/"
                target="blank"
              >
                MUI Dialog
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Muidialogs;
