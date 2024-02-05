import React, { useState } from "react";

// Components
import Foundationdefault from "../foundations/foundationdefault.js";
import Colors from "../foundations/colors.js";
import Logos from "../foundations/logos.js";
import Spacing from "../foundations/spacing.js";
import Typographies from "../foundations/typographies.js";

const UiFoundation = () => {
  const [currentPage, setCurrentPage] = useState("foundationdefault");

  const renderPage = () => {
    switch (currentPage) {
      // case "badges":
      //   return <Badges />;

      case "colors":
        return <Colors />;
      case "logos":
        return <Logos />;
      case "spacing":
        return <Spacing />;
      case "logos":
        return <Logos />;
      case "typographies":
        return <Typographies />;

      default:
        return <Foundationdefault />;
    }
  };

  return (
    <div>
      <div className="sidebar">
        <h6 className="m-t-10 m-b-0 m-l-20">Foundations</h6>
        <ul id="dynamic-tabs">
          <li
            className={currentPage === "colors" && "activetab"}
            onClick={() => setCurrentPage("colors")}
          >
            Colors
          </li>
          <li
            className={currentPage === "logos" && "activetab"}
            onClick={() => setCurrentPage("logos")}
          >
            Logos
          </li>
          <li
            className={currentPage === "spacing" && "activetab"}
            onClick={() => setCurrentPage("spacing")}
          >
            Spacing
          </li>
          <li
            className={currentPage === "typographies" && "activetab"}
            onClick={() => setCurrentPage("typographies")}
          >
            Typographies
          </li>
        </ul>
      </div>

      {renderPage()}
    </div>
  );
};

export default UiFoundation;
