import React, { useState } from "react";

const CollapsibleCode = ({ codeItem }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    // <div
    //   className={`collapsible-code ${isCollapsed ? "collapsed" : "expanded"}`}>
    <div>
      <button className="toggle-btn m-t-10" onClick={toggleCollapse}>
        {isCollapsed ? "Show Code" : "Hide Code"}
      </button>
      {isCollapsed || (
        <div className="code-container">
          <pre>
            <code>{codeItem.code}</code>
          </pre>
        </div>
      )}
    </div>
    // </div>
  );
};

export default CollapsibleCode;
