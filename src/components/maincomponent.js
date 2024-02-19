import React, { useEffect, useState } from "react";
import Avatar from "../assets/images/avatar.svg";
import Accordion from "../assets/images/accordion.png";
import Alerts from "../assets/images/alerts.png";
import Autocomplete from "../assets/images/autocomplete.png";
import Badges from "../assets/images/badges.png";
import Breadcrumbsimage from "../assets/images/breadcrumbsimage.png";
import Button from "../assets/images/button.png";
import Card from "../assets/images/card.png";
import Checkbox from "../assets/images/checkbox.png";
import Dialog from "../assets/images/dialog.png";
import Form from "../assets/images/form.png";
import Grid from "../assets/images/grid.png";
import List from "../assets/images/list.png";
import Menu from "../assets/images/menu.png";
import Popover from "../assets/images/popover.png";
import SidebarImg from "../assets/images/sidebar.png";
import Switch from "../assets/images/switch.png";
import Tabs from "../assets/images/tabs.png";
import Textarea from "../assets/images/textarea.png";
import Tooltip from "../assets/images/tooltip.png";

import { CopyBlock, dracula } from "react-code-blocks";
import CollapsibleCode from "./CodeBlockcode";
import { CheckBox } from "@mui/icons-material";
import { Breadcrumbs } from "@mui/material";

import { Link } from "react-router-dom";

const Muiform = () => {
  const [isOpen, setOpen] = useState(false);
  // Active class for bookmarks
  const [activeElement, setActiveElement] = useState(0);
  const handleItemClick = (index) => {
    setActiveElement(index);
  };

  const [currentPage, setCurrentPage] = useState("muiaccordion");
  // React Code Block Starts

  const [language, changeLanguage] = useState("js");
  const [lineNumbers, toggleLineNumbers] = useState(true);

  // Start Checkboxes

  // React Code Block End here

  // Code for collapse Starts

  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Code for collapse End here

  return (
    <div>
      <div className="content-header">
        <div className="row">
          <div className="col-md-6">
            <h1 className="heading">Components</h1>
            <p className="text">
              Components are the reusable building blocks of our design system.
              Each component meets a specific interaction or UI need, and has
              been specifically created to work together to create patterns and
              intuitive user experiences.
            </p>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>

      <div className="content-wrapper">
        <div className="content-area component_main">
          <div className="row">
            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/muiaccordion"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={Accordion} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text"> Accordion </h2>
                    </div>
                    <span class="component-content-text">
                      The Accordion component lets users show and hide sections
                      of related content on a page.
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/muialerts"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={Alerts} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text"> Alert </h2>
                    </div>
                    <span class="component-content-text">
                      A flag is used for confirmations, alerts, and
                      acknowledgments that require minimal user interaction,
                      often displayed using a flag group.
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/muiautocomplete"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={Autocomplete} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text"> Autocomplete </h2>
                    </div>
                    <span class="component-content-text">
                      The autocomplete is a normal text input enhanced by a
                      panel of suggested options.
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/muibadge"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={Badges} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text"> Badge </h2>
                    </div>
                    <span class="component-content-text">
                      A badge is a visual indicator for numeric values such as
                      tallies and scores.
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/muibreadcrumbs"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={Breadcrumbsimage} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text"> Breadcrumbs </h2>
                    </div>
                    <span class="component-content-text">
                      Breadcrumbs are a navigation system used to show a user's
                      location in a site or app.
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/muibuttons"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={Button} height="auto" width="100%" />
                    {/* <img src="assets/images/avatar.svg" class="component-image" /> */}
                    <div class="component-heading">
                      <h2 class="component-heading-text"> Button </h2>
                    </div>
                    <span class="component-content-text">
                      A button triggers an event or action. They let users know
                      what will happen next.
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/card"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={Card} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text">Card</h2>
                    </div>
                    <span class="component-content-text">
                      Cards are surfaces that display content and actions on a
                      single topic.
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/muicheckbox"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={Checkbox} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text">Checkbox</h2>
                    </div>
                    <span class="component-content-text">
                      A checkbox is an input control that allows a user to
                      select one or more options from a number of choices.
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/muidialogs"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={Dialog} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text"> Dialogs </h2>
                    </div>
                    <span class="component-content-text">
                      Dialogs inform users about a task and can contain critical
                      information, require decisions, or involve multiple tasks.
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/muiform"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={Form} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text">Form</h2>
                    </div>
                    <span class="component-content-text">
                      A form allows users to input information.
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/grid"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={Grid} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text">Grid</h2>
                    </div>
                    <span class="component-content-text">
                      A grid uses the CSS grid API to create consistent layouts.
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/list"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={List} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text">List</h2>
                    </div>
                    <span class="component-content-text">
                      Lists are a continuous group of text or images. They are
                      composed of items containing primary and supplemental
                      actions.
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/muimenu"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={Menu} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text">Menu</h2>
                    </div>
                    <span class="component-content-text">
                      A dropdown menu displays a list of actions or options to a
                      user.
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/muipopover"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={Popover} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text">Popover</h2>
                    </div>
                    <span class="component-content-text">
                      A Popover can be used to display some content on top of
                      another.
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/sidebar"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={SidebarImg} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text"> Sidebar </h2>
                    </div>
                    <span class="component-content-text">
                      The navigation drawers (or "sidebars") provide ergonomic
                      access to destinations in a site or app functionality such
                      as switching accounts.
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/muiswitch"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={Switch} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text"> Switch </h2>
                    </div>
                    <span class="component-content-text">
                      A switch is used to view or switch between enabled or
                      disabled states.
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/muitabs"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={Tabs} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text"> Tabs </h2>
                    </div>
                    <span class="component-content-text">
                      Tabs are used to organize content by grouping similar
                      information on the same page.
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/textareaautosize"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={Textarea} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text">Textarea Autosize</h2>
                    </div>
                    <span class="component-content-text">
                      Use the minrows prop to define the minimum height of the
                      component.
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 m-20">
              <Link
                activeClassName="is-active"
                to="/components/muitooltip"
                className="design-system-component"
              >
                <div className="component-innerbox">
                  <div className="component-image-box">
                    <img src={Tooltip} height="auto" width="100%" />
                    <div class="component-heading">
                      <h2 class="component-heading-text">Tooltip</h2>
                    </div>
                    <span class="component-content-text">
                      A tooltip is a floating, non-actionable label used to
                      explain a user interface element or feature.
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Muiform;
