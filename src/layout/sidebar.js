import React, { useState } from "react";
import Muiaccordion from "../components/muiaccordion.js";
import Muibadge from "../components/muibadge.js";

const [currentPage, setCurrentPage] = useState("badges");

const renderPage = () => {
  switch (currentPage) {
    case "muiaccordion":
      return <Muiaccordion />;

    default:
      return <Muibadge />;
  }
};

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <h5 className="m-l-10 m-b-10">MUI Components</h5>
        <input
          type="text"
          className="control-search"
          placeholder="Search"
          id="searchInput"
        />
        <ul id="dynamic-tabs">
          <li>
            <a data-toggle="tab" role="tab">
              Colors
            </a>
          </li>
          <li
            className={currentPage === "muiaccordion" && "activetab"}
            onClick={() => setCurrentPage("muiaccordion")}
          >
            Accordion
          </li>
        </ul>
      </div>
      {renderPage()}
    </div>
  );
};

export default Sidebar;
