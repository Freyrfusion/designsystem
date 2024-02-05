import React, { useEffect } from "react";

const Spacing = () => {
  return (
    <div>
      <div className="content-header">
        <h1 className="heading">Spacing</h1>
        <p className="text">
          A spacing system simplifies the creation of page layouts and UI.
        </p>
      </div>
      <div className="content-wrapper">
        <div className="content-area">
          <p className="m-t-0">
            The consistent and intentional use of a spacing system creates a
            more harmonious experience for the end user. A spacing system also
            lays a foundation for responsive design and customisable UI density
            in the future, which will enhance the overall quality and
            accessibility of our products.
          </p>
          <h3 className="m-b-10"> 8 pixel base unit </h3>
          <p>
            Our spacing system is built around a base unit of 8 pixels. This
            base unit determines the spacing scale and ensures visual
            consistency across products.
          </p>
          <h3 className="m-b-10">Scale</h3>
          <p>
            Building off of the 8px base unit, the main foundation of our
            spacing system is the spacing scale. This scale is a limited set of
            space values that can be used to lay out UI elements in a consistent
            way.
          </p>
          <p className="m-b-10">
            Each spacing value is a multiple of the base unit and ranges from
            0px to 80px to allow for flexibility while still maintaining
            consistency across different layouts.
          </p>
          <h3 className="m-b-10">Space tokens</h3>
          <p className="m-b-10">
            The 8px base unit also forms the basis of our space token system, as
            the base unit space.100. Every space token is a multiple of this
            base unit, the number suffix representing the percentage of the base
            unit.
          </p>
          <p className="m-b-10">
            For example, space.200 is 200% of the size of the base unit,
            therefore represents 16px.
          </p>
          <p>
            Each space token should be used in place of the raw pixel or REM
            values when adding space between components or objects on a page.
            Usage examples are detailed below.
          </p>
          <div className="row">
            <div className="col-12">
              <table
                class="table-latitude"
                cellPadding="0"
                cellSpacing="0"
                border="0"
              >
                <thead>
                  <th>Token</th>
                  <th>Base unit multiplier</th>
                  <th>REM </th>
                  <th>Pixels</th>
                  <th>Visual representation</th>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <span className="space-token"> space.0 </span>
                    </td>
                    <td>0×</td>
                    <td>0rem </td>
                    <td>0px </td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="space-token"> space.025 </span>
                    </td>
                    <td> 0.25× </td>
                    <td> 0.125rem </td>
                    <td> 2px </td>
                    <td>
                      <span className="visual-bg _2px"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="space-token"> space.050 </span>
                    </td>
                    <td> 0.5× </td>
                    <td> 0.25rem </td>
                    <td> 4px </td>
                    <td>
                      <span className="visual-bg _4px"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="space-token">space.100 </span>
                    </td>
                    <td> 1× </td>
                    <td> 0.5rem </td>
                    <td> 8px </td>
                    <td>
                      <span className="visual-bg _8px"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="space-token"> space.150 </span>
                    </td>
                    <td> 1.5× </td>
                    <td> 0.75rem </td>
                    <td> 12px </td>
                    <td>
                      <span className="visual-bg _12px"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="space-token"> space.200 </span>
                    </td>
                    <td> 2× </td>
                    <td> 1rem </td>
                    <td> 16px</td>
                    <td>
                      <span className="visual-bg _16px"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="space-token"> space.300 </span>
                    </td>
                    <td> 3× </td>
                    <td> 1.5rem </td>
                    <td> 24px </td>
                    <td>
                      <span className="visual-bg _24px"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="space-token"> space.400 </span>
                    </td>
                    <td> 4× </td>
                    <td> 2rem </td>
                    <td> 32px </td>
                    <td>
                      <span className="visual-bg _32px"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="space-token"> space.500 </span>
                    </td>
                    <td> 5× </td>
                    <td> 2.5rem </td>
                    <td> 40px </td>
                    <td>
                      <span className="visual-bg _40px"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="space-token"> space.600 </span>
                    </td>
                    <td> 6× </td>
                    <td> 3rem </td>
                    <td> 48px </td>
                    <td>
                      <span className="visual-bg _48px"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br></br> <br></br>
        </div>
      </div>{" "}
    </div>
  );
};

export default Spacing;
