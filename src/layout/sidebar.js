import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div>
      <div className="sidebar">
        <h6 className="m-t-10 m-b-0 m-l-20">Components</h6>
        <ul id="dynamic-tabs">
          <li
            className={
              location.pathname === "/components/muiaccordion" ? "active" : ""
            }
          >
            <NavLink to="/components/muiaccordion">Accordion</NavLink>
          </li>
          <li
            className={
              location.pathname === "/components/muialerts" ? "active" : ""
            }
          >
            <NavLink to="/components/muialerts">Alerts</NavLink>
          </li>
          <li
            className={
              location.pathname === "/components/muiautocomplete"
                ? "active"
                : ""
            }
          >
            <NavLink to="/components/muiautocomplete">Autocomplete</NavLink>
          </li>
          <li
            className={
              location.pathname === "/components/muibadge" ? "active" : ""
            }
          >
            <NavLink to="/components/muibadge">Badge</NavLink>
          </li>
          <li
            className={
              location.pathname === "/components/muibuttons" ? "active" : ""
            }
          >
            <NavLink to="/components/muibuttons">Button</NavLink>
          </li>
          <li
            className={
              location.pathname === "/components/muibreadcrumbs" ? "active" : ""
            }
          >
            <NavLink to="/components/muibreadcrumbs">Breadcrumbs</NavLink>
          </li>
          <li
            className={location.pathname === "/components/card" ? "active" : ""}
          >
            <NavLink to="/components/card">Card</NavLink>
          </li>
          <li
            className={
              location.pathname === "/components/muicheckbox" ? "active" : ""
            }
          >
            <NavLink to="/components/muicheckbox">Checkbox</NavLink>
          </li>
          <li
            className={
              location.pathname === "/components/muidatatable" ? "active" : ""
            }
          >
            <NavLink to="/components/muidatatable">Data table</NavLink>
          </li>
          <li
            className={
              location.pathname === "/components/muidatepicker" ? "active" : ""
            }
          >
            <NavLink to="/components/muidatepicker">Data Picker</NavLink>
          </li>

          <li
            className={
              location.pathname === "/components/muidialogs" ? "active" : ""
            }
          >
            <NavLink to="/components/muidialogs">Dialogs</NavLink>
          </li>
          <li
            className={
              location.pathname === "/components/muiform" ? "active" : ""
            }
          >
            <NavLink to="/components/muiform">Form</NavLink>
          </li>
          <li
            className={location.pathname === "/components/grid" ? "active" : ""}
          >
            <NavLink to="/components/grid">Grid</NavLink>
          </li>
          <li
            className={location.pathname === "/components/list" ? "active" : ""}
          >
            <NavLink to="/components/list">List</NavLink>
          </li>
          <li
            className={location.pathname === "/components/menu" ? "active" : ""}
          >
            <NavLink to="/components/menu">Menu</NavLink>
          </li>
          <li
            className={
              location.pathname === "/components/muipopover" ? "active" : ""
            }
          >
            <NavLink to="/components/muipopover">Popover</NavLink>
          </li>
          <li
            className={
              location.pathname === "/components/muisidebar" ? "active" : ""
            }
          >
            <NavLink to="/components/muisidebar">Sidebar</NavLink>
          </li>
          <li
            className={
              location.pathname === "/components/stepper" ? "active" : ""
            }
          >
            <NavLink to="/components/stepper">Stepper</NavLink>
          </li>
          <li
            className={
              location.pathname === "/components/muiswitch" ? "active" : ""
            }
          >
            <NavLink to="/components/muiswitch">Switch</NavLink>
          </li>
          <li
            className={
              location.pathname === "/components/muitabs" ? "active" : ""
            }
          >
            <NavLink to="/components/muitabs">Tabs</NavLink>
          </li>
          <li
            className={
              location.pathname === "/components/textareaautosize"
                ? "active"
                : ""
            }
          >
            <NavLink to="/components/textareaautosize">
              Textarea Autosize
            </NavLink>
          </li>
          <li
            className={
              location.pathname === "/components/muitooltip" ? "active" : ""
            }
          >
            <NavLink to="/components/muitooltip" activeClassName="">
              Tooltip
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
