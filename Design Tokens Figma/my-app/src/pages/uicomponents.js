import React, { useState } from "react";

// Components
import Badges from "../components/badges.js";
import Breadcrumbs from "../components/breadcrumbs.js";
import Buttons from "../components/buttons.js";
import Checkbox from "../components/checkbox.js";
import Form from "../components/form.js";
import Popover from "../components/popover.js";
import Toaster from "../components/toaster.js";
import Tabs from "../components/tabs.js";
import Muibuttons from "../components/muibuttons.js";
import Grid from "../components/grid.js";
import Muiswich from "../components/muiswitch.js";
import Muibadge from "../components/muibadge.js";
import Muitooltip from "../components/muitooltip.js";
import Table from "../components/table.js";
import Muicheckbox from "../components/muicheckbox.js";
import Muiautocomplete from "../components/muiautocomplete.js";
import Textareaautosize from "../components/textareaautosize.js";
import Muiform from "../components/muiform.js";
import Muipopover from "../components/muipopover.js";
import Muidialogs from "../components/muidialogs.js";
import Muialerts from "../components/muialerts.js";
import "../assets/scss/sitemain.scss";
import Tooltip from "../components/tooltip.js";
import Muitabs from "../components/muitabs.js";
import Muiaccordion from "../components/muiaccordion.js";
import Accordion from "../components/accordion.js";
import Muisidebar from "../components/muisidebar.js";

const UiComponents = () => {
  const [currentPage, setCurrentPage] = useState("badges");

  const renderPage = () => {
    switch (currentPage) {
      // case "badges":
      //   return <Badges />;
      case "breadcrumbs":
        return <Breadcrumbs />;
      case "buttons":
        return <Buttons />;
      case "checkbox":
        return <Checkbox />;
      case "form":
        return <Form />;
      case "popover":
        return <Popover />;
      case "toaster":
        return <Toaster />;
      case "tabs":
        return <Tabs />;
      case "muibuttons":
        return <Muibuttons />;
      case "tooltip":
        return <Tooltip />;
      case "accordion":
        return <Accordion />;
      case "grid":
        return <Grid />;
      case "muiform":
        return <Muiform />;
      case "muiswich":
        return <Muiswich />;
      case "muibadge":
        return <Muibadge />;
      case "muitooltip":
        return <Muitooltip />;
      case "table":
        return <Table />;
      case "muicheckbox":
        return <Muicheckbox />;
      case "muiautocomplete":
        return <Muiautocomplete />;
      case "textareaautosize":
        return <Textareaautosize />;
      case "muipopover":
        return <Muipopover />;
      case "muidialogs":
        return <Muidialogs />;
      case "muialerts":
        return <Muialerts />;
      case "muisidebar":
        return <Muisidebar />;;
                              case 'muitabs':
                                return <Muitabs />;
                                case 'muiaccordion':
                                  return <Muiaccordion />;
                              
      default:
        return <Muibadge />;
    }
  };

  return (
    <div>
      <div className="sidebar">
        <h6 className="m-t-10 m-b-0 m-l-20">Components</h6>
        <ul id="dynamic-tabs">
          {/* <li
            className={currentPage === "badges" && "activetab"}
            onClick={() => setCurrentPage("badges")}
          >
            Badges
          </li>
          <li
            className={currentPage === "breadcrumbs" && "activetab"}
            onClick={() => setCurrentPage("breadcrumbs")}
          >
            Breadcrumbs
          </li>
          <li
            className={currentPage === "buttons" && "activetab"}
            onClick={() => setCurrentPage("buttons")}
          >
            Buttons
          </li>
          <li
            className={currentPage === "checkbox" && "activetab"}
            onClick={() => setCurrentPage("checkbox")}
          >
            Checkbox
          </li>
          <li
            className={currentPage === "form" && "activetab"}
            onClick={() => setCurrentPage("form")}
          >
            Form
          </li>
          <li
            className={currentPage === "popover" && "activetab"}
            onClick={() => setCurrentPage("popover")}
          >
            Popover
          </li>
          <li
            className={currentPage === "tooltip" && "activetab"}
            onClick={() => setCurrentPage("tooltip")}
          >
            Tooltip
          </li>
          <li
            className={currentPage === "toaster" && "activetab"}
            onClick={() => setCurrentPage("toaster")}
          >
            Toaster
          </li>
          <li
            className={currentPage === "tabs" && "activetab"}
            onClick={() => setCurrentPage("tabs")}
          >
            Tabs{" "}
          </li> */}
          <li
            className={currentPage === "grid" && "activetab"}
            onClick={() => setCurrentPage("grid")}
          >
            Grid{" "}
          </li>
          <li
            className={currentPage === "muibuttons" && "activetab"}
            onClick={() => setCurrentPage("muibuttons")}
          >
            Buttons{" "}
          </li>
          <li
            className={currentPage === "muiform" && "activetab"}
            onClick={() => setCurrentPage("muiform")}
          >
            Form{" "}
          </li>
          <li
            className={currentPage === "muiswich" && "activetab"}
            onClick={() => setCurrentPage("muiswich")}
          >
            Swich{" "}
          </li>
          <li
            className={currentPage === "muibadge" && "activetab"}
            onClick={() => setCurrentPage("muibadge")}
          >
            Badge{" "}
          </li>
          <li
            className={currentPage === "muitooltip" && "activetab"}
            onClick={() => setCurrentPage("muitooltip")}
          >
            Tooltip{" "}
          </li>
          {/* <li
            className={currentPage === "table" && "activetab"}
            onClick={() => setCurrentPage("table")}
          >
            Table{" "}
          </li> */}

          <li
            className={currentPage === "muicheckbox" && "activetab"}
            onClick={() => setCurrentPage("muicheckbox")}
          >
            Checkbox{" "}
          </li>
          <li
            className={currentPage === "muiautocomplete" && "activetab"}
            onClick={() => setCurrentPage("muiautocomplete")}
          >
            Autocomplete{" "}
          </li>
          <li
            className={currentPage === "textareaautosize" && "activetab"}
            onClick={() => setCurrentPage("textareaautosize")}
          >
            Textarea Autosize{" "}
          </li>
          <li
            className={currentPage === "muipopover" && "activetab"}
            onClick={() => setCurrentPage("muipopover")}
          >
            Popover{" "}
          </li>
          <li
            className={currentPage === "muialerts" && "activetab"}
            onClick={() => setCurrentPage("muialerts")}
          >
            Alerts{" "}
          </li>
          <li
            className={currentPage === "muidialogs" && "activetab"}
            onClick={() => setCurrentPage("muidialogs")}
          >
            Dialogs{" "}
          </li>
          <li
            className={currentPage === "muisidebar" && "activetab"}
            onClick={() => setCurrentPage("muisidebar")}
          >
            Sidebar{" "}
          </li>
          <li className={currentPage==="muitabs" && 'activetab'} onClick={() => setCurrentPage('muitabs')}>MUI Tabs </li>
    <li className={currentPage==="muiaccordion" && 'activetab'} onClick={() => setCurrentPage('muiaccordion')}>MUI Accordion </li>
        </ul>
      </div>

      {renderPage()}
    </div>
  );
};

export default UiComponents;
