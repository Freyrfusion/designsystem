import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Foundationdefault = () => {
  const pathname = useLocation().pathname;
  return (
    <div>
      <div className="content-header">
        <h1 className="heading m-l-0">Foundations</h1>
        <p className="text m-l-0">
          Foundations are the visual elements needed to create engaging
          end-to-end user experiences. This includes guidance on iconography,
          typography, layout and structure.
        </p>
      </div>
      <div className="content-wrapper">
        <div className="content-area">
          <div className="row">
            <div className="col-6">
              {/* <Link
              className={`${pathname === "/colors" ? "navactive" : ""}`}
              to="colors"
            >
              Foundations
            </Link> */}

              <a className="foundation-main m-r-30">
                <div className="icon">
                  <em className="icon-check-mark"></em>
                </div>

                <h2> Color</h2>
                <p>
                  Color distinguishes our brand and reinforces consistent
                  experiences across products.
                </p>
              </a>
            </div>
            <div className="col-6">
              <a className="foundation-main">
                <div className="icon">
                  <em className="icon-check-mark"></em>
                </div>

                <h2> Logos</h2>
                <p>
                  Our brand and product logos are clear, impactful, and
                  recognizable. All use our blue and white color palette with a
                  few variations.
                </p>
              </a>
            </div>
          </div>
          <div className="row m-t-30">
            <div className="col-6">
              <a className="foundation-main m-r-30">
                <div className="icon">
                  <em className="icon-check-mark"></em>
                </div>

                <h2> Spacing</h2>
                <p>
                  A spacing system simplifies the creation of page layouts and
                  UI.
                </p>
              </a>
            </div>
            <div className="col-6">
              <a className="foundation-main">
                <div className="icon">
                  <em className="icon-check-mark"></em>
                </div>

                <h2> Typography</h2>
                <p>
                  Typography is our system of fonts. Each font conveys the
                  appropriate sentiment to assist our users through each stage
                  of their journey.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Foundationdefault;
