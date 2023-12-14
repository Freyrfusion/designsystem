// SearchList.js
import React, { useEffect, useState } from "react";
import "../assets/scss/abstracts/icons.scss";

const IconList = () => {
  const [ruleInfo, setRuleInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getAllCSSRules = () => {
      const styleSheet = document.styleSheets[1]; // Server :1, Local :3
      console.log(styleSheet);
      try {
        const rules = styleSheet.cssRules;
        const ruleInfoArray = Array.from(rules)
          .filter(
            (rule) =>
              rule.selectorText && rule.selectorText.startsWith(".icon-")
          )
          //  .filter((rule) => rule.selectorText.startsWith('.icon'))
          // .filter((rule) => rule.selectorText  && rule.selectorText.toLowerCase().startsWith(searchTerm.toLowerCase()))
          .map((rule) => {
            const classNames = rule.selectorText
              .split("::before")
              .map((className) => className.split("."));
            const ruleName = classNames;
            const ruleClass = rule.selectorText.split("::before").join("");
            const ruleClass1 = ruleClass.split(".").join("");
            //       const ruleName = rule.selectorText.split('.').filter(Boolean);
            const ruleProperties = Array.from(rule.style).map(
              (property) => `${property}: ${rule.style[property]}`
            );
            return {
              ruleClass1,
              ruleName,
              ruleProperties,
            };
          });
        setRuleInfo(ruleInfoArray);
      } catch (error) {
        console.error("Error accessing CSS rules:", error);
      }
    };
    getAllCSSRules();
  }, [searchTerm]);

  const [filteredItems, setFilteredItems] = useState(ruleInfo);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Filter the list only if there's a search term
    const filteredList = term
      ? ruleInfo.filter((item) =>
          item.ruleName[0][1].toLowerCase().includes(term.toLowerCase())
        )
      : ruleInfo;

    setFilteredItems(filteredList);
  };

  return (
    <div>
      <div className="icons-page">
        <div className="icons-page_header">
          <div className="row ">
            <div className="col-3">
              <h1>
                Freyr Icon Library <small>v1.0</small>
              </h1>
            </div>
            <div className="col-9">
              <input
                type="text"
                id="searchInput"
                value={searchTerm}
                onChange={handleSearch}
              />
              &nbsp;{" "}
              <span className="text-white">{filteredItems.length} /</span>{" "}
              <span className="text-white">{ruleInfo.length}</span>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <ul
              style={{ display: searchTerm ? "none" : "block" }}
              className="icons-library-list">
              {ruleInfo.map((rule, index) => (
                <li key={index}>
                  <em className={rule.ruleClass1}></em>
                  <span>{rule.ruleName}</span>
                </li>
              ))}
            </ul>
            <ul
              style={{ display: searchTerm ? "block" : "none" }}
              className="icons-library-list">
              {filteredItems.map((item, index) => (
                <li key={index}>
                  <em className={item.ruleName[0][1]}></em>
                  <span> {item.ruleName[0][1]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconList;
