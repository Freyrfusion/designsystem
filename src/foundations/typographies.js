import React, { useEffect } from "react";

const Typography = () => {
  return (
    <div>
      <div className="content-header">
        <h1 className="heading">Typography</h1>
        <p className="text">
          Typography is our system of fonts. Each font conveys the appropriate
          sentiment to assist our users through each stage of their journey.
        </p>
      </div>
      <div className="content-wrapper foundations_main">
        <div className="content-area">
          <h3 className="m-b-10 m-t-0"> FreyaFusion font stack </h3>
          <h2 className="m-t-10 m-b-30">Open Sans</h2>
          <h3 className="m-b-10">Brand Typography</h3>
          <p>
            We use our custom font, Charlie Sans, for almost everything brand
            and marketing — from banner ads to billboards. It was designed to be
            incredibly versatile with lots of range in terms of tone and
            playfulness. It can be quirky and expressive when it needs to be, or
            neutral when the situation calls for something a bit more serious.
            On rare occasions, we also use native typography for selected
            elements. Charlie is available in two styles, Display and Text.
          </p>
          <h3 className="m-b-10">Product Typography</h3>
          <p className="m-b-10">
            We use native typography for all in-product experiences. This
            ensures that the UI is optimized to be highly legible, performs
            well, and is frictionless as you move between Atlassian products and
            the rest of the system.
          </p>
          <h3 className="m-b-10">Font stacks</h3>
          <p className="m-b-10">
            We use sans serif fonts for most of our type in-product, the
            exception being when you want to display code then you should defer
            to monospace fonts.
          </p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Typography;
