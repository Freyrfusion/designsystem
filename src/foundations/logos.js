import React, { useEffect } from "react";
import FreyrFusion from "../assets/images/FreyaFusion-Logo.png";

const Logos = () => {
  return (
    <div>
      <div className="content-header">
        <h1 className="heading">Logos</h1>
        <p className="text">
          Our brand and product logos are clear, impactful, and recognizable.
          All use our blue and white color palette with a few variations.
        </p>
      </div>
      <div className="content-wrapper">
        <div className="content-area">
          <p>
            In everything we do, we aim to bring focus and clarity so our logos
            and symbols are direct, clear, and impactful. To accomplish this,
            our logo designs adhere to the guidelines below.
          </p>
          <h3> Logo design guidelines </h3>

          <h6 className="h6"> Logo color </h6>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </p>
          <div className="row">
            <div className="col-12 text-center m-t-30">
              <img
                title="Logo"
                src={FreyrFusion}
                className="logo-foundation"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
