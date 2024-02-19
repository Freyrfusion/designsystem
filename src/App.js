import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

import Foundations from "./pages/foundations";
import Icons from "./pages/icons";
import Checkbox from "./components/checkbox";
import MuiComponents from "./pages/muicomponents";
import Buttons from "./components/buttons";
import Form from "./components/form";
import Popover from "./components/popover";
import Toaster from "./components/toaster";
import Badges from "./components/badges";
import Muibuttons from "./components/muibuttons";
import Breadcrumbs from "./components/breadcrumbs";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./layout/header";
import Navigation from "./layout/navigation";
import Content from "./layout/content";
import { Component } from "react";
import ReactDOM from "react-dom";
import UiComponents from "./pages/uicomponents";
import Muiaccordion from "./components/muiaccordion";
import Muialerts from "./components/muialerts";
import Sidebar from "./layout/sidebar";
import Foundation from "./pages/foundations.js";
import Mainuicomponentn from "./components/maincomponent";
import Muiautocomplete from "./components/muiautocomplete.js";
import Muibadge from "./components/muibadge";
import Muibreadcrumbs from "./components/muibreadcrumbs.js";
import Muicheckbox from "./components/muicheckbox.js";
import Card from "./components/card.js";
import Muidialogs from "./components/muidialogs.js";
import Muiform from "./components/muiform.js";
import Grid from "./components/grid.js";
import Muipopover from "./components/muipopover.js";
import Muisidebar from "./components/muisidebar.js";
import Muiswich from "./components/muiswitch.js";
import Muitabs from "./components/muitabs.js";
import Textareaautosize from "./components/textareaautosize.js";
import Muitooltip from "./components/muitooltip.js";
import Foundationdefault from "./foundations/foundationdefault.js";
import List from "./components/list.js";
import Colors from "./foundations/colors.js";
import Logos from "./foundations/logos.js";
import Spacing from "./foundations/spacing.js";
import Typographies from "./foundations/typographies.js";
import Menu from "./components/menu.js";
import Muidatatable from "./components/muidatatable.js";
import Muidatepicker from "./components/muidatepicker.js";
import Stepper from "./components/stepper.js";

const SidebartoShowHide = () => {
  const location = useLocation();
  //const showFoundationsidebar = location.pathname === "/foundations";
  const showFoundationsidebar = location.pathname.startsWith("/foundations");
  const showComponentsidebar = location.pathname.startsWith("/components");
  // const isFoundationsParent =
  //   showFoundationsidebar && showFoundationsidebar.isExact;
  // const isComponentsParent =
  //   showComponentsidebar && showComponentsidebar.isExact;
  return (
    <div>
      {showComponentsidebar && <Sidebar></Sidebar>};
      {showFoundationsidebar && <Foundations></Foundations>};
    </div>
  );
};

// import { Button } from '@material-ui/core';

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <SidebartoShowHide></SidebartoShowHide>
        <Routes>
          <Route path="/" element={<Navigate replace to="/foundations" />} />
          <Route path="foundations" element={<Foundationdefault />} />
          <Route path="components" element={<Mainuicomponentn />} />
          <Route path="icons" element={<Icons />} />
          <Route path="components/muiaccordion" element={<Muiaccordion />} />
          <Route path="components/muialerts" element={<Muialerts />} />
          <Route
            path="components/muiautocomplete"
            element={<Muiautocomplete />}
          />
          <Route path="components/muibadge" element={<Muibadge />} />
          <Route path="components/muibuttons" element={<Muibuttons />} />
          <Route
            path="components/muibreadcrumbs"
            element={<Muibreadcrumbs />}
          />
          <Route path="components/card" element={<Card />} />
          <Route path="components/muicheckbox" element={<Muicheckbox />} />
          <Route path="components/muidialogs" element={<Muidialogs />} />
          <Route path="components/muiform" element={<Muiform />} />
          <Route path="components/grid" element={<Grid />} />
          <Route path="components/list" element={<List />} />
          <Route path="components/menu" element={<Menu />} />
          <Route path="components/muipopover" element={<Muipopover />} />
          <Route path="components/muisidebar" element={<Muisidebar />} />
          <Route path="components/muiswitch" element={<Muiswich />} />
          <Route path="components/muitabs" element={<Muitabs />} />
          <Route
            path="components/textareaautosize"
            element={<Textareaautosize />}
          />
          <Route path="components/muitooltip" element={<Muitooltip />} />
          <Route path="foundations/colors" element={<Colors />} />
          <Route path="foundations/logos" element={<Logos />} />
          <Route path="foundations/spacing" element={<Spacing />} />
          <Route path="foundations/typographies" element={<Typographies />} />
          <Route path="components/muidatatable" element={<Muidatatable />} />
          <Route path="components/muidatepicker" element={<Muidatepicker />} />
          <Route path="components/stepper" element={<Stepper />} />
          {/* <Route path="uRIMS-Library/grid" element={<Grid/>} />
        <Route path="checkbox" element={<Checkbox/>} />
        <Route path="buttons" element={<Buttons/>} />
        <Route path="popover" element={<Popover/>} />
        <Route path="toaster" element={<Toaster/>} />
        <Route path="form" element={<Form/>} />
        <Route path="badges" element={<Badges/>} />
        <Route path="breadcrumbs" element={<Breadcrumbs/>} />
        <Route path="muicomponents" element={<MuiComponents/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
