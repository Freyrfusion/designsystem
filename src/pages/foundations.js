import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const UiFoundation = () => {
  const location = useLocation();
  return (
    <div>
      <div className="sidebar">
        <h6 className="m-t-10 m-b-0 m-l-20">Foundations</h6>
        <ul id="dynamic-tabs">
          <li
            className={
              location.pathname === "/foundations/colors" ? "active" : ""
            }
          >
            <NavLink to="/foundations/colors">Colors</NavLink>
          </li>

          <li
            className={
              location.pathname === "/foundations/logos" ? "active" : ""
            }
          >
            <NavLink to="/foundations/logos">Logos</NavLink>
          </li>
          <li
            className={
              location.pathname === "/foundations/spacing" ? "active" : ""
            }
          >
            <NavLink to="/foundations/spacing">Spacing</NavLink>
          </li>
          <li
            className={
              location.pathname === "/foundations/typographies" ? "active" : ""
            }
          >
            <NavLink to="/foundations/typographies">Typography</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UiFoundation;
