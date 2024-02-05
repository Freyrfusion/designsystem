import React, { useEffect } from "react";

const Colors = () => {
  return (
    <div>
      <div className="content-header">
        <h1 className="heading">Color palette</h1>
        <p className="text">
          Our color palette is a selection of colors that work together to
          create consistency in products.
        </p>
      </div>
      <div className="content-wrapper">
        <div className="content-area">
          <h3 className="m-t-0 m-b-0"> The palette </h3>
          <div className="row">
            <div className="col-4">
              <h6 className="h6">Green </h6>
              <div className="color_palette-bg">
                <list class="no-border">
                  <item class="bg-success-100">
                    <div>
                      Green-100
                      {/* <em className="icon-file-text-o "></em> */}
                    </div>
                    <action>#E3F7F0</action>
                  </item>
                  <item class="bg-success-200">
                    <div>Green-200</div>
                    <action>#C6EFE1</action>
                  </item>
                  <item class="bg-success-300 fg-white">
                    <div>Green-300</div>
                    <action>#AAE7D1</action>
                  </item>
                  <item class="bg-success-400 fg-white">
                    <div>Green-400</div>
                    <action>#71D8B3</action>
                  </item>
                  <item class="bg-success-500 fg-white">
                    <div>Green-500</div>
                    <action>#39C894</action>
                  </item>
                  <item class="bg-success-600 fg-white">
                    <div>Green-600</div>
                    <action>#00B876</action>
                  </item>
                  <item class="bg-success-700 fg-white">
                    <div>Green-700</div>
                    <action>#007B4F</action>
                  </item>
                  <item class="bg-success-800 fg-white">
                    <div>Green-800</div>
                    <action>#006642</action>
                  </item>
                  <item class="bg-success-900 fg-white">
                    <div>Green-900</div>
                    <action>#00291A</action>
                  </item>
                </list>
              </div>
            </div>
            <div className="col-4">
              <h6 className="h6">Red </h6>
              <div className="color_palette-bg">
                <list class="no-border">
                  <item class="bg-danger-100">
                    <div>Red-100</div>
                    <action>#FFE3E3</action>
                  </item>
                  <item class="bg-danger-200">
                    <div>Red-200</div>
                    <action>#FFC6C6</action>
                  </item>
                  <item class="bg-danger-300 fg-white">
                    <div>Red-300</div>
                    <action>#FFAAAA</action>
                  </item>
                  <item class="bg-danger-400 fg-white">
                    <div>Red-400</div>
                    <action>#FF8E8E</action>
                  </item>
                  <item class="bg-danger-500 fg-white">
                    <div>Red-500</div>
                    <action>#FF3939</action>
                  </item>
                  <item class="bg-danger-600 fg-white">
                    <div>Red-600</div>
                    <action>#FF0000</action>
                  </item>
                  <item class="bg-danger-700 fg-white">
                    <div>Red-700</div>
                    <action>#E30000</action>
                  </item>
                  <item class="bg-danger-800 fg-white">
                    <div>Red-800</div>
                    <action>#AA0000</action>
                  </item>
                  <item class="bg-danger-900 fg-white">
                    <div>Red-900</div>
                    <action>#710000</action>
                  </item>
                </list>
              </div>
            </div>

            <div className="col-4">
              <h6 className="h6"> Orange </h6>

              <div className="color_palette-bg">
                <list class="no-border">
                  <item class="bg-warning-100">
                    <div>Orange-100</div>
                    <action>#FFEDE5</action>
                  </item>
                  <item class="bg-warning-200">
                    <div>Orange-200</div>
                    <action>#FFCAB1</action>
                  </item>
                  <item class="bg-warning-300 fg-white">
                    <div>Orange-300</div>
                    <action>#FFB897</action>
                  </item>
                  <item class="bg-warning-400 fg-white">
                    <div>Orange-400</div>
                    <action>#FF8349</action>
                  </item>
                  <item class="bg-warning-500 fg-white">
                    <div>Orange-500</div>
                    <action>#FF712F</action>
                  </item>
                  <item class="bg-warning-600 fg-white">
                    <div>Orange-600</div>
                    <action>#E35413</action>
                  </item>
                  <item class="bg-warning-700 fg-white">
                    <div>Orange-700</div>
                    <action>#E35413</action>
                  </item>
                  <item class="bg-warning-800 fg-white">
                    <div>Orange-800</div>
                    <action>#C64A10</action>
                  </item>
                  <item class="bg-warning-900 fg-white">
                    <div>Orange-900</div>
                    <action>#8E350C</action>
                  </item>
                </list>
              </div>
            </div>
          </div>
          <div className="row m-t-10 m-b-30">
            <div className="col-4">
              <h6 className="h6">Blue </h6>
              <div className="color_palette-bg">
                <list class="no-border">
                  <item class="bg-primary-100">
                    <div>Blue-100</div>
                    <action>#E4EEFC</action>
                  </item>
                  <item class="bg-primary-200">
                    <div>Blue-200</div>
                    <action>#AECCF6</action>
                  </item>
                  <item class="bg-primary-300 fg-white">
                    <div>Blue-300</div>
                    <action>#93BBF3</action>
                  </item>
                  <item class="bg-primary-400 fg-white">
                    <div>Blue-400</div>
                    <action>#5D99ED</action>
                  </item>
                  <item class="bg-primary-500 fg-white">
                    <div>Blue-500</div>
                    <action>#2777E7</action>
                  </item>
                  <item class="bg-primary-600 fg-white">
                    <div>Blue-600</div>
                    <action>#0C66E4</action>
                  </item>
                  <item class="bg-primary-700 fg-white">
                    <div>Blue-700</div>
                    <action>#084498</action>
                  </item>
                  <item class="bg-primary-800 fg-white">
                    <div>Blue-800</div>
                    <action>#07397F</action>
                  </item>
                  <item class="bg-primary-900 fg-white">
                    <div>Blue-900</div>
                    <action>#052D65</action>
                  </item>
                </list>
              </div>
            </div>
            <div className="col-4">
              <h6 className="h6">Black </h6>
              <div className="color_palette-bg">
                <list class="no-border">
                  <item class="bg-black-100">
                    <div>Black-100</div>
                    <action>#F2F2F2</action>
                  </item>
                  <item class="bg-black-200">
                    <div>Black-200</div>
                    <action>#D9D9D9</action>
                  </item>
                  <item class="bg-black-300 fg-white">
                    <div>Black-300</div>
                    <action>#BFBFBF</action>
                  </item>
                  <item class="bg-black-400 fg-white">
                    <div>Black-400</div>
                    <action>#A6A6A6</action>
                  </item>
                  <item class="bg-black-500 fg-white">
                    <div>Black-500</div>
                    <action>#8C8C8C</action>
                  </item>
                  <item class="bg-black-600 fg-white">
                    <div>Black-600</div>
                    <action>#737373</action>
                  </item>
                  <item class="bg-black-700 fg-white">
                    <div>Black-700</div>
                    <action>#595959</action>
                  </item>
                  <item class="bg-black-800 fg-white">
                    <div>Black-800</div>
                    <action>#404040</action>
                  </item>
                  <item class="bg-black-900 fg-white">
                    <div>Black-900</div>
                    <action>#262626</action>
                  </item>
                  <item class="bg-black-1000 fg-white">
                    <div>Black-1000</div>
                    <action>#0D0D0D</action>
                  </item>
                </list>
              </div>
            </div>
            <div className="col-4"></div>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Colors;
