import React from "react";
import Select from "./checkbox";
import Toggle from "./badges";

export default function({ select, toggle, language }) {
  return (
    <div className="list-reset flex flex-wrap items-center justify-between my-2">
      <Toggle {...toggle} />
      <Select {...language} />
      {/* <Select {...select} /> */}
    </div>
  );
}
