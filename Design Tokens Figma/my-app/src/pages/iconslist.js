// SearchList.js
import React, {useEffect, useState } from 'react';
import '../assets/scss/abstracts/icons.scss';

const IconList = () => {
    const [ruleInfo, setRuleInfo] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  

    useEffect(() => {
        const getAllCSSRules = () => {
          const styleSheet = document.styleSheets[3]; // Server :2, Local :3
          console.log(styleSheet);
            try {
              const rules = styleSheet.cssRules;

              console.log(rules.cssText);


              const ruleInfoArray = Array.from(rules)
            .filter((rule) => rule.selectorText.startsWith('.icon'))
           // .filter((rule) => rule.selectorText  && rule.selectorText.toLowerCase().startsWith(searchTerm.toLowerCase()))
            .map((rule) => {
              const classNames = rule.selectorText.split("::before").map(className => className.split("."));
              const ruleName = classNames;
              const ruleClass = rule.selectorText.split("::before").join('');
              const ruleClass1 = ruleClass.split('.').join('');
       //       const ruleName = rule.selectorText.split('.').filter(Boolean);
              const ruleProperties = Array.from(rule.style).map(
                (property) => `${property}: ${rule.style[property]}`
              );
              console.log(ruleName);
              return {
                ruleClass1,
                ruleName,
                ruleProperties,
              };
              
            });
          setRuleInfo(ruleInfoArray);
console.log(ruleInfoArray);



            //   const filteredRuleNames = Array.from(rules)
            // .filter((rule) => rule.selectorText && rule.selectorText.startsWith('.icon'))
            // .map((rule) => rule.selectorText.split('.').filter(Boolean));
            // console.log('Filtered Rule Names:', filteredRuleNames);


            //   const ruleNamesWithPrefix = Array.from(rules)
            //   .map((rule) => rule.selectorText)
            //   .filter((ruleName) => ruleName.startsWith('icon'));
            // console.log('Rule Names with Prefix:', ruleNamesWithPrefix);


            //   for (const rule of rules) {
            //    // console.log(rule.cssText.split('.'));
            //     if (rule.selectorText) {
            //         console.log(rule.selectorText);
            //       }
            //   }
            } catch (error) {
              console.error('Error accessing CSS rules:', error);
            }
      
        };
        getAllCSSRules();
        // const filteredList = ruleInfo.filter((item) => {
               
        //     if (typeof item.ruleName[0][1] === 'string') {
        //       return item.ruleName[0][1].toLowerCase().includes(searchTerm.toLowerCase());
        //     }
          
        //   });
        //   setFilteredItems(filteredList);

      }, [searchTerm]);
 
  
     
      const [filteredItems, setFilteredItems] = useState(ruleInfo);

         const handleSearch = (e) => {
            const term = e.target.value;
            setSearchTerm(term);
        

             // Filter the list only if there's a search term
    const filteredList = term
    ? ruleInfo.filter((item) => item.ruleName[0][1].toLowerCase().includes(term.toLowerCase()))
    : ruleInfo;

  setFilteredItems(filteredList);
             // Only filter the list if there's a search term


    // if (term) {
    //     const filteredList = ruleInfo.filter((item) =>
    //       item.ruleName[0][1].toLowerCase().includes(term.toLowerCase())
    //     );
    //     setFilteredItems(filteredList);
    //   } else {
    //     // If no search term, display the entire list
    //     setFilteredItems(ruleInfo);
    //   }
          
            // const filteredList = ruleInfo.filter((item) =>
            
            //   item.toLowerCase().includes(term.toLowerCase())
            // );
           
          
          };
    //   const handleSearch = (e) => {
    //     setSearchTerm(e.target.value);
    //   };
      return (
        <div>
            <div className='icons-page'>
                <div className='icons-page_header'>
            <div className='row '>
                <div className='col-3'>
                <h1>Freyr Icon Library <small>v1.0</small></h1>

               
  
          
        
      
  
                </div>
                <div className='col-9'>
                <input
        type="text" 
        id="searchInput"
        value={searchTerm}  
        onChange={handleSearch}
      />&nbsp; <span className='text-white'>{filteredItems.length}  /</span>   <span className='text-white'>{ruleInfo.length}</span>
      
                </div>
            </div>
            </div>
        
      <div className='row'>
        <div className='col-12'>
        <ul style={{ display: searchTerm ? "none" : "block" }} className='icons-library-list'>
        {ruleInfo.map((rule, index) => (
          <li key={index}>
          
            <em className={rule.ruleClass1}></em>
           <span>{rule.ruleName}</span>
          </li>
        ))}
      </ul>
<ul style={{ display: searchTerm ? "block" : "none" }} className='icons-library-list'>
    
            {filteredItems.map((item, index) => (
                
          <li key={index}>
             <em className={item.ruleName[0][1]}></em>
           <span> {item.ruleName[0][1]}</span></li>
        ))}
            </ul>
        </div>
      </div>

      </div>
        </div>
      );
};

export default IconList;